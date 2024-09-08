"use client";

import { FaBitcoin, FaCss3, FaJs, FaNodeJs, FaReact, FaHtml5 } from 'react-icons/fa';
import { SiMeteor, SiSolidity, SiStellar, SiTailwindcss, SiUnity, SiXrp } from 'react-icons/si';
/* import { TooltipContent } from '@radix-ui/react-tooltip'; */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';


// about section
const about = {
  title: 'About',
  description: "I'm a ₿itcoin and Crypto expert, business developer, computer programmer, financial analyst, and investment strategist. Highly skilled in data science, design, engineering, financial analysis & modeling, and trading systems. Let's build something great together!",
  info: [
    {
      fieldName: "Name: ",
      fieldValue: "Christopher Chiodo",
    },
    {
      fieldName: "Business: ",
      fieldValue: "Mjolnir Miners",
    },
    {
      fieldName: "Business Phone: ",
      fieldValue: "(813) 555-5555",
    },
    {
      fieldName: "Business Email: ",
      fieldValue: "support@mjolnirminers.com",
    },
    {
      fieldName: "Business Website: ",
      fieldValue: "https://mjolnirminers.com",
    },
    {
      fieldName: "Experience: ",
      fieldValue: "15+ years banking, finance, and tech",
    },
    {
      fieldName: "Education: ",
      fieldValue: "Masters of Business Analytics, USF",
    },
    {
      fieldName: "Nationality: ",
      fieldValue: "United States of America",
    },
    {
      fieldName: "Collaborate: ",
      fieldValue: "Contract/Freelance",
    },
  ],

};

// experience section
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Experience',
  description: 
    "From 2010-2020, I built an early career in banking, finance, investment analysis, and operations. In 2020, I pivoted from finance to technology focusing on Bitcoin/Crypto, business development, programming, trading systems, and web design.",
    /* "Over 15 years of experience in business development, computer programming, financial services, investment analysis, and technology. From 2010-2023, I worked in banking, broker-dealer, investment advisory and operations capacities. In 2023, I realized the incredible opportunities in technology, and made a career change by embracing Bitcoin and the crypto currency industries. Since then, I adopted the Bitcoin maximalist philosophy, built businesses, designed websites, developed applications, and programmed trading systems.", */

  items:[
    {
      company: "Mjolnir Miners",
      position: "Founder & CEO, ₿itcoiner",
      duration: "TBD 2024",
    },
    {
      company: "Alpha Trading Systems",
      position: "President & CEO, Developer/Trader",
      duration: "July 2023 - Current",
    },
    {
      company: "Raymond James Financial",
      position: "Financial Analyst",
      duration: "Aug 2015 - May 2023"
    },
    {
      company: "CitiGroup",
      position: "Compliance Analyst",
      duration: "Sept 2014 - Aug 2015"
    },
    /*
    {
      company: "Bank of Tampa",
      position: "Senior Banker",
      duration: "Jan 2013 - Sept 2014"
    },
    */
  ],

};

// education section
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Education',
  description: 
    "In 2021, I earned a Masters degree in Business Analytics from the University of South Florida, MUMA College of Business. Developed high-demand technology skills in AI, blockchain, business strategy, data analytics, engineering, programming, and web2/web3 design.",

  items:[
    {
      institution: "XRPL Learning Portal",
      program: "Advanced Blockchain Development",
      duration: "June 2023 - Current"
    },
    {
      institution: "We3 Schools",
      program: "Full Stack Developer, CSS, HTML, NextJS, React, Web2/Web3",
      duration: "Jan 2023 - May 2023",
    },
    {
      institution: "University of South Florida, MUMA College of Business",
      program: " Masters of Business Analytics and Information Systems",
      duration: "Aug 2020 - December 2021",
    },
    {
      institution: "Florida State University",
      program: "Bachelors of Business/Finance",
      duration: "Aug 2007 - Dec 2010",
    },
    {
      institution: "Tallahassee Community College",
      program: "Associates Degree of Business Admin",
      duration: "Aug 2003 - May 2006"
    },
  ],
};



