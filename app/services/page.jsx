"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

const services = [
  {
    num:'01',
    title: '₿itcoin/Crypto Expert',
    description: "I provide expert consultations to help launch your Crypto business! I also build Bitcoin mining rigs.",
    href: "",
  },
  {
    num:'02',
    title: 'Business Consulting',
    description: "I offer a variety of business consulting services, marketing solutions, and strategic planning.",
    href: "",
  },
  {
    num:'03',
    title: 'UI/UX Design',
    description: "I develop applications, databases, and user-interfaces with the latest frameworks and technologies.",
    href: "",
  },
  {
    num:'04',
    title: 'Web2/Web3 Development',
    description: "I develop and design modern web2/web3 websites which enable digital ledger technology and tokenization.",
    href: "",
  },
]


import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mb-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[32px]"
        >
          {services.map((service, index)=> {
            return (
            <div 
              key={index} 
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className ="w-full flex justify-between items-center">
                <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover 
                transition-all duration-500">
                  {service.num}
                </div>
                <Link 
                  href={service.href} 
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent 
              transition-all duration-500"
              > 
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/75">
                {service.description}
              </p>

              {/* border */}
              <div className="border-b border-accent/80 w-full"></div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;