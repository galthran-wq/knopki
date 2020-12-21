<template>
    <div
        class="card card-lift--hover shadow border-0"
    >
      <div class="container">
        <div class="row justify-content-between">
          <h4 class="col-8 my-auto">{{post.title}}</h4>
          <b-img
              width="50"
              height="50"
              class="mr-3 my-1"
              :src="post.image"
              rounded="circle"
              alt="Circle image"
          />
        </div>
        <hr class="mt-1">
        <div class="row justify-content-around mb-1">
          <div class="col-4" v-for="badge in post.badges" :key="badge.title">
            <badge pill :type="badge.type">{{badge.name}}</badge>
          </div>
        </div>
        <hr>
      </div>
      <div style="padding: 10px">
        {{ this.postBody }}
      </div>
      <base-button
          type="success"
          style="width: 100%"
          @click="() => this.$router.push({name: 'postDetail', params: { id: this.postId }})"
      >
          Прочитать полностью...
      </base-button>
    </div>
</template>

<script>
export default {
  name: "PostThumbnail",
  props: ['postId', 'bodyLimit'],
  computed: {
    post() {
      return this.$store.getters.post(this.postId)
    },
    postBody() {
      return this.post.body.slice(0, this.bodyLimit || 400) + '...'
    },
  },
}
</script>

<style scoped>
  hr {
    margin: 0;
  }
</style>