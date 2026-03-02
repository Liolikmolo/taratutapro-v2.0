import {join} from "path";
import * as fs from "node:fs";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "markdown/projects");

export const getPostSlugs = () => {
    return fs.readdirSync(postsDirectory)
};

export const getProjectsBySlug = (slug: string, fields: string[]) => {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.mdx`);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const {data, content} = matter(fileContent);

    const items = {...data};

    const processImages = (content: string) => {
        return content.replace(/!\[.*?]\((.*?)\)/g, '<img src="/" alt="">');
    }

    fields.forEach((field) => {
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = processImages(content);
        }
        if (field === "metadata") {
            items[field] = {...data, coverImage: data.coverImage || null};
        }
        if (typeof data[field] !== "undefined") {
            items[field] = data[field];
        }
    });
    return items;
}
export const getAllProjects = (fields: string[]) => {
    const slugs = getPostSlugs(), posts = slugs.map(slug => {
        getProjectsBySlug(slug, fields);
    });
    return posts;
}