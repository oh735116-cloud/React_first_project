function CoupleSection({ couple, parents }) {
  const people = [
    {
      title: "Groom",
      name: couple.groomFullName,
      parents: `${parents.groomParents.father} · ${parents.groomParents.mother}의 아들`,
    },
    {
      title: "Bride",
      name: couple.brideFullName,
      parents: `${parents.brideParents.father} · ${parents.brideParents.mother}의 딸`,
    },
  ];

  return (
    <section className="section reveal-section">
      <p className="eyebrow">Together With Family</p>
      <h2>신랑과 신부</h2>
      <div className="couple-card-list">
        {people.map((person) => (
          <article className="info-card couple-card" key={person.title}>
            <span className="small-label">{person.title}</span>
            <strong>{person.name}</strong>
            <p>{person.parents}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CoupleSection;
