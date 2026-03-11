import {join} from "path";
import fs from "fs";
import matter from "gray-matter";

const postDirectory = join(process.cwd(), 'src/markdown/blogs');

export const getBlogsSlug = () => {
    return fs.readdirSync(postDirectory);
}

export const getBlogsBySlug = (slug: string, fields: string[]) => {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = join(postDirectory, `${realSlug}.mdx`);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const {data, content} = matter(fileContent);

    const items = {...data};

    const processImages = (content: string) => {
        return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
    }

    fields.forEach(field => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = processImages(content);
        }
        if (field === 'metadata') {
            items[field] = {...data, coverImage: data.coverImage || null};
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    })

    return items;
}

export const getAllBlogs = (fields: string[]) => {
    const slugs = getBlogsSlug();
    const blogs: { [key: string]: string | object; }[] = [];
    slugs.map(slug => {
        blogs.push(getBlogsBySlug(slug, fields));
    })
    return blogs;
}