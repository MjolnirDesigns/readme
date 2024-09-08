"use client";

import { motion } from 'framer-motion';
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGit, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link";
import Image from 'next/image';
import SliderBtns from '@/components/SliderBtns';


const projects = [
  {
    num:"01",
    category: "frontend",
    title: "Project 1",
    description: "This personal portfolio website is my first project. It is built with CSS, HTML5, NextJS, and React. I have build 3 iterations of personal portfolio websites.",
    stack: [
      { name: "CSS3" }, 
      { name: "HTML5" },  
      { name: "NextJS" }, 
      { name: "React" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num:'02',
    category: 'backend',
    title: 'Project 2',
    description: 'Details on my backend database project are still under development. I am in the process of drafting a project plan for a suite of automated trading bots and tools.',
    stack: [
      { name: 'CSS3' }, 
      { name: 'HTML5' }, 
      { name: 'Javascript' }, 
      { name: 'NextJS' }, 
      { name: 'React' },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num:'03',
    category: 'fullstack',
    title: 'Project 3',
    description: 'Details on my full-stack Bitcoin mining project are still under development. I am in the process of researching and developing a suite of next-gen Bitcoin mining rigs with a web3 enabled UI.',
    stack: [
      { name: 'Bitcoin' },
      { name: 'CoinGecko' },
      { name: 'Javascript' },
      { name: 'NextJS' },
      { name: 'Nvidia' }, 
      { name: 'React' },
      { name: 'Solidity' },
      { name: 'XRPL' },
    ],
    image: "/assets/work/BitcoinMiningRig.jpeg",
    live: "",
    github: "",
  },
  {
    num:'04',
    category: 'secret',
    title: 'Project 4',
    description: 'This is a top-secret project. The brain of the system will be a LLM/NLP voice assistant based on J.A.R.V.I.S. An augmented reality holo-mat will also be developed as a consumer product.',
    stack: [
      { name: 'ChatGPT4σ' },
      { name: 'Gensim' }, 
      { name: 'GROK2' },  
      { name: 'NLTK' }, 
      { name: 'Python' },
      { name: 'React' },
      { name: 'spaCy' },
      { name: 'TensorFlow' },
    ],
    image: "/assets/work/classified.jpeg",
    live: "",
    github: "",
  },

];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn"}
      }} 
      className="min-h-[80vh] flex flex-col justify-center py-10 xl:px-0" 
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[40px] xl:justify-center">
          <div className="w-full xl:w-[45%] xl:h-[460px] flex flex-col xl:justify-between order-2 
            xl:order-none">

              <div className="flex flex-col gap-[20px] h-[50%]">

                {/* outline number */}
                <div className="text-6xl font-extrabold text-outline text-transparent group-hover:text-[#ff9900] 
                transition-all duration-500">
                  {project.num}
                </div>

                {/* project category */}
                <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-[#ff9900] transition-all duration-500 capitalize">
                  {project.category} project
                </h2>

                {/* project description */}
                <p className="text-white/80">
                  {project.description}
                </p>

                {/* stack */}
                <ul className="flex flex-wrap max-100% justify-content gap-3">
                  {project.stack.map((item, index) => {
                    return (
                      <li 
                        key={index}
                        className="text-lg text-accent">
                          {item.name}
                          {/* remove the lost comma */}
                          {index !== project.stack.length - 1 && ","}
                      </li>
                    )
                  })}
                </ul>

                {/* border */}
                <div className="border border-accent"></div>

                {/* buttons */}
                <div className="flex items-center gap-4 mt-2 xl:mt-2 mb-2 xl:mb-2">

                    {/* live project button */}
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                            bg-white/5 flex justify-center items-center group mt-2 mb-2">
                            <BsArrowUpRight className="text-white text-3xl 
                            group-hover:text-accent"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    {/* github project button */}
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                             bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl 
                             group-hover:text-accent"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github Repo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>
              </div>

            {/* Swiper */}
            <div className="w-full xl:w-[50%]">
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="xl:h-[520] justify-center mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide 
                      key={index} className="w-full">
                        <div className="h-[460px] relative group flex justify-right items-center 
                        bg-pink-50/20">

                          {/* overlay */}
                          <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                          {/* image */}
                          <div className="relative w-full h-full">
                            <Image 
                              src={project.image} 
                              fill 
                              className="object-cover"
                              alt="" 
                            />
                          </div>
                        </div>
                    </SwiperSlide>
                  );
                })}

                {/* slider buttons */}
                <div className="flex">
                  <SliderBtns
                    containerStyles="flex absolute xl:justify-between xl:items-center absolute top-1/2 left-2 
                    right-2 z-20"
                    btnStyles="bg-accent hover:text-[#ff9900] text-primary text-[32px] w-[32px]
                    h-[32px] flex justify-center items-center transition-all"
                  >
                  </SliderBtns>
                </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;