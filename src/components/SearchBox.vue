<template>
  <v-row>
      <v-col>
        <v-text-field
          v-model="searchQuery"
          label="Search users"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn class="mr-4" @click="search">search</v-btn>
      </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    searchQuery: '',
  }),
  methods: {
    search() {
      console.log('searching');
      this.$store.dispatch('searchUsers', this.searchQuery);
    },
  },
};
</script>
