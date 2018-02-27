<template>
  <div>
    <project-card v-for="cards in 10"></project-card>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
export default {
  components: {
    'project-card': ProjectCard
  }
};
</script>