import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.png";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Souvik Sen</h3>

        <p>
          Hey, Everyone I am Souvik Sen, the founder of EatWithIt.
          <br />
          Our aim is to provide mouthwatering delicacies at pocket-friendly prices...
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;