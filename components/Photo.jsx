"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


function Photo() {
    const imageRef = useRef(null);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const image = imageRef.current;
        if (image) {
            setImageSize({
                width: image.clientWidth,
                height: image.clientHeight,
            });
        }
    }, []);


    return (
        <div className="w-full h-full flex justify-left items-center"> {/* shrink photo to fit better? */}
            <motion.div
                className="flex justify-left items-center relative"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, easy: "easyInOut" },
                }}    
            >
                {/* image */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, easy: "easyInOut"},
                    }}   
                    className="w-[298px] h-[298px] xl:w[373.5px] xl:h-[373.5px] absolute" /* add mix-blend-lighten w-[298px] h-[298px] xl:w[498px] xl:h-[498px] absolute */
                > 
                    <Image 
                        src="/assets/photo.png"
                        priority 
                        quality={100} 
                        fill
                        alt="" 
                        className="object-cover object-center"  /* object-contain */
                        ref={imageRef}
                    />
                </motion.div>

                {/* circle */}
                <motion.svg 
                    className="w-[300px] h-[300px] xl:w-[379.5px] xl:h-[379.5px] relative xl:right-10 transform"  /* w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] relative */
                    fill="transparent"
                    viewBox="0 0 506 506"   /* medium screen settings: viewBox="-45 120 600 280" */
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253"   /* alternate "253" */
                        cy="253"  /* alternate "253" */
                        r="250"   /* alternate 280; adjust settings to align with photo, research XAI, ChatGPT*/
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeJoin="round"
                        initial={{strokeDasharray: "15 120 180 24"}}
                        animate={{
                            strokeDasharray: ["10 120 50 50", "8 24 108 62", "50 250 22 62", "5 40 250 80"], /* 15 120 24 24", "16 25 92 72", "50 250 22 22 */
                            rotate: [240, 360],
                        }}
                        transition={{
                            duration: 150,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;