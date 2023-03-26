import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/me.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Eat With It</h4>
          <p>
            We are Eat With It. The place where we serve mouth-watering delicacies at pocket friendly prices..
          </p>

          <p>
            Explore the various type of delicacies. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Souvik Sen</h3>
            </div>

            <p>
              I am Souvik Sen, the founder of Eat With It. Affiliated to
              God Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;