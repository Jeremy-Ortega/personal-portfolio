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
        <title>Personal Portfolio</title>
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
        {/* SERVICE SECTION */}
        <section id="service" className="parallax-section">
          <div className="container">
            <div className="row">
              <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                {/* SECTION TITLE */}
                <h2>What I'm doing</h2>
                <p>These are some of the things that I'm doing and interested in.</p>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-thumb bg-midori">
                  <i className="fa fa-clone" />
                  <h4 className='white-color'>Illustration</h4>
                  <p className='white-color'>
                    I do digital illustrations of different characters and scenes from various media. 
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-thumb">
                  <i className="fa fa-camera" />
                  <h4>Editing</h4>
                  <p>
                    I edit videos as a part of a committee and mostly for school works. <br /><br />
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-thumb">
                  <i className="fa fa-lightbulb-o" />
                  <h4>UI/UX design</h4>
                  <p>
                    I'm interested in designing UI for websites and applications. <br /><br />
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                <div className="service-thumb">
                  <i className="fa fa-smile-o " />
                  <h4>Game Developing</h4>
                  <p>
                    I'm interested in trying it soon as a way to combine my passion for art and playing.
                  </p>
                </div>
                <br /><br />
              </div>
                

                <h2>Tech Stack</h2>
                <p>These are some of the languages/tools I had experience with.</p>


              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/html.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/js.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/css-3.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/php.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/figma.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/Canva.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/python.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/physics.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                </div>
              </div>

              <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
                  <div className="service-thumb">
                    <img src="./images/tailwind.png" alt="HTML Icon" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
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
                    src="images/pfp-image.jpg"
                    className="wow fadeInUp img-responsive"
                    data-wow-delay="0.2s"
                    alt="about image"
                  />
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/jeremy.ortega.735944/" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"/>
                    </li>
                    <li>
                      <a href="https://x.com/HydraPomph_" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"/>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/jeremi_suuing/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"/>
                    </li>
 
                  </ul>
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="about-thumb">
                  {/* SECTION TITLE */}
                  <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                    <h2>a little more about Jeremy</h2>
                    <p>
                      Aspiring Illustrator/ Concept artist, UI/UX designer &amp; Front-end
                      Developer
                    </p>
                  </div>
    
                  <div className="wow fadeInUp" data-wow-delay="0.8s">
                    <p>
                      <h4>Education</h4> 
                      <b>Bachelor of Science and Information Systems | 2023 - ongoing</b> <br />
                      <ul>
                        <li>La Verdad Christian College Apalit Pampanga</li>
                      </ul>

                      <b>Senior Highschool | 2012 - 2023</b> <br />
                      <ul>
                        <li>La Verdad Christian School Apalit Pampanga</li>
                      </ul>
                        
                       <br /><br />
                      
                      <h4>Achievements</h4> 
                      <ul>
                        <li>2nd place in Regional Collaborative Desktop Publishing 2016 (Cartoonist)</li>
                        <li>With Honors throughout JHS and SHS</li>
                        <li>PRISAA : Bronze (Chess Team Category)</li>
                      </ul>
                      
                      
                      {/* <b>La Verdad Christian School Apalit Pampanga</b> <br />                      */}
                    </p>
                    <p>
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
                  <h2>Art Commissions</h2>
                  <p>Here are some of the commissions I've made.</p>
                </div>
              </div>




              <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.4s">
                {/* WORK THUMB */}
                <div className="work-thumb">
                  <a href="images/9.png" className="image-popup">
                    <div className="work-thumb-overlay">
                      <h4 className="white-color">September</h4>
                      <h2>2025</h2>
                    </div>
                    <img
                      src="images/9.png"
                      className="img-responsive"
                      alt="Work 1"
                    />
                  </a>
                </div>
              </div>
              <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.4s">
                {/* WORK THUMB */}
                <div className="work-thumb">
                  <a href="images/8.png" className="image-popup">
                    <div className="work-thumb-overlay">
                      <h4 className="white-color">February</h4>
                      <h2>2024</h2>
                    </div>
                    <img
                      src="images/8.png"
                      className="img-responsive"
                      alt="Work 2"
                    />
                  </a>
                </div>
              </div>
              <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.4s">
                {/* WORK THUMB */}
                <div className="work-thumb">
                  <a href="images/4.png  w-[290px] h-[300px]" className="image-popup">
                    <div className="work-thumb-overlay">
                      <h4 className="white-color">April</h4>
                      <h2>2025</h2>
                    </div>
                    <img
                      src="images/4.png"
                      className="img-responsive w-[290px] h-[300px]"
                      alt="Work 3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* TECH SKILLS SECTION */}
  <section id="about" className="parallax-section">
          <div className="container">
            <div className="row">

              <div className="col-md-8 col-sm-12">
                <div className="about-thumb">
                  {/* SECTION TITLE */}
                  <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                    <h2>Resume</h2>
                    <p>
                      Interested in working together? Feel free to check out my resume below.

                    </p>
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
                    src="images/logo colored no text.png"
                    className="wow fadeInUp img-responsive"
                    data-wow-delay="0.2s"
                    alt="about image"
                  />
                 
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
                  <p>I'm eager to connect with other people. Feel free to reach out in any of my socials! </p>
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
                     Here is my contact incase you want to reach out!
                    </p>
                  </div>
                  <p>
                    <i className="fa fa-map-marker" /> ADD Street, Sampaloc, Pampanga 2016
                  </p>
                  <p>
                    <i className="fa fa-comment" />{" "}
                    <a href="mailto:jeremysortega@gmail.com">jeremysortega@gmail.com</a>
                  </p>
                  <p>
                    <i className="fa fa-phone" /> 0939 205 1252
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
                  Copyright © 2025 Ortega Jeremy | Design: Tooplate
                </p>
                <div className="wow fadeInUp" data-wow-delay="1s">
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/jeremy.ortega.735944/" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"/>
                    </li>
                    <li>
                      <a href="https://x.com/HydraPomph_" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"/>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/jeremi_suuing/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"/>
                    </li>
                    <li>
                      <a href="https://github.com/Jeremy-Ortega" className="fa fa-github" />
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
