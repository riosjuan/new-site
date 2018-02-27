<template>
<div>
  <h1>{{ header }}</h1>
  <hr>
  <button @click='changeHeader'>Change header</button>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      header: 'Project Title'
    };
  },
  methods: {
    changeHeader() {
      this.header = 'Something else';
    }
  }
};
</script>