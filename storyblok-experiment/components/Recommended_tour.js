import Link from "next/link";

export const Recommended_tour = ({story}) => {

    console.log(story)
    
    return (
        <div className="bg-white rounded-sm shadow">
            <img
            className="aspect-video object-cover w-full"
            src={`${story.content.main_image.filename}/m/736x414/filters:quality(70)`}
            width={736}
            height={414}
            alt={story.content.main_image.alt}
            loading={"lazy"}
            />
            <div className="p-8">
                <div className="flex gap-4 justify-between text-lg font-bold">
                    <h3>{story.content.name}</h3>
                    <p>
                    {Number(story.content.price).toLocaleString("it-IT", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 0,
                    })}
                    </p>
                </div>
                <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
                    {story.content.location}
                </p>
                <Link
                    className="font-bold text-base mt-8 block underline"
                    href={`/${story.full_slug}`}
                >
                    Vedi tour
                </Link>
            </div>
        </div>
    );
}