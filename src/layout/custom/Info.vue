<template>
  <div>
    <div class="position-relative main-theme">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col px-0">
            <div class="row">
              <div class="col-lg-6">
                <h1 class="display-3  text-white">Молодая компания
                  <span>основанная людьми, которым не все равно</span>
                </h1>
                <p class="lead  text-white">Мы продлеваем вашу жизнь</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section >
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <img src="img/label/silderei-removebg-preview.png" class="img-fluid floating">
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5">
              <icon name="ni ni-air-baloon" class="mb-5" size="lg" type="success" shadow
                    rounded></icon>
              <h3>Помощь в составлении персонального рациона питания</h3>
              <p>Множество наших клиентов остались довольны быстрым и легким результатом</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-settings-gear-65"></badge>
                    <h6 class="mb-0">Чуткое отношение ко всем мелочам вашего организма</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-fat-add" style="font-size: 1.5rem"></badge>
                    <h6 class="mb-0">Коррекция здоровья, лечение ваших давних недугов</h6>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge type="success" circle class="mr-3" icon="ni ni-satisfied"></badge>
                    <h6 class="mb-0">Отзывчивое и вежливое руководство</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Info"
}
</script>

<style scoped>
.main-theme {
  background-image: url("../../../public/img/label/love-removebg-preview.png");
  background-repeat: no-repeat;
  background-position: 70% 30%;
}

.section-shaped .shape-style-1.shape-default {
  background: linear-gradient(150deg, #2dce89 15%, #2dce89 70%, #f1d7d7 94%);
}
</style>