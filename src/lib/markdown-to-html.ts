import {remark} from "remark";
import html from "remark-html";

export const markdownToHtml = async (markdown: string) => {
    const res = await remark().use(html).process(markdown);
    return res.toString();
}