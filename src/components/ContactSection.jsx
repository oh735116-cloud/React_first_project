function ContactSection({ contacts }) {
  const cleanPhoneNumber = (phone) => phone.replaceAll("-", "");

  return (
    <section className="section reveal-section">
      <p className="eyebrow">Contact</p>
      <h2>연락하기</h2>
      <div className="stack-list">
        {contacts.map((contact) => {
          const phoneNumber = cleanPhoneNumber(contact.phone);

          return (
            <article className="info-card contact-card" key={contact.phone}>
              <div>
                <span className="small-label">{contact.group}</span>
                <strong>{contact.name}</strong>
                <p>{contact.phone}</p>
              </div>
              <div className="contact-actions">
                <a className="icon-button" href={`tel:${phoneNumber}`}>
                  전화
                </a>
                <a className="icon-button" href={`sms:${phoneNumber}`}>
                  문자
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ContactSection;
