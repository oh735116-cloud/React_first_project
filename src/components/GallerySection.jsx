import { useState } from "react";

function GallerySection({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="section reveal-section">
      <p className="eyebrow">Gallery</p>
      <h2>우리의 순간</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            type="button"
            className="gallery-item"
            key={image}
            onClick={() => setSelectedImage(image)}
            aria-label={`${index + 1}번째 웨딩 사진 크게 보기`}
          >
            <img
              src={image}
              alt={`${index + 1}번째 웨딩 사진`}
              onError={(event) =>
                event.currentTarget.classList.add("image-hidden")
              }
            />
            <span>Photo {index + 1}</span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="gallery-modal"
          role="presentation"
          onClick={closeModal}
        >
          <div className="gallery-modal-content">
            <button
              type="button"
              className="modal-close-button"
              onClick={closeModal}
              aria-label="사진 닫기"
            >
              닫기
            </button>
            <img
              src={selectedImage}
              alt="확대된 웨딩 사진"
              onClick={(event) => event.stopPropagation()}
              onError={(event) =>
                event.currentTarget.classList.add("image-hidden")
              }
            />
            <div className="modal-placeholder">Wedding Photo</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
