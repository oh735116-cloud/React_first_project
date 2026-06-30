import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxBackdrop() {
  const { scrollYProgress } = useScroll();
  const firstLayerY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const secondLayerY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className="parallax-backdrop" aria-hidden="true">
      <motion.div
        className="parallax-orchard parallax-orchard-left"
        style={{ y: firstLayerY }}
      />
      <motion.div
        className="parallax-orchard parallax-orchard-right"
        style={{ y: secondLayerY }}
      />
      <div className="parallax-light" />
    </div>
  );
}

export default ParallaxBackdrop;
