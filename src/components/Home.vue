<template>
  <div class="container">
    <div>
      <h1>Juan Rios</h1>
      <h4>Product designer</h4>
      <p>
        I'm passionate about visual design, meaningful interactions and engaging user experiences.
      </p>
    </div>
    <div class="project-cards">
      <app-project-card v-for="ProjectCard in ProjectCards" :project-card="ProjectCard"
                        :key="ProjectCard.name"></app-project-card>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard';

export default {
  components: {
    'app-project-card': ProjectCard,
  },
  data() {
    return {
      ProjectCards: [
        { name: 'Llorona Records', description: 'Responsive web design and front-end development' },
        { name: 'Swisscom iO', description: 'Visual and user experience design for Android' },
        { name: 'Simple Rain', description: 'Visual and user experience design for iOS (iPhone)' },
      ],
    };
  },
};
</script>

<style lang="scss">
  .container {
    padding: 4rem 2rem;
  }
  .project-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
  }
</style>
