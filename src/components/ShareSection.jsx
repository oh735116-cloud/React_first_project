import { useState } from "react";

function ShareSection({ share }) {
  const [copyMessage, setCopyMessage] = useState("");

  const copyCurrentUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyMessage("현재 청첩장 주소가 복사되었습니다.");
    } catch {
      setCopyMessage("주소 복사에 실패했습니다. 주소창에서 직접 복사해 주세요.");
    }
  };

  return (
    <section className="section reveal-section">
      <p className="eyebrow">Share</p>
      <h2>청첩장 공유하기</h2>
      <article className="info-card share-card">
        <strong>{share.title}</strong>
        <p>{share.description}</p>
        <button type="button" className="primary-button" onClick={copyCurrentUrl}>
          현재 주소 복사
        </button>
        {copyMessage && <p className="status-message">{copyMessage}</p>}
      </article>
    </section>
  );
}

export default ShareSection;
