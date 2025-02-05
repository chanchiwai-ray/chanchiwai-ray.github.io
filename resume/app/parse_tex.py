"""Command interface for parsing personal documents."""

import sys
from importlib import resources

import click
import pydantic_yaml
from jinja2 import Environment, FileSystemLoader

from app.model import Model

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
            m = pydantic_yaml.parse_yaml_raw_as(Model, data.read().strip())
            template = env.get_template(RESUME).render(data=m.model_dump())
            f.write(template)
    except FileNotFoundError as e:
        print(e)
        sys.exit(1)
