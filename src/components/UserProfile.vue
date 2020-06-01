<template>
  <v-card :loading="loading">
    <div v-if="user">
      <v-img
        height="200"
        :src="user.avatar_url"
      ></v-img>

      <v-card-title> {{ user.name }}</v-card-title>

      <v-card-text>
        <v-list dense>
          <v-list-item v-if="user.blog">
            <v-list-item-icon>
              <v-icon>mdi-web</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>
              <a class="no_underline" :href="user.blog" target="_blank">{{ user.blog }}</a>
            </v-list-item-subtitle>
          </v-list-item>
          <v-list-item v-if="user.location">
            <v-list-item-icon>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>{{ user.location }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-account-supervisor</v-icon></v-list-item-icon>
            <v-list-item-subtitle>{{ user.followers }} followers</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-account-plus</v-icon></v-list-item-icon>
            <v-list-item-subtitle>{{ user.following }} following</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-git</v-icon></v-list-item-icon>
            <v-list-item-subtitle>{{ user.public_repos }} repositories</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        {{ user.bio }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon>
          <a class="no_underline" :href="user.url" target="_blank">
            <v-icon>mdi-api</v-icon>
          </a>
        </v-btn>
        <v-btn icon>
          <a class="no_underline" :href="user.html_url" target="_blank">
            <v-icon>mdi-github</v-icon>
          </a>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['url', 'username'],
  data: () => ({
    loading: false,
    selection: 1,
  }),
  mounted() {
    this.$store.dispatch('getUser', { url: this.url, name: this.username });
  },
  updated() {
    this.$store.dispatch('getUser', { url: this.url, name: this.username });
  },
  computed: {
    user() {
      return this.$store.getters.getUser(this.username);
    },
  },
};
</script>
<style scoped>
.no_underline{
  text-decoration: none;
}
</style>
