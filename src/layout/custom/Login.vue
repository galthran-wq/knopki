<template>
  <section class="section section-shaped section-lg my-0">
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
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card type="secondary" shadow
                header-classes="bg-white pb-5"
                body-classes="px-lg-5 py-lg-5"
                class="border-0">
            <template>
              <div class="text-muted text-center mb-3">
                <small>Войдите с помощью</small>
              </div>
              <div class="btn-wrapper text-center">
                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/github.svg">
                  Github
                </base-button>

                <base-button type="neutral">
                  <img slot="icon" src="img/icons/common/google.svg">
                  Google
                </base-button>
              </div>
            </template>
            <template>
              <div class="text-center text-muted mb-4">
                <small>или</small>
              </div>
              <form role="form">
                <base-input alternative
                            class="mb-3"
                            placeholder="Электронная почта"
                            addon-left-icon="ni ni-email-83">
                </base-input>
                <base-input alternative
                            type="password"
                            placeholder="Пароль"
                            addon-left-icon="ni ni-lock-circle-open">
                </base-input>
                <base-checkbox>
                  Запомнить меня
                </base-checkbox>
                <div class="text-center">
                  <base-button type="primary" class="my-4">Войти</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>Забыли пароль?</small>
              </a>
            </div>
            <div class="col-6 text-right">
              <router-link :to="{name: 'signup'}" class="text-light">
                <small>Создать новый аккаунт</small>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>
.bg-gradient {
  background: linear-gradient(180deg, #2dce89 0, #ffffff 100%) !important;
}
</style>