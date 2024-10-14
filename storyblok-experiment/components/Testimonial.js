export const Testimonial = ({blok}) => {
    return (
        <div>
            <p className="text-xl leading-relaxed text-gray-700">{blok.comment}</p>
            <p className="text-lg font-semibold mt-6">{blok.name}</p>
        </div>
    );
}