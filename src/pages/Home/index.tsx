
import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import profilePic from "../../assets/profilePic.jpg";
import { motion } from "framer-motion";
import { pageVariants } from "../../utils/FramerAnimation";

const welcomeText = `I Am, ${AboutData.firstName}  ${AboutData.lastName}`;

const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate='anim'
    exit='last'
    variants={pageVariants}
    transition={{
      duration: 1.5,
      delay: 0.1,
      ease: [0.5, 0.71, 1, 1.5],
  }}
  >
    <div className={styles.home}>
        <img src={profilePic} alt='Profile' className={styles.image} />
        <h2 className={styles.title}>{welcomeText}</h2>
        <h3 className={styles.about}>{AboutData.about1}</h3>
        <h3 className={styles.about_next}>{AboutData.about2}</h3>
        <div className={styles.links}>
          {LinksData.map((item) => (
            <a
              href={item.link}
              target='_blank'
              rel='noreferrer'
              key={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
    </div>
    </motion.div>
  );
};

export default Home;
