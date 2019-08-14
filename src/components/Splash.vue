<template>
  <div class="splash">
    <div class="wrapper">
      <div class="info-column">
        <h1>World War of Ants</h1>
        <div class="description">
          World War of Ants is a open-source game
        </div><br>
        <div class="actions">
            <b-button href="https://github.com/warofants/wwa" target="_blank">Github</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      error() {
        return this.$route.query.error;
      },
    },
  }
</script>
