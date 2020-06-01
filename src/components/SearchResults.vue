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
        <v-btn small @click="showProfile(item)">View</v-btn>
      </template>
    </v-data-table>
    <p v-if="userCount > 0">{{ visibleRows() }} of {{ userCount }}</p>
    <v-pagination
      v-if="paginationlength > 0"
      v-model="page"
      :length="paginationlength"
      :total-visible="7"
    ></v-pagination>
    <v-dialog
      v-model="showDialog"
      max-width="400"
    >
      <user-profile :url="activeProfile.url" :username="activeProfile.login" />
    </v-dialog>
  </div>
</template>

<script>
import UserProfile from './UserProfile.vue';

export default {
  name: 'SearchResults',
  components: {
    UserProfile,
  },
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
        { text: 'View Profile', value: 'html_url', sortable: false },
      ],
      page: 1,
      activeProfile: {},
      showDialog: false,
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
      const totalPages = Math.ceil(this.userCount / 20);
      // Restricted to only the first 1000 results
      // so can only go up to page 50 with 20 results per page
      return totalPages > 50 ? 50 : totalPages;
    },
    userCount() {
      return this.$store.getters.getUserCount;
    },
  },
  methods: {
    visibleRows() {
      const first = (this.page - 1) * 20 + 1;
      let last = this.page * 20;
      if (this.page === this.paginationlength && this.userCount < last) {
        last = this.userCount;
      }
      return `${first} - ${last}`;
    },
    showProfile(item) {
      this.activeProfile = item;
      this.showDialog = true;
    },
  },
};
</script>
<style scoped>
.rounded {
  border-radius:50%;
}
</style>
