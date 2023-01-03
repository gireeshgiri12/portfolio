import { motion } from 'framer-motion'

import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { ProjectsData } from '../../data/ProjectsData'
import { pageVariants, pageTransition } from '../../utils/FramerAnimation'
import styles from './projects.module.scss'

const projectsOpen = '<projects>'
const projectsClose = '</projects>'

const Projects = () => {
  return (
    <div className={styles.projects}>
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
          <h3 className={styles.projectsOpen}>{projectsOpen}</h3>

          <div className={styles.projects_content}>
            {ProjectsData.map((item, index) =>
              index % 2 === 0 ? (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  GitHub={item.GitHub}
                  hosted={item.hosted}
                />
              ) : (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  GitHub={item.GitHub}
                  hosted={item.hosted}
                />
              ),
            )}
          </div>

          <h3 className={styles.projectsClose}>{projectsClose}</h3>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
