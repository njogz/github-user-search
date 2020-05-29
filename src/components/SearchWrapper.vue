<template>
  <v-container>
    <v-row>
      <v-col>
        Search more than 40M Github users
      </v-col>
    </v-row>
    <search-box />
    <search-results />
  </v-container>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import SearchResults from '@/components/SearchResults.vue';

export default {
  name: 'SearchWrapper',
  components: {
    SearchBox,
    SearchResults,
  },
  data: () => ({
  }),
};
</script>
