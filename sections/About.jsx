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
      <TypingText title="| About Me"
      textStyles = "text-center" />

      <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
         I'm a <span  className='font-extrabold text-white'>Full Stack Web Developer</span> . In the vast expanse of ones and zeros, I am a digital architect weaving immersive web experiences, exploring the frontiers of <span  className='font-extrabold text-white'>AI/ML</span> , and mastering <span  className='font-extrabold text-white'>algorithms</span>  that shape tomorrow's technology landscape.

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
