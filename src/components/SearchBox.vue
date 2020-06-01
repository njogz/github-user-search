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
      this.$store.dispatch('searchUsers', { query: this.searchQuery, page: 1 });
    },
  },
};
</script>
