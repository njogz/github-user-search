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
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
