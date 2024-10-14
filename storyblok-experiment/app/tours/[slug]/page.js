import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export default async function DynamicTourPage({params}) {
    const story = await fetchDynamicTourPage(params.slug)
    return (
        <StoryblokStory story={story} />
    );
}

export async function fetchDynamicTourPage(slug) {
    const client = getStoryblokApi();
    const response = await client.getStory(`tours/${slug}`, { version: "draft" })
    return response.data.story;
}