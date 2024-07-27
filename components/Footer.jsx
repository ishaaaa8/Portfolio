'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
          <a href="/Isha Singh Resume.pdf" download="Resume_Isha_Singh">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Download Resume
            </span>
          </button>
        </a>
          <p className="font-normal text-[14px] text-white opacity-50">
            Created by Isha Singh
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.link}><img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
              </a>
            ))}
            
          </div>
        </div>
      </div>
  </motion.footer>
);

export default Footer;
