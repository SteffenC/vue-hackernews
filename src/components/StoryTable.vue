<template>
  <div class="desktoptable">
    <table>
      <tr>
        <th>Score</th>
        <th>Title</th>
        <th>Source</th>
        <th>Author</th>
        <th>Posted at</th>
      </tr>

      <tr v-for="story in stories" v-bind:key="story.title">
        <td>{{ story.score }} Points</td>
        <td>
          <a :href="story.url">{{ story.title }}</a>
        </td>
        <td>
          <a :href="extractBaseUrl(story.url)">{{
            extractBaseUrl(story.url)
          }}</a>
        </td>
        <td>
          <img
            :src="
              'https://avatars.dicebear.com/api/male/' +
              story.id +
              '.svg?mood[]=happy'
            "
          /><AuthorTag :name="story.by" />
        </td>
        <td>{{ formatDate(story.time) }} at {{ formatTime(story.time) }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { NewsStory } from "@/models/newsStory";
import type { PropType } from "vue";
import AuthorTag from "./AuthorTag.vue";

export default defineComponent({
  name: "StoryTable",
  props: {
    stories: {
      type: Array as PropType<Array<NewsStory>>,
      required: true,
    },
  },
  methods: {
    extractBaseUrl(url: string) {
      if (!url || url.length === 0) {
        return "";
      }
      var splits = url.split("/");
      var protocol = splits[0];
      var host = splits[2];
      var baseUrl = protocol + "//" + host;
      return baseUrl;
    },
    formatDate(epochTime: number) {
      return new Date(epochTime * 1000).toDateString();
    },
    formatTime(epochTime: number) {
      const date = new Date(epochTime * 1000);
      let minutes = date.getMinutes();
      let minuteString = minutes < 10 ? "0" + minutes : "" + minutes;
      return `${date.getHours()}:${minuteString}`;
    },
  },
  components: { AuthorTag },
});
</script>
