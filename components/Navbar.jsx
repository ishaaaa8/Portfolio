'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
//use client -> next 13 react server compoennt 
const Navbar = () => (
  <motion.nav 
    variants={navVariants}
    initial = "hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
    >
      <div className='absolute w-[50%] inset-0 gradient-01'/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          {/* <img 
          src='/Isha-Singh-logo.png'
          alt="logo"
          className='w-[46px] h-[46px] object-contain'
          
          /> */}
          <div className='text-white font-extralight font-mono h-[40px] object-contain'>Isha's Portfolio</div>
          <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
            {/* METAVERSES */}
          </h2>
          {/* <img
            src='/menu.svg'
            alt='menu'
            className='w-[24px] h-[24px] object-contain'/> */}
      </div>
  </motion.nav>
);

export default Navbar;
