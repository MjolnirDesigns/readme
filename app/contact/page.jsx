"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDonate } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { image } from "next/image";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "555-555-5555",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "support@minerpros.com",
  },
  {
    icon: <FaLocationDot />,
    title: "Address",
    description: "1984 Satoshi Way, Bitcoin, USA, 55555",
  },
  {
    icon: <FaDonate />,
    title: "Digital Wallet",
    description: "Bitcoin QR Code",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn"},
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px]">

          {/* form */}
          <div className="xl:h[54%] xl:w[50%] order-2 xl:order-none">
            <form className="flex flex-col gap-5 p-2 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl font-bold text-accent text-center ">Let's Build!</h3>
                <p className="text/white/60">
                  Please fill out the form below to set up a free consultation.
                </p>

                {/* Data Input */}
                <div className="grid grid-cols-1 xl:grid-cols-1 gap-3 md:grid-cols-1">
                  <Input type="firstname" placeholder="First Name" />
                  <Input type="lastname" placeholder="Last Name" />
                  <Input type="companyname" placeholder="Company Name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="phone" placeholder="Phone" />
                </div>

                {/* Select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-white">Services</SelectLabel>
                        <SelectItem value="ast">Bitcoin</SelectItem>
                        <SelectItem value="cst">Logo Design</SelectItem>
                        <SelectItem value="est">UI/UX Design</SelectItem>
                        <SelectItem value="mst">Web2/Web3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea 
                  className="h-[200px]" 
                  placeholder="Insert a brief message to summarize your request." 
                />

                {/* button */}
                <Button size="md" className="max-w-40">
                  Submit
                </Button>

            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 xl:align-top">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=> {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent 
                    rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;