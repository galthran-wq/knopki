<template>
  <div class="container py-5">
    <h3 class="mb-4 text-center">Каталог статей</h3>
    <b-input-group size="lg" prepend="Поиск" class="mb-4">
      <b-form-input aria-label="Large text input with switch" v-model="search"></b-form-input>
      <b-input-group-append is-text>
        <b-form-checkbox switch class="mr-n2">
          <span class="sr-only">Статьи экспертов</span>
        </b-form-checkbox>
      </b-input-group-append>
    </b-input-group>
    <post-list :limit="6" :title-filter="search" :offset="(pagination.default-1) * 6"/>
    <div class="row mt-3 justify-content-around">
      <base-pagination  v-if="!search" :page-count="Math.ceil(this.$store.getters.postIds.length / 6)" size="lg" v-model="pagination.default"/>
    </div>
  </div>
</template>

<script>
import PostList from "@/layout/custom/PostList";
export default {
  name: "Catalogue",
  components: {PostList},
  data() {
    return {
      pagination: {
        default: 1
      },
      search: this.$route.params.search || ''
    };
  }
}
</script>

<style scoped>

</style>