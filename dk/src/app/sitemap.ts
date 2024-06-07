import { url } from "inspector";
import { blogData } from "./constant/constant";

export default async function sitemap() {
    const baseUrl = "https://dkrecuirtmentspizo.com";
  const blogPost = blogData.map((post) => {
    return {
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(),
    };
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",

      priority: 1,
    },

    {
      url: baseUrl + "/about",
      lastModified: new Date(),
      changeFrequency: "yearly",

      priority: 0.8,
    },
    {url: baseUrl + "/careers",
        lastModified: new Date(),
        changeFrequency: "yearly",
  
        priority: 0.5,

    },
    {url: baseUrl + "/services",
        lastModified: new Date(),
        changeFrequency: "yearly",
  
        priority: 0.9,

    },
    ...blogPost,
  ];
}
