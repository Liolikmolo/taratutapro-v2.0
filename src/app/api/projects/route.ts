import {getAllProjects} from "@/lib/markdown";
import {NextResponse} from "next/server";

export const GET = async () => {
    const fields = ["title", "slug", "ScopeOfWork", "industry", "coverImage"];
    const projects = getAllProjects(fields);
    return NextResponse.json(projects);
}