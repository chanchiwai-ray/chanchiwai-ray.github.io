interface Duration {
  start: string
  end: string
}

interface Education {
  name: string
  degree: string
  duration: Duration
  highlight: string[]
  location: string
}

const educationData: Education[] = [
  {
    degree: "PhD in Physics",
    duration: { end: "Apr 2022", start: "Sep 2020" },
    highlight: [
      "Worked as a project researcher Research Center for the Early Universe.",
      "Dropped out of PhD program due to COVID-19 and social distance, and started working at Canonical (remote).",
    ],
    location: "Tokyo, Japan",
    name: "The University of Tokyo",
  },
  {
    degree: "Master of Science in Physics",
    duration: { end: "Sep 2020", start: "Sep 2018" },
    highlight: [
      "Overall grade A in course work performance",
      "Teaching Assistant in Gravitational Wave Physics",
      "Submitted a techniqcal paper to arXiv (arXiv:2009.03025)",
    ],
    location: "Tokyo, Japan",
    name: "The University of Tokyo",
  },
  {
    degree: "Bachelor of Science in Physics",
    duration: { end: "Sep 2018", start: "Sep 2014" },
    highlight: [
      "Dean's List 2015 - 2017",
      "HKUST Robust team (Smart Car team 2016 - 2017)",
      "Graduated with First Honor Class (GPA: 3.7/4.3)",
    ],
    location: "Hong Kong",
    name: "The Hong Kong University of Science and Technology",
  },
]

export default educationData
