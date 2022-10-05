<template>
  <div class="storiesview">
    <div>
      <h1>Top News</h1>
      <input placeholder="Search by title, url or author" />
      <ButtonGroup />
    </div>
    <StoryTable v-if="viewMode === 'table'" :stories="stories.top" />
    <div v-if="viewMode === 'list'">
      <div v-for="story in stories.top" v-bind:key="story.id">
        <NewsStory :story="story" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import NewsStory from "../components/NewsStory.vue";
import StoryTable from "../components/StoryTable.vue";
import ButtonGroup from "../components/ButtonGroup.vue";

export default defineComponent({
  computed: {
    ...mapState(["isApplicationReady", "stories", "viewMode"]),
  },
  components: { NewsStory, StoryTable, ButtonGroup },
});
</script>
