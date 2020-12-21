<template>
  <div class="row">
      <div class="col-xl-4 col-md-6 mb-5 mb-md-0"
           v-for="postId in this.postIds"
           v-if="isTitleIncluded(postId)"
           :key="postId">
        <div
            class="mt-2"
        >
          <post-thumbnail
              :post-id="postId"
              :body-limit="bodyLimit"
          />
        </div>
      </div>
  </div>
</template>

<script>
import PostThumbnail from "@/layout/custom/PostThumbnail";

export default {
  name: "PostList",
  props: ['limit', 'bodyLimit', 'offset', 'titleFilter'],
  components: {PostThumbnail},
  computed: {
    postIds() {
      return this.$store.getters.postIds.slice(this.offset || 0, this.limit + (this.offset || 0))
    }
  },
  methods: {
    isTitleIncluded(postId) {
      let title = this.$store.getters.post(postId).title
      return title.toLowerCase().includes((this.titleFilter || '').toLowerCase())
    }
  }
}
</script>

<style scoped>

</style>