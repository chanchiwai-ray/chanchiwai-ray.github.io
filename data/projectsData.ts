interface Duration {
  start: string
  end: string
}

interface Project {
  hide: boolean
  name: string
  description: string
  href?: string | undefined
  imgSrc?: string | undefined
  duration: Duration
  highlight: string[]
  technology: string[]
}

const projectsData: Project[] = [
  {
    hide: false,
    name: "Personal website",
    description: "A personal website build with Nextjs and powered by github page (this site).",
    href: "https://github.com/chanchiwai-ray/chanchiwai-ray.github.io",
    imgSrc: undefined,
    duration: {
      start: "Jan 2022",
      end: "Feb 2022",
    },
    highlight: [
      "Built interactive web frontend with React, Bootstrap 5 and Font Awesome",
      "Implemented password-based login system with passport-local, ExpressJS, and MongoDB",
      "Employed microservices architecture and deployed with Docker and Docker Compose",
      "A personal project that was built to manage personal data for my oversea studying. It includes some productive applications for students studying aboard (expense tracking app, contact book ...)",
    ],
    technology: ["Next.js", "Github Page"],
  },
  {
    hide: false,
    name: "Twitter clone",
    description: "A minimalist clone of Twitter built with Python and Flask.",
    href: "https://github.com/chanchiwai-ray/twitter-clone",
    imgSrc: undefined,
    duration: {
      start: "July 2021",
      end: "August 2021",
    },
    highlight: [
      "Built a minimalist clone of Twitter built with Python and Flask for learning purpose",
    ],
    technology: ["Python", "Redis", "Google OAuth 2.0", "MinIO", "Nginx"],
  },
  {
    hide: false,
    name: "Personal dashboard",
    description: "A personal dashboard for managing personal data.",
    href: "https://github.com/chanchiwai-ray/dashboard",
    imgSrc: undefined,
    duration: {
      start: "July 2021",
      end: "Sep 2021",
    },
    highlight: [
      "Built interactive web frontend with React, Bootstrap 5 and Font Awesome",
      "Implemented password-based login system with passport-local, ExpressJS, and MongoDB",
      "Employed microservices architecture and deployed with Docker and Docker Compose",
      "A personal project that was built to manage personal data for my oversea studying. It includes some productive applications for students studying aboard (expense tracking app, contact book ...)",
    ],
    technology: ["ReactJS", "ExpressJS", "MongoDB", "Docker"],
  },
  {
    hide: false,
    duration: { end: "Jan 2021", start: "Nov 2020" },
    highlight: [
      "Built upon open source project and Google Drive API",
      "Allow fast access to Google Drive without going through the web interface",
      "Support create, download, upload and other commonly used operations with multi-threading supports",
    ],
    name: "Google Drive CLI",
    href: "https://github.com/chanchiwai-ray/google-drive-cli",
    technology: ["Python", "Google Drive API"],
    description: "A command line interface for Google Drive.",
  },
  {
    duration: { end: "Sep 2020", start: "Sep 2018" },
    highlight: [
      "Worked on improving the maximum likelihood ranking statistic in GstLAL inspiral pipeline",
      "Addressed signal contamination problem in the noise model when gravitational wave (GW) signals are presented",
      "Developed robust method to estimate noise model even under extremely high signal rate",
    ],
    hide: true,
    name: "Background Estimation",
    href: "https://arxiv.org/abs/2009.03025",
    technology: ["Gravitational Wave Data Analysis"],
    description: "Improving the background estimation technique in the GstLAL inspiral pipeline.",
  },
  {
    duration: { end: "Sep 2018", start: "Sep 2017" },
    highlight: [
      "Explored different feed-forward NN architectures to recognize rotation pattern of a cup",
      "Trained two individual feed-forward NNs using images from different viewing angles and combined the two networks with a fully connected layer to achieve better result in noisy environment.",
      "Developed robust method to estimate noise model even under extremely high signal rate",
    ],
    hide: true,
    name: "Rotation Pattern Recognition",
    technology: ["Artificial Neural Network"],
    description: "Command line interface for Google Drive using Google Drive API.",
  },
  {
    duration: { end: "Sep 2017", start: "Jun 2017" },
    highlight: [
      "Conducted Monte Carlo simulation to find the optimal physical parameters for large molecules (TPyP) to form on the substrate Au",
      "Compared simulation results with experimental results and understand the differences",
      "Developed robust method to estimate noise model even under extremely high signal rate",
    ],
    hide: true,
    name: "Molecular Dynamic Simulation",
    technology: ["Physical simulation"],
    description: "Command line interface for Google Drive using Google Drive API.",
  },
]

export default projectsData
