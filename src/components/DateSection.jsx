function DateSection({ wedding }) {
  return (
    <section className="section reveal-section">
      <p className="eyebrow">Date & Time</p>
      <h2>예식 일시</h2>
      <article className="info-card date-card">
        <span>{wedding.day}</span>
        <strong>{wedding.date}</strong>
        <p>{wedding.time}</p>
      </article>
    </section>
  );
}

export default DateSection;
