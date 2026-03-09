import {Metadata} from "next";
import NotFound from "@/components/not-found";

export const metadata: Metadata = {
    title: "404 Not found | Сайт мастера-печника Алексея Таратуты",
};

const ErrorPage = () => {
    return (
        <NotFound />
    )
}

export default ErrorPage;