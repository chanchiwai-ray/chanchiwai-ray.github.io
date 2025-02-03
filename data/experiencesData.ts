interface Duration {
  start: string
  end: string
}

interface Experience {
  hide: boolean
  name: string
  title: string
  location: string
  duration: Duration
  highlight: string[]
}

const experienceData: Experience[] = [
  {
    hide: false,
    duration: { end: "Present", start: "Jan 2024" },
    highlight: [
      "Contributed and created the Validation plugin to MicroStack with the team, enabling cloud validation for Sunbeam using tempest without the hassle of configuring it.",
      "Integrated the Validation plugin with the Observability plugin to peridically check and monitor the health of MicroStack with using Grafana dashboards and alerts, allowing cloud operators to identify issues easily.",
      "Worked with the team and rewrote the legacy unmaintained hw-health charm into Hardware Observer operator with native integration of COS-lite, providing modern solution for monitoring hardware resources on bare-metal infrastructure in Juju ecosystem.",
    ],
    location: "Hong Kong",
    name: "Canonical",
    title: "Software Engineer I",
  },
  {
    hide: false,
    duration: { end: "Jan 2024", start: "May 2023" },
    highlight: [
      "Contributed and created the Observability plugin to MicroStack (an OpenStack distriution also known as Sunbeam) with the team, enabling Observability (COS Lite) in MicroStack.",
      "Developed a Python-based Prometheus Exporter for Hardware Observer Operator (prometheus-hardware-exporter) to provide various collectors for vendor dependent RAID devices.",
      "Worked with the team and rewrote the legacy hw-health charm into Hardware Observer operator with native integration of observability stack (COS Lite), providing modern solution for monitoring hardware resources on bare-metal infrastructure in Juju ecosystem.",
    ],
    location: "Hong Kong",
    name: "Canonical",
    title: "Associate DevOsp Engineer",
  },
  {
    hide: false,
    duration: { end: "May 2023", start: "May 2022" },
    highlight: [
      "Addressed critical bugs in Graylog charm and Elasticsearch charm that blocked the testing in solution QA team's testing pipeline.",
      "Enhanced legacy apt-mirror charm's code base by introducing unit and functional tests, assuring the charm's quality.",
      "Introduced a clean up feature to apt-mirror charm that helped reducing unused mirrored files, and reduced disk usage in privately managed production cloud.",
      "Developed a Snap-based Prometheus Exporter (prometheus-juju-backup-all-exporter) for Juju Backup All charm, and integrated the charm with the Canonical Observability Stack Lite (COS Lite).",
    ],
    location: "Hong Kong",
    name: "Canonical",
    title: "Graduate DevOps Engineer",
  },
  {
    hide: false,
    duration: { end: "Apr 2022", start: "Aug 2021" },
    highlight: [
      "Set up analysis pipeline to re-analyze 3 months of time series data with latest GstLAL pipeline at the time, and found consistency with old results.",
      "Improved GstLAL pipeline's offline dashboard to support on-demand loading of images.",
      "Developed static group website and prepared TensorFlow tutorial for new members.",
    ],
    location: "Tokyo, Japan",
    name: "Research Center for the Early Universe, University of Tokyo",
    title: "Project Researcher",
  },
  {
    hide: false,
    duration: { end: "Aug 2021", start: "Jul 2021" },
    highlight: [
      "Social media application development with Python (Flask framework).",
      "Implemented authentication and login system with Google OAuth 2.0 and Redis.",
      "Implemented text and image storage system using Redis and MinIO.",
      "Employed micro-services architecture and deployed the app using Docker, AWS, and Terraform.",
    ],
    location: "Tokyo, Japan",
    name: "HENNGE",
    title: "Software Engineer Intern",
  },
]

export default experienceData
