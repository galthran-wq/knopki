<template>
  <div>
    <div class="image">
      <div class="container main-form">
        <h1 class="main-header">Путь к здоровой жизни начинается здесь...</h1>
        <b-input-group>
          <b-form-input id="input-large" v-model="search" size="lg" placeholder="Узнайте о здоровом питании все..."></b-form-input>
          <b-input-group-append>
            <b-button variant="success" @click="() => this.$router.push({name: 'catalogue', params: { search: this.search }})">
              <b-icon icon="search" font-scale="1.5"></b-icon>
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </div>
    </div>
    <div class="container py-5">
      <h2 class="text-center mb-3">Самые популярные публикации</h2>
      <post-list class="mb-3" :limit="3"/>
      <div class="row justify-content-around">
        <b-button
            size="lg"
            type="success"
            class="text-center"
            @click="() => this.$router.push({name: 'catalogue'})"
        >
          Смотреть все статьи
        </b-button>
      </div>
    </div>
    <div style="background: #f4f5f7" class="py-5">
      <div class="container carousel-container">
        <h2 class="text-center mb-3">Наши эксперты</h2>
        <b-carousel
            id="carousel-1"
            fade
            indicators
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #000; color: white"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
              v-for="expert of this.$store.state.experts"
              :key=expert.id
              :caption=expert.name
              :text=expert.description
              :img-src=expert.image
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="container pt-5 pb-5">
      <h2 class="mb-5">Закажите персональную помощь и обследование уже сейчас!</h2>
      <div class="row justify-content-around">
      <card type="secondary" shadow
                  header-classes="bg-white pb-5"
                  body-classes="px-lg-5 py-lg-5"
                  class="col-xl-8 border-0">
                <template>
                    <div class="text-muted text-center mb-3">
                        <small>Укажите номер телефона для консультации</small>
                    </div>
                </template>
                <template>
                    <form role="form">
                        <base-input alternative
                                    class="mb-3"
                                    placeholder="Номер мобильного телефона"
                                    addon-left-icon="ni ni-email-83">
                        </base-input>
                        <div class="text-center">
                            <base-button type="success" class="my-4">Заказать звонок оператора</base-button>
                        </div>
                    </form>
                </template>
            </card>
      </div>
    </div>
  </div>
</template>

<script>
  import PostList from "@/layout/custom/PostList";
  export default {
    components: {PostList},
    data() {
      return {
        slide: 0,
        sliding: null,
        search: ''
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.image {
  background-image: url("../../../public/img/label/OCT-19_HFG-Website-Homepage-Images-_2500x842_4.jpg");
}

.main-form {
  padding: 150px;
}

.main-header {
  color: #fff;
  font-weight: bold;
  text-shadow: black 1px 1px;
  text-align: center;
}
</style>
