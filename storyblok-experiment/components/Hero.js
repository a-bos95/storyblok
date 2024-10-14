export const Hero = ({blok}) => {
    return (
        <section className="container mx-auto px-4 pt-32 pb-16 w-full">
            <h1 className="text-center text-5xl md:text-7xl font-bold">{blok.headline}</h1>
            <p className="text-center text-xl mt-8">{blok.content}</p>
        </section>
    );
}