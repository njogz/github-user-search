<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="10"
    :loading="loading"
    class="elevation-1"
  >
    <template v-slot:item.avatar_url="{ item }">
      <v-img
        :src="item.avatar_url"
        max-height="60px"
        max-width="60px"
        class="rounded"
      ></v-img>
    </template>
    <template v-slot:item.html_url="{ item }">
      <a :href="item.html_url" target="_blank">View Profile</a>
    </template>
    <template v-slot:item.url="{ item }">
      <a :href="item.url" target="_blank">View Profile</a>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Avatar',
          align: 'start',
          sortable: false,
          value: 'avatar_url',
        },
        { text: 'Username', value: 'login' },
        { text: 'HTML Profile', value: 'html_url', sortable: false },
        { text: 'API Profile', value: 'url', sortable: false },
      ],
    };
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    loading() {
      return this.$store.getters.fetchingUsers;
    },
  },
};
</script>
<style scoped>
.rounded {
  border-radius:50%;
}
</style>
