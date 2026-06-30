const PETAL_COUNT = 34;

const petals = Array.from({ length: PETAL_COUNT }, (_, index) => {
  const isLeftSide = index % 2 === 0;
  const sideDistance = 4 + (index % 7) * 5;
  const size = 8 + (index % 5) * 2;
  const duration = 9 + (index % 6) * 1.4;
  const delay = -(index % 11) * 0.8;
  const drift = isLeftSide ? 42 + (index % 4) * 14 : -42 - (index % 4) * 14;

  return {
    id: `petal-${index}`,
    className: isLeftSide ? "petal petal-left" : "petal petal-right",
    style: {
      "--petal-size": `${size}px`,
      "--petal-x": `${sideDistance}%`,
      "--petal-duration": `${duration}s`,
      "--petal-delay": `${delay}s`,
      "--petal-drift": `${drift}px`,
      "--petal-rotate": `${index % 2 === 0 ? 1 : -1}`,
    },
  };
});

function CherryBlossomLayer() {
  return (
    <div className="cherry-blossom-layer" aria-hidden="true">
      {petals.map((petal) => (
        <span className={petal.className} key={petal.id} style={petal.style} />
      ))}
    </div>
  );
}

export default CherryBlossomLayer;
