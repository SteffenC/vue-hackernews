<template>
  <div class="newsstory">
    <img
      :src="
        'https://avatars.dicebear.com/api/male/' +
        story.id +
        '.svg?mood[]=happy'
      "
    />
    <div class="newsstorycontent">
      <div>
        <a :href="story.url"
          ><h1>{{ story.title }}</h1></a
        >
        <h2>
          Submitted on {{ formatDate(story.time) }} at
          {{ formatTime(story.time) }} by {{ story.by }}
        </h2>
        <h2 class="newsstoryurl">{{ extractBaseUrl(story.url) }}</h2>
      </div>
      <div class="newsstoryactions">
        <div>
          <ThumbsUpIcon />
          <p>{{ story.score }}</p>
        </div>

        <a :href="story.url">
          
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { NewsStory } from "@/models/newsStory";
import { defineComponent } from "vue";
import ThumbsUpIcon from "@/components/ThumbsUpIcon.vue";

export default defineComponent({
  props: {
    story: {
      type: Object,
      default: () => NewsStory,
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
  components: { ThumbsUpIcon },
});
</script>
