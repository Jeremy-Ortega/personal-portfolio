export default function ResumeSection() {
  return (
    <section id="resume" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="about-thumb">
              <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                <h2>Resume</h2>
                <p>Interested in working together? Feel free to check out my resume below.</p>
                <a
                  href={`${import.meta.env.BASE_URL}Resume_Ortega_Jeremy S..pdf`}
                  download="Ortega, Jeremy S._Resume.pdf"
                  className="wow fadeInUp smoothScroll btn btn-default section-btn"
                  data-wow-delay="1s"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-8">
            <div className="about-image-thumb">
              <img
                src="images/logoColoredNotext.png"
                className="wow fadeInUp img-responsive"
                data-wow-delay="0.2s"
                alt="Resume logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
