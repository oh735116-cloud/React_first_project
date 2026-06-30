import { motion } from "framer-motion";
import { useRef } from "react";

const INTRO_TEXT = "Wedding Invitation";

const handwritingVariants = {
  hidden: {
    clipPath: "inset(0 100% 0 0)",
    opacity: 1,
    filter: "blur(0.6px)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 2.7,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

function IntroSection({ mainImage, onIntroComplete }) {
  const hasCompletedRef = useRef(false);

  const completeIntro = () => {
    if (hasCompletedRef.current) {
      return;
    }

    hasCompletedRef.current = true;
    window.setTimeout(onIntroComplete, 900);
  };

  return (
    <main className="relative mx-auto grid min-h-screen w-full max-w-[430px] place-items-center overflow-hidden bg-[#3e352f] shadow-phone">
      <div className="absolute inset-0 bg-[#d8c9bd]">
        <img
          className="relative z-[1] h-full w-full object-cover"
          src={mainImage}
          alt="Wedding Invitation intro"
          onError={(event) => event.currentTarget.classList.add("image-hidden")}
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#3e352f]/10 to-[#3e352f]/80" />
      </div>

      <motion.section
        className="relative z-[3] w-full px-6 text-center"
        aria-label="Wedding Invitation"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className="min-h-[62px] font-introScript text-[clamp(92px,18vw,100px)] font-normal leading-none text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
          aria-label={INTRO_TEXT}
        >
          <motion.span
            aria-hidden="true"
            className="m-0 inline-block whitespace-nowrap text-white will-change-[clip-path,filter]"
            initial="hidden"
            animate="visible"
            variants={handwritingVariants}
            onAnimationComplete={completeIntro}
          >
            {INTRO_TEXT}
          </motion.span>
        </h1>
      </motion.section>
    </main>
  );
}

export default IntroSection;
