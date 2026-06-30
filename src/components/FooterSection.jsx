function FooterSection({ footer, couple }) {
  return (
    <footer className="footer-section reveal-section">
      <p>{footer.text}</p>
      <strong>
        {couple.groomName} & {couple.brideName}
      </strong>
    </footer>
  );
}

export default FooterSection;
