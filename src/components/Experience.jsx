import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { stringUrl } from "../constants/webLinks";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const ExperienceCard = ({ experience }) => {
  console.log(experience);
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point.indexOf("@") > -1 ? (
              <div>
                <span>{point.slice(0, point.indexOf("@"))}</span>
                <span
                  className="hover:cursor-pointer hover:underline"
                  onClick={() => stringUrl(point.slice(point.indexOf("@")))}
                >
                  {point.slice(point.indexOf("@"))}
                </span>

                <div
                  key={`experience-point-${index}`}
                  className="w-full text-white-100 text-[14px] pl-1 flex flex-col py-2"
                >
                  {experience?.workDescription?.map((desc, index) => (
                    <span className="break-words whitespace-pre-line">
                      {desc}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              point
            )}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
