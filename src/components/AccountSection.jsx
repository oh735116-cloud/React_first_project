import { useState } from "react";

function AccountSection({ accounts }) {
  const [copyTarget, setCopyTarget] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const copyAccount = async (account) => {
    const accountText = `${account.bank} ${account.number} ${account.holder}`;

    try {
      await navigator.clipboard.writeText(accountText);
      setCopyTarget(account.group);
      setCopyMessage("계좌번호가 복사되었습니다.");
    } catch {
      setCopyTarget(account.group);
      setCopyMessage("복사에 실패했습니다. 계좌번호를 직접 선택해 주세요.");
    }
  };

  return (
    <section className="section reveal-section">
      <p className="eyebrow">Account</p>
      <h2>마음 전하실 곳</h2>
      <div className="stack-list">
        {accounts.map((account) => (
          <article className="info-card account-card" key={account.number}>
            <span className="small-label">{account.group}</span>
            <strong>{account.bank}</strong>
            <p>{account.number}</p>
            <p>예금주 {account.holder}</p>
            <button
              type="button"
              className="secondary-button"
              onClick={() => copyAccount(account)}
            >
              계좌번호 복사
            </button>
            {copyTarget === account.group && copyMessage && (
              <p className="status-message">{copyMessage}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default AccountSection;
