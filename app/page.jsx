import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-6">

          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-4xl">
              <span style={{ color: '#ff9900' }}>₿itcoiner</span>
              <span style={{ color: 'white' }}>/Developer</span>
            </span>  {/* default is text-xl; <span className="text-4xl">Bitcoiner/Developer</span>*/}
              <h1 className="text-3xl mt-4 mb-4">    {/* default is h1 mb-6 */}
                Hello Friends, <br /><span className="text-accent text-3xl">I'm The Bitcoin Bro, Chris</span>
              </h1>
              <p className="max-w-[500px] mb-4 text-white/80"> 
                Bitcoin/Crypto expert and business consultant. I excel in computer programming, developing 
                digital applications, financial analysis & modeling, trading strategies and web2/web3 design. 
                Let's build great business applications together!
              </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-3"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="xl:mb-4 mb-4">
                <Social 
                  containerStyles="flex gap-7" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent
                  text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 mt-4"
                />
              </div>
            </div>
          </div>

          {/*photo*/}
          <div className="xl:order-none order-1 xl:mb-0 mb-4">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
