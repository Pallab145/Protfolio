import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiApachekafka, SiDocker, SiExpress, SiJavascript, SiMongodb, SiPostgresql, SiPrisma, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div className="p-4">
            <SiJavascript className="text-7xl text-yellow-400" />
          </div>
          <div className="p-4">
            <SiTypescript className="text-7xl text-blue-500" />
          </div>
          <div className="p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="p-4">
            <TbBrandNextjs className="text-7xl" />
          </div>
          <div className="p-4">
            <SiTailwindcss className="text-7xl text-cyan-600" />
          </div>
          <div className="p-4">
            <FaNodeJs className="text-7xl text-green-500" />
          </div>
          <div className="p-4">
            <SiExpress className="text-7xl text-gray-700" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div className="p-4">
            <SiPrisma className="text-7xl text-blue-500" />
          </div>
          <div className="p-4">
            <SiMongodb className="text-7xl text-cyan-500" />
          </div>
          <div className="p-4">
            <SiPostgresql className="text-7xl text-blue-700" />
          </div>
          <div className="p-4">
            <SiDocker className="text-7xl text-blue-600" />
          </div>
          <div className="p-4">
            <DiRedis className="text-7xl text-red-700" />
          </div>
          <div className="p-4">
            <SiApachekafka className="text-7xl text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
};