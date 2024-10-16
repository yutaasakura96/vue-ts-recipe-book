import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Recipe {
  id: string;
  name: string;
  description: string;
}

export const userRecipeStore = defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);

  return { recipes };
});
