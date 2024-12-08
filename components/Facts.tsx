"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
// import { HiOutlineLightningBolt } from "react-icons/hi";
// import { RxQuestionMark } from "react-icons/rx";
import { FaQuestion } from "react-icons/fa6";

const Facts = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Interesting facts <span className="text-purple">about me</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card 
          title="Growth and Initiative" 
          icon={<AceternityIcon />}
          description="I thrive on learning new technologies and pushing myself to tackle 
          complex challenges. Taking initiative and owningnership of features within 
          a project is something I truly enjoy, as it allows me to drive impactful results 
          while fostering innovation. This approach not only keeps me motivated but also 
          ensures I deliver thoughtful, high-quality solutions."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
          title="Dancer" 
          icon={<AceternityIcon />}
          description="I'm a passionate dancer specializing in Salsa, Bachata, Brazilian Zouk, Breakdance,
          and Kizomba, styles that have enriched my understanding of diverse cultures and traditions. 
          Through dance, I’ve gained a deeper appreciation for human connection and creativity, 
          insights that influence my approach to technology by emphasizing adaptability, innovation, 
          and the value of different perspectives."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Karnowsky?" 
          icon={<AceternityIcon />}
          description="I'm a proud Haitian American with a name that reflects my roots—my parents 
          creatively combined their names to give me mine. Having spent most of my life in NYC, 
          I deeply appreciate the city’s energy, diversity, and endless opportunities for growth 
          and connection. My background and experiences have shaped my perspective and drive in 
          everything I do."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center" style={{color: "#e4ecff"}}>
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      {/* <RxQuestionMark size={66}/>  Thin question mark vs thick question mark below*/}
      <FaQuestion size={66}/>
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Facts