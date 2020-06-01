<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="10"
      :loading="loading"
      class="elevation-1"
      hide-default-footer
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
    <p>{{ visibleRows() }} of {{ this.$store.getters.getUserCount }}</p>
    <v-pagination
      v-if="paginationlength > 0"
      v-model="page"
      :length="paginationlength"
      :total-visible="7"
    ></v-pagination>
  </div>
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
      page: 1,
    };
  },
  watch: {
    page() {
      this.$store.dispatch('searchUsers', { query: this.query, page: this.page });
    },
    query() {
      // reset the page if query changes
      this.page = 1;
    },
  },
  computed: {
    users() {
      return this.$store.getters.getPage(this.page);
    },
    query() {
      return this.$store.getters.getQuery;
    },
    loading() {
      return this.$store.getters.fetchingUsers;
    },
    paginationlength() {
      const totalPages = Math.ceil(this.$store.getters.getUserCount / 20);
      // Restricted to only the first 1000 results
      // so can only go up to page 50 with 20 results per page
      return totalPages > 50 ? 50 : totalPages;
    },
  },
  methods: {
    visibleRows() {
      const first = (this.page - 1) * 20 + 1;
      const totalUsers = this.$store.getters.getUserCount;
      let last = this.page * 20;
      if (this.page === this.paginationlength && totalUsers < last) {
        last = totalUsers;
      }
      return `${first} - ${last}`;
    },
  },
};
</script>
<style scoped>
.rounded {
  border-radius:50%;
}
</style>
