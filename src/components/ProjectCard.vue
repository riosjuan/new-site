<template>
  <div class="card">
    <h2>{{ ProjectCard.name }}</h2>
    <p>{{ ProjectCard.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    ProjectCard: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(23,26,33,0.1);
}
</style>
