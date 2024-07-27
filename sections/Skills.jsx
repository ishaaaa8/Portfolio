'use client';
import { motion } from 'framer-motion';
import { InsightCard, TitleText , TypingText } from '../components';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Skills = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false , amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| Skills"
      textStyles="text-center"/>
      <TitleText title="My Tech Tools"
      textStyles="text-center"/>
      <div className='mt-[50px] flex flex-row gap-[30px]  justify-center'>
        {/* {insights.map((insight,index) => (
          <InsightCard key={`insight-${index}`}
          {...insight} index={index+1}/>
        ))} */}
        <img
            src='https://img.icons8.com/?size=100&id=DbZhJARl07o2&format=png&color=000000'
            alt='C'
            height={66}
            width={66}
        />
        <img
            src='https://img.icons8.com/?size=100&id=hGdCwhSHUe6L&format=png&color=000000'
            alt='python'
            height={66}
            width={66}
        />
        <img
            src='https://img.icons8.com/?size=100&id=20909&format=png&color=000000'
            alt='HTML'
            height={66}
            width={66}
        />
        <img
            src='https://img.icons8.com/?size=100&id=Vra58PN2KmI5&format=png&color=000000'
            alt='React'
            height={66}
            width={66}
        />
        <img
            src='https://img.icons8.com/?size=100&id=54087&format=png&color=000000'
            alt='Node JS'
            height={66}
            width={66}
        />
        <img
            src='https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000'
            alt='Github'
            height={66}
            width={66}
        />
        <img
            src='https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000'
            alt='MySQL'
            height={66}
            width={66}
        />
        <img
            src='https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000'
            alt='MongoDb'
            height={66}
            width={66}
        />
      </div>
    </motion.div>
  </section>
);

export default Skills;
