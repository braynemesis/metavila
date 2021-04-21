<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-1 vh-100 m-0 p-0 d-md-block d-none">
        <div
          class="sidebar vh-100 d-flex align-items-center justify-content-center position-relative"
        >
          <img
            src="@/assets/img/icon-logo.svg"
            alt="logo metávila"
            class="img-fluid logo-sidebar w-75"
          />
          <feather class="color-text icon-home" type="home"></feather>
        </div>
      </div>
      <div class="col-12 col-md-11 vh-100 position-relative m-0 p-0">
                  <img
            src="@/assets/img/icon-logo.svg"
            alt="logo metávila"
            class="img-fluid logo-sidebar w-10 p-2 d-flex d-md-none mx-auto"
          />
        <router-view />
        <div class="stepper-footer d-flex justify-content-end align-items-center pr-md-4 px-4">
          <router-link to="/" tag="button" class="btn btn-secondary px-5">Voltar</router-link>
          <router-link to="/steps/final" tag="button" class="btn btn-primary px-5">Próximo</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
};
</script>

<style lang="scss">
.stepper-footer {
  background: var(--tertiary);
  width: 92vw;
  height: 5rem;
  position: fixed;
  bottom: 0;
  box-shadow: 4px -2rem 2rem rgba(0,0,0,0.2);
}
@media screen and(max-width: 900px){
  .stepper-footer{
    width: 100vw;
    position: relative;
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