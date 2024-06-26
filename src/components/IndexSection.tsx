import { ReactNode } from "react";

function IndexSection({ engTitle, twTitle, children }: {engTitle:string; twTitle:string; children:ReactNode;}) {   
    return (
        <div className="h-fit md:h-dvh flex flex-col justify-center">
            <div className="border-b pb-4 mb-10">
                <h4 className="text-7xl font-bold font-RedditMono inline-block tracking-normal">{engTitle}</h4>
                <h2 className="text-2xl md:inline-block md:ml-4">{twTitle}</h2>
            </div>
            <article className="text-lg leading-8">
                {children}
            </article>
        </div>
    )
}

export default IndexSection;