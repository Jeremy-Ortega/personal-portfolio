export default function AboutSection() {
  return (
    <section id="about" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-8">
            <div className="about-image-thumb">
              <img
                src="images/pfp-image.jpg"
                className="wow fadeInUp img-responsive"
                data-wow-delay="0.2s"
                alt="about"
              />
              <ul className="social-icon">
                <li><a href="https://www.facebook.com/jeremy.ortega.735944/" className="fa fa-facebook" target="_blank" rel="noopener noreferrer" /></li>
                <li><a href="https://x.com/HydraPomph_" className="fa fa-twitter" target="_blank" rel="noopener noreferrer" /></li>
                <li><a href="https://www.instagram.com/jeremi_suuing/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer" /></li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="about-thumb">
              <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                <h2>a little more about Jeremy</h2>
                <p>Aspiring Illustrator/Concept artist, UI/UX designer & Front-end Developer</p>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <h4>Education</h4>
                <b>Bachelor of Science in Information Systems | 2023 - ongoing</b>
                <ul><li>La Verdad Christian College, Apalit Pampanga</li></ul>
                <b>Senior High School | 2012 - 2023</b>
                <ul><li>La Verdad Christian School, Apalit Pampanga</li></ul>

                <h4>Achievements</h4>
                <ul>
                  <li>2nd place in Regional Collaborative Desktop Publishing 2016 (Cartoonist)</li>
                  <li>With Honors throughout JHS and SHS</li>
                  <li>PRISAA : Bronze (Chess Team Category)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
