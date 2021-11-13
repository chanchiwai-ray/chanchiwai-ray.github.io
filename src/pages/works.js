import styles from "../../styles/works.module.css";
import ProjectCard from "../components/ProjectCard";
import MainLayout from "../layouts/MainLayout";

export default function Works() {
  return (
    <MainLayout title="Works - Chi Wai CHAN">
      <section className={`${styles.projects}`}>
        <div className="container">
          <div className="row py-5">
            <h3 className="text-center mb-3 mb-lg-5">
              <span className="bi bi-code-slash"></span> Personal Projects
            </h3>
            <p className="lead text-muted text-center"></p>
            <div className="col-lg-6">
              <ProjectCard
                image=""
                title="Twitter Clone"
                subtitle="Python | Redis | Google OAuth 2.0 | MinIO | Nginx"
                description="A minialist clone of Twitter built with Python and Flask."
                href="https://github.com/chanchiwai-ray/twitter-clone"
                hrefLabel="Github"
              />
            </div>
            <div className="col-lg-6">
              <ProjectCard
                image=""
                title="Google Drive CLI"
                subtitle="Python | Google Drive API"
                description="Command Line interface for Google Drive using Google Drive API."
                href="https://github.com/chanchiwai-ray/google-drive-cli"
                hrefLabel="Github"
              />
            </div>
            <div className="col-lg-6">
              <ProjectCard
                image=""
                title="Dashboard"
                subtitle="ReactJS | ExpressJS | MongoDB | Docker | Raspberry Pi"
                description="A personal dashboard for managing personal data."
                href="https://github.com/chanchiwai-ray/website"
                hrefLabel="Github"
              />
            </div>
            <div className="col-lg-6">
              <ProjectCard
                image=""
                title="Personal Website"
                subtitle="Next.js | Github Page"
                description="A personal website build with Nextjs and powered by github page (this site)."
                href="https://github.com/chanchiwai-ray/website"
                hrefLabel="Github"
              />
            </div>
            <div className="d-flex justify-content-center mt-4 mt-lg-5">
              <a className="btn btn-dark" href="https://github.com/chanchiwai-ray">
                Discover more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.contributions}`}>
        <div className="container">
          <div className="row py-5">
            <h3 className="text-center mb-3 mb-lg-5">
              <span className="bi bi-stars"></span> Contributed Projects
            </h3>
            <p className="lead text-muted text-center"></p>
            <div className="col-lg-6">
              <ProjectCard
                image="/images/scald.png"
                title="ligo-scald"
                description="ligo-scald is a dynamic data visualization and monitoring tool for gravitational-wave data."
                href="https://git.ligo.org/gstlal-visualisation/ligo-scald"
                hrefLabel="GitLab"
              />
            </div>
            <div className="col-lg-6">
              <ProjectCard
                image="/images/gstlal.png"
                title="GstLAL"
                description="GstLAL provides a suite of GStreamer elements that expose gravitational-wave data analysis tools from the LALSuite library for use in GStreamer signal-processing pipelines."
                href="https://git.ligo.org/lscsoft/gstlal"
                hrefLabel="GitLab"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.publications}`}>
        <div className="container">
          <div className="row py-5">
            <h3 className="text-center mb-3 mb-lg-5">
              <span className="bi bi-book"></span> Publication
            </h3>
            <ul className="list-group list-group-flush">
              <a href="https://arxiv.org/abs/2009.03025" className="list-group-item">
                <div className="d-flex justify-content-around">
                  <span className="fw-bold px-4">2020</span>
                  <span>
                    Improving the background estimation technique in the GstLAL inspiral
                    pipeline with the time-reversed template bank (preprint)
                  </span>
                </div>
              </a>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
