<template>
  <div style="position: relative">
    <base-nav type="success" effect="dark" expand>
      <a class="navbar-brand" href="#">
        <div @click="() => this.$router.push({name: 'starter'})">
          <img src="../../../public/img/label/logo-removebg-preview.png" style="height: 70px!important;" alt=""/>
        </div>
      </a>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
          <div class="col-6 collapse-brand">
          </div>
          <div class="col-6 collapse-close">
              <close-button @click="closeMenu"></close-button>
          </div>
      </div>

      <ul class="navbar-nav ml-lg-auto">
        <base-button block type="success" text-color="#000" @click="() => this.$router.push({name: 'info'})">
          О нас
        </base-button>
        <base-button block type="success" text-color="#000" @click="() => this.$router.push({name: 'contacts'})">
          Контакты
        </base-button>
        <base-button block type="success" text-color="#000" @click="() => this.$router.push({ name: 'login' })">
            Присоеденитесь к сообществу
        </base-button>
      </ul>
   </base-nav>
  </div>

</template>

<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import Modal from "@/components/Modal";

export default {
  name: "Header",
  components: { BaseNav, BaseDropdown, CloseButton, Modal },
  data() {
    return {
      openModal: false
    }
  }
}
</script>

<style scoped>

</style>