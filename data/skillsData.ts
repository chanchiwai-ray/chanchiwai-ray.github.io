interface Skill {
  cloud_technology: string[]
  software_development: string[]
  programming_language: string[]
}

const skillData: Skill = {
  cloud_technology: [
    "Docker",
    "Kubernetes",
    "OpenStack",
    "Terraform",
    "Juju",
    "ROCK",
    "LXD",
    "Snap",
    "Grafana",
    "Prometheus",
    "Loki",
  ],
  software_development: ["Git", "Linux", "CI/CD", "Scrum"],
  programming_language: ["Python", "Go", "Javascript"],
}

export default skillData
