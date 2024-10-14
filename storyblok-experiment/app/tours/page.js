import { Recommended_tour } from "@/components/Recommended_tour";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export default async function ToursPage() {
  const story = await fetchToursPage();
  const tours = await fetchAllTours();

 return (
   <div>
     <StoryblokStory story={story} />
     <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {tours.map((tour) => (
            <Recommended_tour story={tour} key={tour.content._uid} />
        ))}
     </div>
   </div>
 );
}

export async function fetchToursPage() {
  const client = getStoryblokApi();
  const response = await client.getStory("tours", {
    version: "draft",
  })
  return response.data.story;
}

export async function fetchAllTours() {
    const client = getStoryblokApi()
    const response = await client.getStories({
        version: "draft",
        content_type: "tour",
    })

    return response.data.stories;
}