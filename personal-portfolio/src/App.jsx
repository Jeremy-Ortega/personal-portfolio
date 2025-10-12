import { useState } from 'react'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="author" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>Kalay - Portfolio HTML Template</title>
        {/*

      Template 2087 Kalay

      http://www.tooplate.com/view/2087-kalay

      */}

        {/* PRE LOADER */}
        {/* <div className="preloader">
          <div className="spinner">
            <span className="spinner-rotate" />
          </div>
        </div> */}
        {/* HOME SECTION */}
        <section id="home" className="parallax-section">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-5 col-md-7 col-sm-12">
                <div className="home-thumb">
                  <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                    Hello, I am Kalay.
                  </h1>
                  <p className="wow fadeInUp white-color" data-wow-delay="0.6s">
                    Praesent eleifend tristique nisl, nec finibus urna posuere nec.
                    Quisque vel nunc eget arcu maximus facilisis non eu nisi. Aliquam
                    ullamcorper est a nisl imperdiet luctus.
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
        {/* SERVICE SECTION */}
        <section id="service" className="parallax-section">
          <div className="container">
            <div className="row">
              <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                {/* SECTION TITLE */}
                <h2>what things i am doing...</h2>
                <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-thumb">
                  <i className="fa fa-smile-o" />
                  <h4>Graphic Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing morbi
                    venenatis.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-thumb bg-grey">
                  <i className="fa fa-camera" />
                  <h4 className="white-color">Photography</h4>
                  <p>
                    Duis sed arcu sed nunc maximus tempor. Maecenas et enim laoreet,
                    pharetra risus vel.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-thumb">
                  <i className="fa fa-lightbulb-o" />
                  <h4>UI/UX design</h4>
                  <p>
                    Sed tristique, nunc sit amet pellentesque pharetra, sapien urna.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-thumb">
                  <i className="fa fa-clone" />
                  <h4>illustration</h4>
                  <p>
                    Cras ut urna quis nisi luctus molestie tincidunt sed ipsum. Donec
                    gravida laoreet erat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT SECTION */}
        <section id="about" className="parallax-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-8">
                <div className="about-image-thumb">
                  <img
                    src="images/profile-image.jpg"
                    className="wow fadeInUp img-responsive"
                    data-wow-delay="0.2s"
                    alt="about image"
                  />
                  <ul className="social-icon">
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-behance" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="about-thumb">
                  {/* SECTION TITLE */}
                  <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                    <h2>a little more about Kalay</h2>
                    <p>
                      Graphic Designer, Creative Photographer &amp; Front-end
                      Developer
                    </p>
                  </div>
                  <div className="wow fadeInUp" data-wow-delay="0.8s">
                    <p>
                      Praesent eleifend tristique nisl, nec finibus urna posuere nec.
                      Quisque vel nunc eget arcu maximus facilisis non eu nisi.
                      Aliquam ullamcorper est a nisl imperdiet luctus.
                    </p>
                    <p>
                      Sed sed convallis odio. Nulla scelerisque libero efficitur diam
                      fermentum, quis tincidunt urna placerat. Maecenas sed tortor sed
                      nisi semper ultricies. Nulla ornare metus in massa mollis
                      scelerisque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* WORK SECTION */}
        <section id="work" className="parallax-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                {/* SECTION TITLE */}
                <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                  <h2>Seleted Designs</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
                </div>
              </div>
              <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.4s">
                {/* WORK THUMB */}
                <div className="work-thumb">
                  <a href="images/work-image1.jpg" className="image-popup">
                    <div className="work-thumb-overlay">
                      <h4 className="white-color">First Title</h4>
                      <h2>Graphic Design</h2>
                    </div>
                    <img
                      src="images/work-image1.jpg"
                      className="img-responsive"
                      alt="Work 1"
                    />
                  </a>
                </div>
              </div>
              <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.4s">
                {/* WORK THUMB */}
                <div className="work-thumb">
                  <a href="images/work-image2.jpg" className="image-popup">
                    <div className="work-thumb-overlay">
                      <h4 className="white-color">Title Two</h4>
                      <h2>Photography</h2>
                    </div>
                    <img
                      src="images/work-image2.jpg"
                      className="img-responsive"
                      alt="Work 2"
                    />
                  </a>
                </div>
              </div>
              <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.4s">
                {/* WORK THUMB */}
                <div className="work-thumb">
                  <a href="images/work-image3.jpg" className="image-popup">
                    <div className="work-thumb-overlay">
                      <h4 className="white-color">Third Title</h4>
                      <h2>illustration</h2>
                    </div>
                    <img
                      src="images/work-image3.jpg"
                      className="img-responsive"
                      alt="Work 3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT SECTION */}
        <section id="contact" className="parallax-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                {/* SECTION TITLE */}
                <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                  <h2>Get in touch</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur venenatis tincidunt.</p>
                </div>
              </div>
              <div className="col-md-7 col-sm-10">
                {/* CONTACT FORM HERE */}
                <div className="wow fadeInUp" data-wow-delay="0.4s">
                  <form id="contact-form" action="#" method="get">
                    <div className="col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <textarea
                        className="form-control"
                        rows={5}
                        name="message"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                      <button
                        id="submit"
                        type="submit"
                        className="form-control"
                        name="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 col-sm-8">
                {/* CONTACT INFO */}
                <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                  <div className="section-title">
                    <h2>Contact Info</h2>
                    <p>
                      Lorem ipsum dolor sit consectetur adipiscing morbi venenatis et
                      tortor consectetur adipisicing lacinia tortor morbi ultricies.
                    </p>
                  </div>
                  <p>
                    <i className="fa fa-map-marker" /> 456 New Street 22000, New York
                    City, USA
                  </p>
                  <p>
                    <i className="fa fa-comment" />{" "}
                    <a href="mailto:info@company.com">info@company.com</a>
                  </p>
                  <p>
                    <i className="fa fa-phone" /> 010-020-0340
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER SECTION */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="0.8s">
                <p className="white-color">
                  Copyright © 2017 Your Company | Design: Tooplate
                </p>
                <div className="wow fadeInUp" data-wow-delay="1s">
                  <ul className="social-icon">
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-behance" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-github" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

          <script src="js/jquery.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/jquery.parallax.js"></script>
          <script src="js/smoothscroll.js"></script>
          <script src="js/jquery.magnific-popup.min.js"></script>
          <script src="js/magnific-popup-options.js"></script>
          <script src="js/wow.min.js"></script>
          <script src="js/custom.js"></script>

      </>


        
    </>
  )
}

export default App
