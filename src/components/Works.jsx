import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, adobexd, Resume } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    type,
    source_code_link,
    apps,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <motion.div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px] ">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    {source_code_link && (
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={() =>
                                    window.open(source_code_link, "_blank")
                                }
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                <img
                                    src={
                                        type === "web"
                                            ? github
                                            : type === "design"
                                            ? adobexd
                                            : null
                                    }
                                    alt="source code"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[20px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[13px]">
                        {description}
                        <div className="flex justify-start items-center flex-wrap mt-2 w-full">
                            {apps && (
                                <>
                                    {apps.map((app, idx) => (
                                        <div
                                            key={idx}
                                            className="text-[10px] font-semibold inline-block bg-gray-200 rounded-md px-1 py-1 text-gray-700 mb-2 mr-2">
                                            <span>{app}</span>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                    </p>
                </div>

                <div className="mt-4 flex items-center flex-wrap gap-2">
                    {tags.map((tag) =>
                        tag.name === "Open Project" ? (
                            <a
                                key={`${name}-${tag.name}`}
                                href={tag.url}
                                target="_blank"
                                className={`text-[12px] p-1 px-2 ${tag.color} ${tag.border} ml-auto`}>
                                {tag.name}
                            </a>
                        ) : (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`text-[12px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        )
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Works = () => {
    const [filter, setFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projects);

    // useEffect(() => {
    //     if (filter === "All") {
    //         setFilteredProjects(projects);
    //     } else {
    //         setFilteredProjects(
    //             projects.filter((project) => project.type === filter)
    //         );
    //     }
    // }, [filter]);

    // console.log(filter)

    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="flex items-center justify-between md:w-[23%]">
                    <p className={`${styles.sectionSubText}`}>My work</p>
                    <br />
                    <div>
                        <a
                            href={Resume}
                            title="Download CV"
                            className={styles.downloadCvStyle}
                            target="_blank">
                            Download CV
                        </a>
                    </div>
                </div>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following projects showcase my skills and experience through
                    real-world examples of my work. Each project is briefly
                    described with links to code repositories and live demos in
                    it. It reflects my ability to solve complex problems, work
                    with different technologies, and manage projects
                    effectively.
                </motion.p>
            </div>

            {/* <motion.div
                variants={textVariant()}
                className="border-while border-2 rounded-lg mt-10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 p-3">
                    <span
                        onClick={() => setFilter("All")}
                        className={`${styles.listItem} ${
                            filter === "All"
                                ? "text-[#000000] bg-white border-white font-bold font-sans"
                                : ""
                        }`}>
                        All
                    </span>
                    <span
                        onClick={() => setFilter("design")}
                        className={`${styles.listItem} ${
                            filter === "design"
                                ? "text-[#000000] bg-white border-white font-bold font-sans"
                                : ""
                        }`}>
                        UX / UI Design
                    </span>
                    <span
                        onClick={() => setFilter("web")}
                        className={`${styles.listItem} ${
                            filter === "web"
                                ? "text-[#000000] bg-white border-white font-bold font-sans"
                                : ""
                        }`}>
                        Web development
                    </span>
                </div>
            </motion.div> */}

            <div className="mt-5 flex justify-between flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
