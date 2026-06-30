import { useState } from "react";

function LocationSection({ wedding }) {
  const [copyMessage, setCopyMessage] = useState("");

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wedding.address);
      setCopyMessage("주소가 복사되었습니다.");
    } catch {
      setCopyMessage("주소 복사에 실패했습니다. 주소를 직접 선택해 주세요.");
    }
  };

  return (
    <section className="section reveal-section">
      <p className="eyebrow">Location</p>
      <h2>오시는 곳</h2>
      <article className="info-card location-card">
        <strong>{wedding.venue}</strong>
        <p>{wedding.hall}</p>
        <address>{wedding.address}</address>
        <button type="button" className="secondary-button" onClick={copyAddress}>
          주소 복사
        </button>
        {copyMessage && <p className="status-message">{copyMessage}</p>}
      </article>
    </section>
  );
}

export default LocationSection;
