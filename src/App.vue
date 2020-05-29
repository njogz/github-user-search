<template>
  <v-app>
    <v-app-bar
      app
      color="#24292E"
      dark
    >
      <div class="d-flex align-center">
        Github User Search
      </div>
    </v-app-bar>

    <v-content>
      <SearchWrapper/>
    </v-content>
  </v-app>
</template>

<script>
import SearchWrapper from './components/SearchWrapper.vue';

export default {
  name: 'App',

  components: {
    SearchWrapper,
  },

  data: () => ({
    //
  }),
};
</script>
