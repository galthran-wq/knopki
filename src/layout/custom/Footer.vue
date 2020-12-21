<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">Хотите поддержать проект?</h3>
          <h4 class="mb-0 font-weight-light">Следите за нашими обновлениями в социальных сетях!</h4>
        </div>
        <div class="col-lg-6 text-lg-center btn-wrapper">
          <a target="_blank" rel="noopener"
             class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Follow us">
            <i class="fa fa-twitter"></i>
          </a>
          <a target="_blank" rel="noopener"
             class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Like us">
            <i class="fa fa-facebook-square"></i>
          </a>
          <a target="_blank" rel="noopener"
             class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
             data-original-title="Follow us">
            <i class="fa fa-dribbble"></i>
          </a>
          <a target="_blank" rel="noopener"
             class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
             data-original-title="Star on Github">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
      <hr>
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy;
            <a target="_blank" rel="noopener">eat healthy</a>
            {{year}}, Все права защищены.
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
<!--            <li class="nav-item">-->
<!--              <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noopener">About-->
<!--                Us</a>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--              <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noopener">Blog</a>-->
<!--            </li>-->
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
 .footer.has-cards:before {
   background: #2dce89;
 }
 .btn-wrapper a i {
   color: white;
 }
</style>