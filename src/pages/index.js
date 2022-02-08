import styles from "../../styles/home.module.css";
import MainLayout from "../layouts/MainLayout";
import HistoryItem from "../components/HistoryList";
import SkillList from "../components/SkillList";

export default function Home() {
  return (
    <MainLayout title="Chi Wai CHAN">
      <div className={`${styles.coverImage}`}></div>
      <section className={`${styles.about}`}>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-3 text-center">
              <img
                className={`${styles.portrait} rounded-circle`}
                src="/images/chiwai_chan.png"
                alt="Personal Portrait"
              />
            </div>
            <div className="col-lg-9 px-5">
              <h1 className="fw-light text-lg-start text-center">About Me</h1>
              <p className="lead text-muted text-lg-start text-center">
                I am currently a PhD student at the University of Tokyo working on
                improving the detection of{" "}
                <a href="https://www.ligo.caltech.edu/page/what-are-gw">
                  gravitational waves{" "}
                </a>{" "}
                (GWs) from compact binaries.
              </p>
              <p className="lead text-muted text-lg-start text-center">
                My past research was working on the improving the noise model estimation
                in the presence of gravitational wave signals for{" "}
                <a href="https://git.ligo.org/lscsoft/gstlal">GstLAL</a> pipeline.
                Currently, I am working on reducing the noise in the GW strain data with
                machine learning, using the information from the physical environment
                monitoring system.
              </p>
              <p className="lead text-muted text-lg-start text-center">
                In addition to research, I am also interested in software development,{" "}
                <a href="https://www.cloudskillsboost.google/public_profiles/0077dcbb-c0f7-4204-b5cf-08124d175b86">
                  <span
                    data-bs-toggle="tooptip"
                    data-bs-placement="bottom"
                    title="My
                google cloud skill bagdes"
                  >
                    cloud computing
                  </span>
                </a>{" "}
                and machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row py-5">
            <h3 className="text-center mb-3 mb-lg-5">
              <span className="bi bi-clock-history"></span> Experience
            </h3>
            <HistoryItem
              title="Research Center for the Early Universe, University of Tokyo"
              subtitle="Project Researcher"
              date="July 2021 - Present"
              location="Tokyo, Japan"
              description=""
              bulletPoints={[
                "Help re-analyzing old data with latest GstLAL pipeline on LIGO Caltech computing cluster.",
                "Help improving GstLAL pipeline for the next observing run.",
                "Developed static group website and tutorials with Gatsby Framework.",
              ]}
            />
            <HistoryItem
              title="HENNGE"
              subtitle="Software Engineer Intern"
              date="July 2021 - Aug. 2021"
              location="Tokyo, Japan"
              description=""
              bulletPoints={[
                "Social media application development with Python (Flask framework).",
                "Implemented authentication / login system with Google OAuth 2.0 and Redis.",
                "Implemented text / image storage system with Redis and MinIO.",
                "Employed micro-services architecture and deployed with Docker, AWS, Terraform (infrastructure-as-code",
              ]}
            />
            <HistoryItem
              title="The GstLAL Team"
              subtitle="Software Developer"
              date="Sept. 2018 - Sept. 2020"
              location="Tokyo, Japan"
              description=""
              bulletPoints={[
                "Worked on developing scientific software for the detectiong of Gravitational Waves",
                "Developed matched-filtering tool for offline analysis which is crucial for follow up analysis",
                "Implemented background estimation technique in the offline search pipeline to address the unsolved background contamination problems",
              ]}
            />
            <HistoryItem
              title="HKUST Robotics Team"
              subtitle="Hardware Member"
              date="Apr. 2016 - Aug. 2017"
              location="Hong Kong"
              description=""
              bulletPoints={[
                "Developed hardware components for self-balancing car",
                "Designed compact motor drivers and motherboard for self-balancing car",
                "Participated in regional competiton and won third-place",
              ]}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row pb-5">
            <h3 className="text-center mb-3 mb-lg-5">
              <span className="bi bi-building"></span> Education
            </h3>
            <HistoryItem
              title="The University of Tokyo"
              subtitle="Master of Science in Physics"
              date="Sept. 2018 - Sept. 2020"
              location="Tokyo, Japan"
              description=""
              bulletPoints={[
                "Submitted a techniqcal paper to arXiv",
                "Overall grade A in course work performance",
                "Teaching Asisstant in Gravitational Wave Physics",
              ]}
            />
            <HistoryItem
              title="The Hong Kong University of Science and Technology"
              subtitle="Bachelor of Science in Physics"
              date="Sept. 2014 - Sept. 2018"
              location="Hong Kong"
              description=""
              bulletPoints={[
                "Graduated with First Honor Class",
                "Dean’s List 2015 – 2017",
                "GPA: 3.7/4.3",
              ]}
            />
          </div>
        </div>
      </section>
      <section className={`${styles.skills}`}>
        <div className="container">
          <div className="row py-5">
            <h3 className="text-center mb-3 mb-lg-5">
              <span className="bi bi-stars"></span> Skills
              <span className="text-muted">*</span>
            </h3>
            <span className="pb-2">Programming Language</span>
            <SkillList
              maxCols={4}
              skills={[
                {
                  title: "Python",
                  level: "Proficient",
                  explaination:
                    "Have working knowledge on some particular fields and able to learn other fields quickly",
                },
                {
                  title: "Javascript",
                  level: "Proficient",
                  explaination:
                    "Have working knowledge on some particular fields and able to learn other fields quickly",
                },
                {
                  title: "C",
                  level: "Beginner",
                  explaination: "Have worked on some school projects",
                },
                {
                  title: "Java",
                  level: "Beginner",
                  explaination: "Have worked on some school projects",
                },
              ]}
            />
            <span className="pb-2 pt-4">Web Development</span>
            <SkillList
              maxCols={3}
              skills={[
                {
                  title: "ReactJS",
                  level: "Proficient",
                  explaination: "Working Knowledge",
                },
                {
                  title: "ExpressJS",
                  level: "Proficient",
                  explaination: "Working Knowledge",
                },
                {
                  title: "MongoDB",
                  level: "Proficient",
                  explaination: "Working Knowledge",
                },
                {
                  title: "NodeJS",
                  level: "Proficient",
                  explaination: "Working Knowledge",
                },
                {
                  title: "Bootstrap 5",
                  level: "Proficient",
                  explaination: "Working Knowledge",
                },
                {
                  title: "HTML",
                  level: "Beginner",
                  explaination: "Have worked on some school projects",
                },
                {
                  title: "Redis",
                  level: "Beginner",
                  explaination: "Have used it in an internship",
                },
                {
                  title: "CSS",
                  level: "Beginner",
                  explaination: "Have worked on some school projects",
                },
              ]}
            />
            <span className="pb-2 pt-4">Tools and Technologies</span>
            <SkillList
              maxCols={3}
              skills={[
                {
                  title: "Linux",
                  level: "Proficient",
                  explaination: "Used as a daily driver; working Knowledge",
                },
                {
                  title: "Git",
                  level: "Proficient",
                  explaination: "Working Knowledge",
                },
                {
                  title: "Docker",
                  level: "Proficient",
                  explaination: "Working Knowledge",
                },
                {
                  title: "Bash",
                  level: "Intermediate",
                  explaination: "Frequently write small automation scripts",
                },
                {
                  title: "GCP",
                  level: "Beginner",
                  explaination: "Learned in an online course.",
                },
                {
                  title: "AWS",
                  level: "Beginner",
                  explaination: "Have used it in an internship",
                },
              ]}
            />
            <span className="text-muted fst-italic pt-4" style={{ fontSize: ".8rem" }}>
              * Hover to see what the badges mean.
            </span>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
