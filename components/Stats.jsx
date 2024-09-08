"use client"

import CountUp from "react-countup";

const stats = [
    {
        num: 15,
        text: "Years of Experience"
    },
    {
        num: 17,
        text: "Projects Completed"
    },
    {
        num:10,
        text: "Systems Mastered"
    },
    {
        num: 39,
        text: "Code Commits"
    },
];



const Stats = () => {
    return (
        <section className="xl:pt-0 xl:pb-0 pt-0 pb-0">
            <div className="container mx-auto mb-5">
                <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-6 max-w-[80vw] mx-auto xl:max-w-none">   {/* flex flex-wrap gap-6 max-w[80vw] mx-auto xl:max-w-none */}
                    {stats.map((item, index)=> {
                        return (
                            <div
                                className="flex flex-col items-center justify-center p-4 bg-primary rounded-lg
                                transition-all duration-300 hover:outline-2 hover:outline-accent" /* flex-1 flex-fit gap-5 items-center-even justify-center xl:justify-start */
                                key={index}
                            >
                                <CountUp 
                                    end={item.num} 
                                    duration={5} 
                                    delay={2} 
                                    className="text-4xl xl:text-6xl justify-center font-extrabold text-white mb-2"
                                />
                                <p className="leading-snug text-white/80 text-center">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;