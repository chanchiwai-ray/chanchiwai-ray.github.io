"""Command interface for parsing personal documents."""

from importlib import resources

import sys
import click
import yaml
from jinja2 import Environment, FileSystemLoader

TEMPLATE_DIR = "templates"
RESUME = "resume.tex"


@click.group()
@click.pass_context
def main(ctx: click.Context) -> None:
    """Parse tex file."""
    ctx.ensure_object(dict)
    with resources.path(__package__, TEMPLATE_DIR) as templates:
        ctx.obj["env"] = Environment(
            loader=FileSystemLoader(templates),
            comment_start_string="{=",
            comment_end_string="=}",
        )


@main.command()
@click.argument("file")
@click.pass_context
def resume(ctx: click.Context, file: str) -> None:
    """Parse resume.tex."""
    env = ctx.obj["env"]
    try:
        with open(RESUME, "w") as f, open(file, "r") as data:
            template = env.get_template(RESUME).render(data=yaml.safe_load(data))
            f.write(template)
    except FileNotFoundError as e:
        print(e)
        sys.exit(1)
