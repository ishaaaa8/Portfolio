'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'></div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus"
      textStyles = "text-center" />

      <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        <span  className='font-extrabold text-white'>Isha</span> vbsefkjverjfc  efveurgfe fc efvuygfe vgejfge f ebvfyje4gf vd bgeyef refhbeiugwe4fv e rhjyg4ubfre g4hjtg54ytvv45ut 5g <span  className='font-extrabold text-white'>g45g g g 5</span>g45g g g 5tg4g g gjveb guug5 vrkjgfg fbug4bgr v rgrg tv jf <span  className='font-extrabold text-white'>nbb vrk ndv dvile 5</span>  , dv f fmb rtkbc v fkbg  brnbrdkgbf c fbkrtb vcbmcfmbf  v cmfbgf v 

      </motion.p>
      <motion.img
      variants={fadeIn('up','tween',0.3,1)}
      src='/arrow-down.svg'
      alt='arrow down'
      className='w-[18px] h-[28px] object-contain mt-[28px]'
      >

      </motion.img>
    </motion.div>
  </section>
);

export default About;
