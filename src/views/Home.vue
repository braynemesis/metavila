<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-md-6 vh-100 bg-home d-none d-md-block"></div>
      <div
        class="col-md-5 col-12 offset-md-1 d-flex justify-content-start align-items-center p-3"
      >
        <article class="text-left color-text">
          <img
            src="@/assets/img/met_logo.png"
            alt="Logo metávila"
            width="400px"
            class="img-fluid logo-site"
          />
          <div class="w-md-75">
            <h3 class="display-4 f-700 mt-3 fs">Seja <br /> bem-vindo</h3>
            <p class="w-md-75 mt-4 fs-14">
A Metávila é pioneira na fabricação de produtos de dupla combustão no Brasil. Os produtos de dupla combustão fabricados pela Metávila oferecem aquecimento de qualidade, mas deve-se respeitar a capacidade de aquecimento de cada um. 
            </p>
            <p class="w-md-75 mt-4 fs-14">
              Esta ferramenta tem o objetivo de auxiliar na escolha de um produto compatível ao ambiente onde será instalado. Preparado para escolher o seu calefator, inserto ou fogão de dupla combustão?
            </p>
            <router-link to="/step/dimensions" tag="button" class="btn btn-default mt-4 f-800">Vamos começar</router-link>
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

<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  .w-md-75{
    max-width: 100% !important;
  }
}
.w-md-75{
  max-width: 75%;
}
</style>