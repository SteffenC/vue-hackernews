import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import type { NewsStory } from "../models/newsStory";

export interface State {
  isApplicationReady: boolean;
  stories?: {
    top: NewsStory[];
  };
  error: string;
  viewMode: "table" | "list";
}

export const key: InjectionKey<Store<State>> = Symbol();
export function useStore() {
  return baseUseStore(key);
}

export const store = createStore<State>({
  state: {
    isApplicationReady: false,
    stories: undefined,
    error: "",
    viewMode: "table",
  },
  mutations: {
    async MutateStories(state, stories: NewsStory[]) {
      state.stories = {
        top: stories.sort((a, b) => {
          if (a.score < b.score) return 1;
          if (a.score > b.score) return -1;
          return 0;
        }),
      };

      state.isApplicationReady = true;
      state.error = "";
    },
    async MutateViewMode(state, viewMode: "table" | "list") {
      state.viewMode = viewMode;
    },
  },
  actions: {
    SetTopStories({ commit }, stories: NewsStory[]) {
      commit("MutateStories", stories);
    },
    SetTableViewMode({ commit }) {
      commit("MutateViewMode", "table");
    },
    SetListViewMode({ commit }) {
      commit("MutateViewMode", "list");
    },
  },
});
