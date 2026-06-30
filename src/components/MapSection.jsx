function MapSection({ map, wedding }) {
  const openMap = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section reveal-section">
      <p className="eyebrow">Map</p>
      <h2>지도 안내</h2>
      <div className="map-box" role="img" aria-label={`${wedding.venue} 약도`}>
        <span>{wedding.venue}</span>
        <small>{wedding.address}</small>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="secondary-button"
          onClick={() => openMap(map.naverMapUrl)}
        >
          네이버지도
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => openMap(map.kakaoMapUrl)}
        >
          카카오맵
        </button>
      </div>
    </section>
  );
}

export default MapSection;
