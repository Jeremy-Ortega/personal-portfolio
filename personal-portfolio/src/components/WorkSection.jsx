export default function WorkSection() {
  const works = [
    { img: "images/9.png", title: "September", year: "2025" },
    { img: "images/8.png", title: "February", year: "2024" },
    { img: "images/4.png", title: "April", year: "2025" },
  ];

  return (
    <section id="work" className="parallax-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
              <h2>Art Commissions</h2>
              <p>Here are some of the commissions I've made.</p>
            </div>
          </div>

          {works.map((w, i) => (
            <div key={i} className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="0.4s">
              <div className="work-thumb">
                <a href={w.img} className="image-popup">
                  <div className="work-thumb-overlay">
                    <h4 className="white-color">{w.title}</h4>
                    <h2>{w.year}</h2>
                  </div>
                  <img src={w.img} className="img-responsive" alt={w.title} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
