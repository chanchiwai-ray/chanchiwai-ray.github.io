export interface Project {
  name: string
  link: string
  image: string
  technologies: string[]
  description: string
}

// Add new project from the top
const projects: Project[] = [
  {
    name: "MicroCeph",
    link: "https://github.com/canonical/microceph",
    image: "",
    technologies: ["Go", "Ceph", "Snap"],
    description:
      "MicroCeph is snap-deployed Ceph with built-in clustering. I contributed the host maintenance feature to MicroCeph so that cloud operators can easily put any MicroCeph node into maintenance mode, and safely perform maintenance operations.",
  },
  {
    name: "MicroCeph Charm",
    link: "https://github.com/canonical/charm-microceph",
    image: "",
    technologies: ["Go", "Ceph", "Charm"],
    description:
      "MicroCeph charm is the charming way to deploy the microceph snap. I contributed the host maintenance actions to MicroCeph charm so that cloud operator to put any microceph unit into maintenance node, and safely perform maintenance operations.",
  },
  {
    name: "Solution Engineering Automation",
    link: "https://github.com/canonical/solutions-engineering-automation",
    image: "",
    technologies: ["CI/CD", "Terraform"],
    description:
      "A centralized repository for managing multiple GitHub repositories' settings and files via Terraform. I was an active maintainer of this project while I was in solutions engineering team.",
  },
  {
    name: "Hardware Observer Operator",
    link: "https://github.com/canonical/hardware-observer-operator",
    image: "",
    technologies: ["Charm", "Python", "Grafana"],
    description:
      "A charm to setup prometheus exporter for IPMI, RedFish and RAID devices from different vendors. I contributed the initial version of the charm, and created dashboard and alert rules for the charm.",
  },
  {
    name: "OpenStack Exporter Operator",
    link: "https://github.com/canonical/openstack-exporter-operator",
    image: "",
    technologies: ["Charm", "Python", "OpenStack"],
    description:
      "OpenStack Exporter Operator is a machine charm for the openstack exporter. I contributed the initial version of the charm, and was a maintainer of this project.",
  },
  {
    name: "OpenStack Exporter",
    link: "https://github.com/openstack-exporter/openstack-exporter",
    image: "",
    technologies: ["Go", "Snap", "OpenStack", "Prometheus"],
    description:
      "OpenStack Exporter is an exporter for OpenStack. I renovated the snap package for this project, making it possible to integrate with OpenStack Exporter Operator.",
  },
  {
    name: "Prometheus Hardware Exporter",
    link: "https://github.com/canonical/prometheus-hardware-exporter",
    image: "",
    technologies: ["Python", "Prometheus"],
    description:
      "Prometheus Hardware Exporter is an exporter for Hardware Observer. I was the major contributor of this project.",
  },
  {
    name: "Prometheus Juju Backup All Exporter",
    link: "https://github.com/canonical/prometheus-juju-backup-all-exporter",
    image: "",
    technologies: ["Python", "Prometheus"],
    description:
      "Prometheus Juju Backup All Exporter is an exporter for Charm Juju Backup All. I was the major contributor of this project.",
  },
  {
    name: "Snap Tempest Automation",
    link: "https://github.com/canonical/snap-tempest-automation",
    image: "",
    technologies: ["CI/CD", "Python"],
    description:
      "An automation repository for automatically updating Snap Tempest's dependencies. I worked on enhancing the CI/CD pipeline for automating the update process.",
  },
  {
    name: "Snap OpenStack",
    link: "https://github.com/canonical/snap-openstack",
    image: "",
    technologies: ["Snap", "OpenStack", "Grafana", "Prometheus", "Loki"],
    description:
      "Snap OpenStack is one of the core component of Sunbeam. I made several contribution to the sunbeam projects, including the observability feature and validation feature.",
  },
  {
    name: "Snap OpenStack Hypervisor",
    link: "https://github.com/canonical/snap-openstack-hypervisor",
    image: "",
    technologies: ["Snap", "OpenStack", "Grafana", "Prometheus", "Loki"],
    description:
      "Snap OpenStack Hypervisor is one of the core component of Sunbeam. I added libvirt exporter and ovs exporter services to the snap, and contributed some features to this project. ",
  },
  {
    name: "Sunbeam Charms",
    link: "https://opendev.org/openstack/sunbeam-charms",
    image: "",
    technologies: ["Charm", "OpenStack", "Kubernetes"],
    description:
      "Sunbeam charms are a collection of charms used in Sunbeam. I contributed the tempest k8s charm to this project, which was a part of the validation feature.",
  },
  {
    name: "OpenStack Rocks",
    link: "https://github.com/canonical/ubuntu-openstack-rocks",
    image: "",
    technologies: ["Rock", "OpenStack"],
    description:
      "OpenStack rocks are a collection of rock images used in Sunbeam. I contributed the tempest rock image to this project, which was a part of tempest k8s charm.",
  },
  {
    name: "Personal Website",
    description: "A personal website built with Next.js and powered by GitHub Page.",
    link: "https://github.com/chanchiwai-ray/chanchiwai-ray.github.io",
    image: "",
    technologies: ["Github page", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Google Drive CLI",
    link: "https://github.com/chanchiwai-ray/google-drive-cli",
    image: "",
    technologies: ["Python", "Google Drive API"],
    description: "A command-line tool to perform various operations on your google drive.",
  },
  {
    name: "GitHub Flavor Markdown Editor",
    link: "https://github.com/chanchiwai-ray/github-markdown",
    image: "",
    technologies: ["Go", "CSS", "HTML"],
    description:
      "A simple web-based editor that allows you to edit and preview the content of a GFM markdown file.",
  },
  {
    name: "Mortgage Calculator",
    link: "https://github.com/chanchiwai-ray/mortgage-calculator",
    image: "",
    technologies: ["Python"],
    description:
      "Mortgage calculator provides a simple command line program to estimate the monthly payment for a fixed rate mortgage.",
  },
  {
    name: "Background Estimation",
    link: "https://arxiv.org/abs/2009.03025",
    image: "",
    technologies: ["Python", "Data analysis", "Gravitational wave"],
    description:
      "My Master's thesis on gravitational data analysis. It focused on improving the background estimation in GstLAL inspiral Pipeline.",
  },
  {
    name: "Rotation Pattern Recognition",
    link: "",
    image: "",
    technologies: ["ANN"],
    description:
      "A university Physics project that I did during summer. This project was about training an artificial neutral network to recognize the rotational pattern of a cup using the inputs from two cameras.",
  },
  {
    name: "Molecular Dynamic Simulation",
    link: "",
    image: "",
    technologies: ["C++"],
    description:
      "A university Physics project that I did during summer. This project was about running a Monte Carlo simulation to find the optimal physical parameters for large molecules (TPyP) to form on the substrate Au.",
  },
]

export default projects
