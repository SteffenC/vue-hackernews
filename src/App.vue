<template>
  <div v-if="isApplicationReady">
    <div class="routerview">
      <router-view />
    </div>
  </div>
  <div v-else></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { getTopStories } from "./api/api";

export default defineComponent({
  async created() {
    const { body, status } = await getTopStories();
    if (status === 200) {
      this.SetTopStories(body);
    }
  },
  methods: {
    ...mapActions(["SetTopStories"]),
  },
  computed: {
    ...mapState(["isApplicationReady"]),
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
</style>
