import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export default async function Home() {
  const story = await fetchHome();

 return (
   <div>
     <StoryblokStory story={story} />
   </div>
 );
}

export async function fetchHome() {
  const client = getStoryblokApi();
  const response = await client.getStory("home", {
    version: "draft",
    resolve_relations: "recommended_tours.tours"
  })
  return response.data.story;
}