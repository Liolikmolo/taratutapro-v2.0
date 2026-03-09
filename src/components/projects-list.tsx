import React, {ReactNode} from 'react';
import {getAllProjects} from "@/lib/markdown";
import Image from "next/image";
import Link from "next/link";


const ProjectsList = () => {
    const projects = getAllProjects(["title", "slug", "scopeOfWork", "industry", "coverImage"]);

    return (
        <section className = "dark:bg-darkblack py-20 md:py-40">
            <div className = "flex flex-col gap-24">
                <div className = "container">
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-10">
                        {
                            projects.map((project, index) => {
                                return (
                                    <div key = {index} className = "flex flex-col gap-5">
                                        <div className = "relative group">
                                            <Image
                                                src = {project.coverImage as string}
                                                alt = {project.title as string}
                                                className = "w-full"
                                                width = {100}
                                                height = {100}
                                            />
                                            <Link
                                                href = {`/projects/${project.slug}`}
                                                className = "absolute top-0 left-0 backdrop-blur-xs bg-black/70 w-full h-full hidden group-hover:flex"
                                            >
                                                <span
                                                    className = "absolute top-0 left-0 backdrop-blur-xs bg-black/70 w-full h-full hidden group-hover:flex"
                                                >
                                                    <svg
                                                        width = "65" height = "64" viewBox = "0 0 65 64" fill = "none"
                                                        xmlns = "http://www.w3.org/2000/svg"
                                                    >
                                                    <rect
                                                        x = "0.333374" width = "64" height = "64" rx = "32"
                                                        fill = "#C1FF72"
                                                    />
                                                    <path
                                                        d = "M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                                                        stroke = "#1F2A2E" strokeWidth = "2" strokeLinecap = "round"
                                                        strokeLinejoin = "round"
                                                    />
                                                </svg>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className = "flex flex-col gap-3">
                                            <h3>
                                                {project.title as ReactNode}
                                            </h3>
                                            <div className = "flex gap-3">
                                                {project.scopeOfWork.map((item: string, index: number) => (
                                                    <p
                                                        key = {index}
                                                        className = "text-base hover:bg-primary border border-secondary/12 dark:border-white/12 dark:hover:text-secondary w-fit py-1 px-4 rounded-full"
                                                    >{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProjectsList;