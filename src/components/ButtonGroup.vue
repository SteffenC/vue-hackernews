<template>
  <div class="buttongroup">
    <div class="buttongroupwrapper">
      <button
        v-on:click="setActiveGroupOne(0)"
        :class="activeIndexGroupOne === 0 ? 'isActive' : ''"
      >
        Table View
      </button>
      <button
        v-on:click="setActiveGroupOne(1)"
        :class="activeIndexGroupOne === 1 ? 'isActive' : ''"
      >
        List View
      </button>
    </div>

    <div class="buttongroupwrapper">
      <button
        v-on:click="setActiveGroupTwo(0)"
        :class="activeIndexGroupTwo === 0 ? 'isActive' : ''"
      >
        Top
      </button>
      <button
        v-on:click="setActiveGroupTwo(1)"
        :class="activeIndexGroupTwo === 1 ? 'isActive' : ''"
      >
        Jobs
      </button>
      <button
        v-on:click="setActiveGroupTwo(2)"
        :class="activeIndexGroupTwo === 2 ? 'isActive' : ''"
      >
        Ask
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "ButtonGroup",
  data() {
    return {
      activeIndexGroupOne: this.$store.state.viewMode === "table" ? 0 : 1,
      activeIndexGroupTwo: 0,
    };
  },
  methods: {
    setActiveGroupOne(index: number): void {
      this.activeIndexGroupOne = index;
      if (index === 0) {
        this.SetTableViewMode();
      } else {
        this.SetListViewMode();
      }
    },
    setActiveGroupTwo(index: number): void {
      this.activeIndexGroupTwo = index;
    },
    ...mapActions(["SetTableViewMode", "SetListViewMode"]),
  },
  computed: {
    getActiveClass(index: number, group: number): string {
      if (group === 1) {
        return index === this.activeIndexGroupOne ? "isActive" : "";
      }
      return index === this.activeIndexGroupTwo ? "isActive" : "";
    },
    ...mapState(["viewMode"]),
  },
});
</script>
