<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-md-6 vh-100 bg-home d-none d-md-block"></div>
      <div
        class="col-md-5 col-12 offset-md-1 vh-100 d-flex justify-content-start align-items-center p-3"
      >
        <article class="text-left color-text">
          <img
            src="@/assets/img/logo.svg"
            alt="Logo metávila"
            class="img-fluid logo-site"
          />
          <div class="pt-5">
            <h3 class="display-4 f-700 mt-3">Seja <br /> bem-vindo</h3>
            <p class="w-75 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <router-link to="/step/dimensions" tag="button" class="btn btn-default mt-4">Vamos começar</router-link>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>