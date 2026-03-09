import React from 'react';
import {getAllBlogs} from "@/lib/blogmark";
import Link from "next/link";
import Image from "next/image";

const BlogList = () => {

    const blogs = getAllBlogs(['title', 'slug', 'coverImage', 'date'])

    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {blogs.map((blog, index) => {
                            const formatedDate = new Date(blog?.date as string).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            });
                            return (
                                <Link href={`/blog/${blog.slug}`} key={index} className="group flex flex-col gap-3">
                                    <div className="group flex flex-col gap-5">
                                        <div className="w-full h-35 overflow-hidden group">
                                            <Image src={blog.coverImage as string} alt="cover-image" width={805} height={450} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-secondary/70 dark:text-white/70">
                                                {formatedDate}
                                            </span>
                                            <h4>{blog.title as string}</h4>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList;