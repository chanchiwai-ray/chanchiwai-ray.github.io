interface Certificate {
  name: string
  issuer: string
  issue_date: string
  expire_date: string
  id: string
  link: string
}

const certificateData: Certificate[] = [
  {
    name: "Certified Kubernetes Application Developer",
    issuer: "The Linux Foundation",
    issue_date: "Nov 2024",
    expire_date: "Nov 2026",
    id: "LF-8023d8bwns",
    link: "https://www.credly.com/badges/5a27e98a-8b3f-40b5-be59-0be559bdd8a7",
  },
]

export default certificateData
