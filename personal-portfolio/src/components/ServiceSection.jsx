export default function ServiceSection() {
  const techIcons = [
    "html.png", "js.png", "css-3.png", "php.png",
    "figma.png", "Canva.png", "python.png", "physics.png", "tailwind.png"
  ];

  return (
    <section id="service" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
            <h2>What I'm doing</h2>
            <p>These are some of the things that I'm doing and interested in.</p>
          </div>

          {/* Activities */}
          <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-thumb bg-midori">
              <i className="fa fa-clone" />
              <h4 className="white-color">Illustration</h4>
              <p className="white-color">
                I do digital illustrations of different characters and scenes from various media.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-thumb">
              <i className="fa fa-camera" />
              <h4>Editing</h4>
              <p>I edit videos as a part of a committee and mostly for school works.</p>
               <br />
            </div>
          </div>

          <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="service-thumb">
              <i className="fa fa-lightbulb-o" />
              <h4>UI/UX design</h4>
              <p>I'm interested in designing UI for websites and applications.</p>
              <br />
            </div>
          </div>

          <div className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
            <div className="service-thumb">
              <i className="fa fa-smile-o" />
              <h4>Game Developing</h4>
              <p>I'm interested in trying it soon as a way to combine my passion for art and playing.</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="wow fadeInUp section-title mt-10" data-wow-delay="0.2s">
            <h2>Tech Stack</h2>
            <p>These are some of the languages/tools I had experience with.</p>
          </div>

          {techIcons.map((icon, i) => (
            <div key={i} className="col-md-3 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
              <div className="service-thumb">
                <img
                  src={`./images/${icon}`}
                  alt={icon}
                  style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
