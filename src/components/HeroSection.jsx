import weddingPhoto from "../assets/weding_poto.png";

function HeroSection({ couple, wedding }) {
  return (
    <section className="hero-section reveal-section">
      <div className="hero-background" aria-hidden="true">
        <div className="image-placeholder hero-placeholder">
          <span>Wedding Photo</span>
        </div>
        <img
          src={weddingPhoto}
          alt=""
          onError={(event) => event.currentTarget.classList.add("image-hidden")}
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Wedding Invitation</p>
        <h1 className="flex justify-center">
          {couple.groomName}
          <span className="text-2xl pb-0 pt-1 px-5">&</span>
          {couple.brideName}
        </h1>
        <p>
          {wedding.date} {wedding.day} {wedding.time}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
