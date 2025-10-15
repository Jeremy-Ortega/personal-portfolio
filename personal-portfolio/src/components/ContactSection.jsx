export default function ContactSection() {
  return (
    <section id="contact" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
              <h2>Get in touch</h2>
              <p>I'm eager to connect with other people. Feel free to reach out in any of my socials!</p>
            </div>
          </div>

          <div className="col-md-7 col-sm-10">
            <div className="wow fadeInUp" data-wow-delay="0.4s">
              <form id="contact-form" action="#" method="get">
                <div className="col-md-6 col-sm-6">
                  <input type="text" className="form-control" name="name" placeholder="Name" required />
                </div>
                <div className="col-md-6 col-sm-6">
                  <input type="email" className="form-control" name="email" placeholder="Email" required />
                </div>
                <div className="col-md-12 col-sm-12">
                  <textarea className="form-control" rows={5} name="message" placeholder="Message" required />
                </div>
                <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                  <button id="submit" type="submit" className="form-control" name="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-5 col-sm-8">
            <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
              <div className="section-title">
                <h2>Contact Info</h2>
                <p>Here is my contact in case you want to reach out!</p>
              </div>
              <p><i className="fa fa-map-marker" /> ADD Street, Sampaloc, Pampanga 2016</p>
              <p><i className="fa fa-comment" /> <a href="mailto:jeremysortega@gmail.com">jeremysortega@gmail.com</a></p>
              <p><i className="fa fa-phone" /> 0939 205 1252</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
