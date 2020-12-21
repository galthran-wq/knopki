<template>
  <section class="section section-shaped section-lg my-0 profile-page">
    <div class="shape shape-style-1 bg-gradient">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img v-lazy="'https://via.placeholder.com/800x800.png'" class="rounded-circle">
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="container py-4 mt-lg-0">
                  <div class="row">
                    <base-button type="warning" size="sm" class="mr-4">Мне нравится</base-button>
                    <base-button type="default" size="sm" >Комментировать</base-button>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div class="text-center">
                    <span class="heading">7777</span>
                    <span class="description">Просмотров за сегодня</span>
                  </div>
                  <div class="text-center">
                    <span class="heading">155</span>
                    <span class="description">"Мне нравится"</span>
                  </div>
                  <div class="text-center">
                    <span class="heading">89</span>
                    <span class="description">Комментариев</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h3>{{author.name}}</h3>
              <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>{{author.description}}</div>
              <h3 class="mt-3">{{post.title}}</h3>
            </div>
            <div class="py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>{{ post.body }}</p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <h4 class="text-center">Вам также может понравится:</h4>
    <div class="container mt-3 mb-5">
      <post-list :limit="3" body-limit="50"/>
    </div>

<!--    <h4 class="text-center mt-3">Комментарии:</h4>-->
<!--    <div class="container my-3">-->
<!--      <post-list limit="3" body-limit="50"/>-->
<!--    </div>-->
  </section>
</template>

<script>
import PostList from "@/layout/custom/PostList";
export default {
  name: "PostDetail",
  components: {PostList},
  computed: {
    id() {
      return this.$route.params.id
    },
    post() {
      return this.$store.getters.post(+this.id)
    },
    author() {
      return this.$store.getters.expert(this.post.author)
    }
  }
}
</script>

<style scoped>
  .profile-page .card-profile {
    margin-top: 0;
  }

  .bg-gradient {
    background: linear-gradient(180deg, #2dce89 0, #ffffff 100%) !important;
  }
  .section-lg {
    padding-top: 0; }
</style>