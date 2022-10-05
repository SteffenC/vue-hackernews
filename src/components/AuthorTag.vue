<template>
  <div class="authortag">@ {{ name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthorTag",
  props: {
    name: {
      type: String,
      requried: true,
    },
  },
});
</script>
