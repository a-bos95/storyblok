import { Recommended_tour } from "./Recommended_tour";

export const Recommended_tours = ({blok}) => {

    
    return (
       <section className="py-16 container mx-auto w-full px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">{blok.headline}</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-16">
                {blok.tours.map((tour) => (
                    <Recommended_tour story={tour} key={tour.content._uid} />
                ))}
            </div>
       </section>
    );
}