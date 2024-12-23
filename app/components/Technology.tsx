"use client"

import { motion, Transition } from "framer-motion";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiApachekafka,
  SiDocker,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconVarient = (duration: number): { initial: any, animate: any } => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration, 
      ease: "linear",
      repeat: Infinity, 
      repeatType: "reverse" as "reverse", 
    } as Transition
  }
});

export const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap justify-center gap-4 w-full"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)}
            className="p-4"
          >
            <SiJavascript className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(3)}
            className="p-4"
          >
            <SiTypescript className="text-7xl text-blue-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(5)}
            className="p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2)}
            className="p-4"
          >
            <TbBrandNextjs className="text-7xl" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(6)}
            className="p-4"
          >
            <SiTailwindcss className="text-7xl text-cyan-600" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(4)}
            className="p-4"
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(5)}
            className="p-4"
          >
            <SiExpress className="text-7xl text-gray-700" />
          </motion.div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap justify-center gap-4 w-full"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(3)}
            className="p-4"
          >
            <SiPrisma className="text-7xl text-blue-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(6)}
            className="p-4"
          >
            <SiMongodb className="text-7xl text-cyan-500" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(4)}
            className="p-4"
          >
            <SiPostgresql className="text-7xl text-blue-700" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(2.5)}
            className="p-4"
          >
            <SiDocker className="text-7xl text-blue-600" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(3)}
            className="p-4"
          >
            <DiRedis className="text-7xl text-red-700" />
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVarient(6)}
            className="p-4"
          >
            <SiApachekafka className="text-7xl text-purple-600" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
