import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function InvitationSection({ invitation }) {
  return (
    <motion.section
      className="section invitation-section bg-white/70"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={sectionVariants}
    >
      <motion.div
        className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-full border border-line bg-paper/90 text-2xl text-accent shadow-[0_12px_30px_rgba(180,138,120,0.16)]"
        variants={itemVariants}
        aria-hidden="true"
      >
        ♡
      </motion.div>
      <motion.p className="invitation-message" variants={itemVariants}>
        {invitation.message}
      </motion.p>
    </motion.section>
  );
}

export default InvitationSection;
