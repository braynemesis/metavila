<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-1 vh-120 m-0 p-0 d-md-block d-none position-fixed">
        <div
          class="sidebar vh-120 d-flex align-items-center justify-content-center position-relative"
        >
          <router-link to="/">
            <img
              src="@/assets/img/icon-logo.svg"
              alt="logo metávila"
              class="img-fluid logo-sidebar w-75"
            />
          </router-link>
        </div>
      </div>
      <div class="col-12 col-md-11 offset-md-1 vh-100 mb-5 position-relative px-0">
        <img
          src="@/assets/img/icon-logo.svg"
          alt="logo metávila"
          class="img-fluid logo-sidebar w-10 p-2 d-flex d-md-none mx-auto"
        />
        <transition mode="out-in" name="slide-fade">
          <router-view />
        </transition>
        <div
          class="stepper-footer d-flex justify-content-end align-items-center pr-md-4 px-4"
        >
          <button class="btn btn-secondary px-5" @click="previousRoute">
            Voltar
          </button>
          <button
          v-show="this.$route.name != 'Final'"
            class="btn btn-primary px-5 mr-md-2"
            style="height: 2.5rem"
            @click="nextRoute"
          >
            Próximo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  data() {
    return {
      index: 1,
      routes: ["Home", "Dimensions", "Final"],
    };
  },
  methods: {
        showAlert() {

      this.$swal("Por favor, preencha todas as informações");
    },
    nextRoute() {
      if (this.index < 3) {
        if (this.index == 1) {
          var { altura, largura, comprimento } = sessionStorage;
          var result = [altura, largura, comprimento].some(e => e === '');
          if(result){
           this.showAlert()
          } else {
               ++this.index;
          this.$router.push({ name: this.routes[this.index] });
          }
        } else {
          ++this.index;
          this.$router.push({ name: this.routes[this.index] });
        }
      }
    },
    previousRoute() {
      if (this.index != 0) {
        --this.index;
        this.$router.push({ name: this.routes[this.index] });
      }
    },
  }
};
</script>

<style lang="scss">
.stepper-footer {
  background: var(--tertiary);
  height: 5rem;
  width: 100vw;
  position: fixed;
  bottom: 0;
  box-shadow: 4px -2rem 2rem rgba(0, 0, 0, 0.2);
}
@media screen and(min-width: 900px) {
  .stepper-footer {

  width: 92vw;
  }
}
@media screen and(max-width: 900px) {
  .home {

 justify-content: center !important;
  }
}
.sidebar {
  background-color: var(--tertiary);
  .logo-sidebar {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  .icon-home {
    transition: all 0.2s ease;
    background: rgba(0, 0, 0, 0.35);
    padding: 0.75rem;
    border-radius: 100%;
    &:hover {
      background: rgba(0, 0, 0, 0.75);
    }
  }
}
</style>