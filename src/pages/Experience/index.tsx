import { motion } from 'framer-motion'

import { EducationCard } from '../../components/EducationCard/EducationCard'
import { pageVariants, pageTransition } from '../../utils/FramerAnimation'
import { ExperienceData } from '../../data/ExperienceData'
import styles from './experience.module.scss'

const eduOpen = '<experience>'
const eduClose = '</experience>'

const Experience = () => {
  return (
    <div className={styles.education}>
      {/* <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      > */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: [0.5, 0.71, 1, 1.5],
        }}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.eduOpen}>{eduOpen}</h3>
          <div className={styles.center_line}></div>
          {ExperienceData.map((item, index) => (
            <EducationCard
              key={item.title}
              title={item.title}
              date={item.date}
              details={item.details}
              isLeft={index % 2 === 0 ? true : false}
            />
          ))}
          <h3 className={styles.eduClose}>{eduClose}</h3>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