// skills section
const skills = {
  title: 'Skills',
  description: "Today, I'm a Bitcoin/crypto expert, business developer, financial analyst, and programmer. I build high-quality digital applications with the latest frameworks and technologies. I am highly proficient in web2/web3 design and am currently working on projects in real-world asset tokenization on the Stellar network and XRP Ledgers.",

  items: [
    { 
      icon1: <FaBitcoin />,
      name: "Bitcoin",
    },
    { 
      icon2: <SiSolidity />,
      name: "Solidity",
    },
    { 
      icon3: <SiStellar />,
      name: "Stellar",
    },
    { 
      icon4: <SiXrp />,
      name: "XRP Ledger",
    },
    { 
      icon5: <FaCss3 />, 
      name: "CSS",
    },
    { 
      icon6: <FaHtml5 />, 
      name: "HTML5",
    },
    { 
      icon7: <FaJs />, 
      name: "Javascript", 
    },
    { 
      icon11: <SiMeteor />, 
      name: "MeteorJS",
    },
    { 
      icon8: <FaNodeJs />, 
      name: "NodeJS",
    },
    { 
      icon9: <FaReact />, 
      name: "React",
    },
    { 
      icon10: <SiTailwindcss />, 
      name: "TailwindCSS", 
    },
    { 
      icon12: <SiUnity />,
      name: "Unity",
    },
  ],
};


import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="about" 
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">

            {/* about */}
            <TabsContent value="about" className="w-full h-full">
              <div className="flex flex-col gap-[5px] text-center xl:text-justify mb-5">   {/* flex or absolute */}
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 max-w-[620px] mt-5 mx-auto xl:mx-0">
                    {about.info.map((item, index)=> {
                      return (
                        <li 
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                            <span className="text-white/75 border-b border-accent">{item.fieldName}</span>
                            <span className="text-lg hover:text-accent">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col gap-[5px] text-center xl:text-justify mb-5">   {/* flex or absolute */}
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-rows-3 mt-2 gap-[10px]">
                    {experience.items.map((item, index)=> {
                      return (
                        <li 
                          key={index}
                            className="bg-[#232329] h-[120px] py-6 px-5 rounded-xl flex flex-col justify-center
                            items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">
                              {item.duration}
                            </span>
                            <h3 className="text-lg max-w-[600px] min-h-[30px] text-center lg:center-left">
                              {item.company}
                            </h3>
                            <div className="flex items-center gap-2">
                              {/* dot */}
                              <span className="w-[6px] h-[2px] rounded-full bg-[#ff9900]"></span>
                                <p className="text-white/75">
                                  {item.position}
                                </p>
                            </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[5px] text-center xl:text-justify mb-5">   {/* flex or absolute */}
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-rows-3 mt-2 gap-[10px]">
                    {education.items.map((item, index)=> {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[120px] py-6 px-5 rounded-xl flex flex-col justify-center
                          items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.duration}
                          </span>
                            <h3 className="text-lg max-w-[600px] min-h-[30px] text-center lg:text-left">
                              {item.institution}
                            </h3>
                            <div className="flex items-center gap-2">
                              {/* dot */}
                              <span className="w-[6px] h-[2px] rounded-full bg-[#ff9900]"></span>
                              <p className="text-white/75">{item.program}</p>
                            </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[5px] text-center xl:text-justify mb-2">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid-icons mt-3"> {/* "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-[20px]"> */}
                      {skills.items.map((skill, index)=> {
                        return (
                          <li 
                            key={index}
                          >
                            <span>
                              {/* <div className="text-5xl text-[#ff9900]">{skill.icon1}</div> */}
                            </span>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#ff9900]">{skill.icon1}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#383838]">{skill.icon2}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-black">{skill.icon3}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-black">{skill.icon4}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#264de4]">{skill.icon5}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#e34C26]">{skill.icon6}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#F7DF1E]">{skill.icon7}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#3c873a]">{skill.icon8}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#61DAFB]">{skill.icon9}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#a5f3fc]">{skill.icon10}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#D46712]">{skill.icon11}</div>
                                    <div className="text-5xl hover:scale-150 lg:hover:scale-150 transition text-white hover:text-[#959595]">{skill.icon12}</div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>               
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;