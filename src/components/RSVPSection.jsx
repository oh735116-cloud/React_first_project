// import { useState } from "react";

// const initialForm = {
//   attendance: "attend",
//   name: "",
//   guestCount: "1",
//   message: "",
// };

// function RSVPSection() {
//   const [form, setForm] = useState(initialForm);
//   const [submitMessage, setSubmitMessage] = useState("");

//   const updateForm = (field, value) => {
//     setForm((currentForm) => ({
//       ...currentForm,
//       [field]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!form.name.trim()) {
//       setSubmitMessage("성함을 입력해 주세요.");
//       return;
//     }

//     setSubmitMessage("참석 의사가 전달되었습니다. 감사합니다.");
//   };

//   return (
//     <section className="section reveal-section">
//       <p className="eyebrow">RSVP</p>
//       <h2>참석 의사 전달</h2>
//       <form className="rsvp-form" onSubmit={handleSubmit}>
//         <div className="segmented-control" aria-label="참석 여부 선택">
//           <button
//             type="button"
//             className={form.attendance === "attend" ? "selected" : ""}
//             onClick={() => updateForm("attendance", "attend")}
//           >
//             참석
//           </button>
//           <button
//             type="button"
//             className={form.attendance === "absent" ? "selected" : ""}
//             onClick={() => updateForm("attendance", "absent")}
//           >
//             불참
//           </button>
//         </div>

//         <label>
//           성함
//           <input
//             type="text"
//             value={form.name}
//             onChange={(event) => updateForm("name", event.target.value)}
//             placeholder="홍길동"
//           />
//         </label>

//         <label>
//           참석 인원
//           <input
//             type="number"
//             min="0"
//             value={form.guestCount}
//             onChange={(event) => updateForm("guestCount", event.target.value)}
//           />
//         </label>

//         <label>
//           전달 메시지
//           <textarea
//             value={form.message}
//             onChange={(event) => updateForm("message", event.target.value)}
//             placeholder="축하 메시지를 남겨 주세요."
//           />
//         </label>

//         <button type="submit" className="primary-button">
//           전달하기
//         </button>
//         {submitMessage && <p className="status-message">{submitMessage}</p>}
//       </form>
//     </section>
//   );
// }

// export default RSVPSection;
