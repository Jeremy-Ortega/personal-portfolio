export default function HomeSection() {
  return (
    <section id="home" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-5 col-md-7 col-sm-12">
            <div className="home-thumb">
              <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                Hello, I am Jeremy.
              </h1>
              <p className="wow fadeInUp white-color" data-wow-delay="0.6s">
                I’m currently pursuing a Bachelor’s degree in Information Systems.
                In my free time, I enjoy creating digital art and editing videos.
                I’m always eager to learn new skills and connect with new people.
              </p>
              <a
                href="#service"
                className="wow fadeInUp smoothScroll btn btn-default section-btn"
                data-wow-delay="1s"
              >
                discover more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
