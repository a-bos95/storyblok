import { StoryblokComponent } from "@storyblok/react/rsc";
export const Grid = ({blok}) => {
    return (
       <>
        <section className="bg-blue-100 py-16">
            <div className="container mx-auto w-full px-4">
                <h2 className="font-bold text-3xl md:text-4xl">{blok.headline}</h2>
                <div className="grid auto-cols-fr md:grid-flow-col mt-12 gap-8">
                    {blok.items.map((blok) => (
                        <StoryblokComponent blok={blok} key={blok._uid} />
                    ))}
                </div>
            </div>
        </section>
       </>
    );
  }