import { StoryblokComponent } from "@storyblok/react/rsc";

export const Page = (params) => {
    return (
        <main>
            {params.blok.blocks.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
        </main>
    );
}