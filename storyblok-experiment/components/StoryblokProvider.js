/** 1. Tag it as a client component */
"use client";
import { storyblokInit } from "@storyblok/react/rsc";
import { Tour } from "./Tour";
import { Page } from "./Page";
import { Hero } from "./Hero";
import { Recommended_tours } from "./Recommended_tours";
import { Grid } from "./Grid";
import { Feature } from "./Feaure";
import { Testimonial } from "./Testimonial";

const components = {
  tour: Tour,
  page: Page,
  hero: Hero,
  recommended_tours: Recommended_tours,
  grid: Grid,
  feature: Feature,
  testimonial: Testimonial
}

storyblokInit({
  enableFallbackComponent: true,
  components,
});
 
export default function StoryblokProvider({ children }) {
  return children;
}