<template>
  <div
    class="home row dimensions d-flex justify-content-start align-items-center p-3 m-0"
  >
    <div class="col-md-12">
      <h3 class="color-text">Dimensões do ambiente onde o produto será instalado</h3>
                 <feather class="color-primary d-md-none d-block" type="alert-triangle"></feather>
      <p class="color-text d-flex flex-row align-items-center">
           <feather class="color-primary d-none d-md-block" type="alert-triangle"></feather>
           <span class="pl-2">Utilizaremos estes valores para calcular o tamanho do ambiente em m³ e sugerir os melhores equipamentos.</span>
      </p>
      <div class="row">
        <div class="col-md-4">
          <div class="card content-input mt-5">
            <div
              class="card-body d-flex justify-content-center flex-column align-items-center"
            >
              <h5 class="pb-2">Comprimento (m)</h5>
              <input
                type="number"
                name="comprimento"
                id="comp"
                v-model="comprimento"
                min="0"
              />
              <img src="@/assets/img/comprimento.svg" alt="comprimento" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card content-input mt-5">
            <div
              class="card-body d-flex justify-content-center flex-column align-items-center"
            >
              <h5 class="pb-2">Largura (m)</h5>
              <input
                type="number"
                name="comprimento"
                id="lar"
                v-model="largura"
                min="0"
              />
              <img src="@/assets/img/largura.svg" alt="largura" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card content-input mt-5">
            <div
              class="card-body d-flex justify-content-center flex-column align-items-center"
            >
              <h5 class="pb-2">Altura (m)</h5>
              <input type="number" name="comprimento" id="alt" v-model="altura" min="0" />
              <img src="@/assets/img/altura.svg" alt="altura" />
            </div>
          </div>
        </div>
      </div>
          <div class="row" style="height: 100px">

    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dimensions",
  data() {
    return {
      largura: "",
      altura: "",
      comprimento: "",
    };
  },
  watch: {
    largura: function () {
      sessionStorage.largura = this.largura;
    },
    altura: function () {
      sessionStorage.altura = this.altura;
    },
    comprimento: function () {
      sessionStorage.comprimento = this.comprimento;
    },
  },
  created(){
    sessionStorage.clear()
    sessionStorage.largura = ''
    sessionStorage.altura = ''
    sessionStorage.comprimento = ''
  }
};
</script>

<style lang="scss" scoped>
.dimensions {
  height: 100vh;
}
@media screen and(max-width: 900px) {
  .dimensions {
    height: auto;
  }
}
.content-input {
  background: var(--tertiary);
  min-height: 15rem;
  color: white;
  img {
    max-width: 1.5rem;
    padding-top: 1.3rem;
  }
  input {
    transition: all 0.2s ease-in-out;
    height: 2.5rem;
    width: 75%;
    background: #f1f1f1;
    border: 0;
    border-radius: 0.3rem;
    color: var(--tertiary) ;
    font-weight: 500;
    text-align: center;
  }
}
@media screen and(max-width: 900px) {
  .content-input {
    min-height: 5rem;
  }
}
</style>