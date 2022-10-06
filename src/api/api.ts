import { Author } from "@/models/author";
import { HttpResponse } from "@/models/httpResponse";
import type { NewsStory } from "@/models/newsStory";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const getAxiosConfig = async (
  responseType: string = "json"
): Promise<Object> => {
  return {
    responseType: responseType,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };
};

const getTopStories = async (): Promise<HttpResponse<NewsStory[]>> => {
  const config = await getAxiosConfig();
  try {
    const { data, status } = await axios.get<number[]>(
      `${baseUrl}/topstories.json?print=pretty&limitToFirst=10&orderBy=%22$priority%22`,
      config
    );

    const result = await Promise.all(
      data.map(async (storyId: number) => {
        // Fetch story
        const storyResponse = await axios.get<NewsStory>(
          `${baseUrl}/item/${storyId}.json`,
          config
        );
        const newsStory = storyResponse.data;

        // Fetch author
        const authorResponse = await axios.get<Author>(
          `${baseUrl}/user/${newsStory.by}.json`,
          config
        );
        newsStory.author = authorResponse.data;

        return newsStory;
      })
    );

    return new HttpResponse(status, result);
  } catch (error: any) {
    return new HttpResponse(error.response.status, []);
  }
};

const getAuthor = async (username: string): Promise<HttpResponse<Author>> => {
  const config = await getAxiosConfig();
  try {
    const { data, status } = await axios.get<Author>(
      `${baseUrl}/user/${username}.json`,
      config
    );
    return new HttpResponse(status, data);
  } catch (error: any) {
    return new HttpResponse(error.response.status, new Author());
  }
};

export { getTopStories, getAuthor };
