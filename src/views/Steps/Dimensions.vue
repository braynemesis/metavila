<template>
  <div
    class="home row dimensions d-flex justify-content-start align-items-center p-5 m-0"
  >
    <div class="col-md-12">
      <h3 class="color-text">Dimensões da sala (m²)</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="card content-input mt-5">
            <div
              class="card-body d-flex justify-content-center flex-column align-items-center"
            >
              <h5 class="pb-2">Comprimento</h5>
              <input type="text" name="comprimento" id="comp" v-model="dimensions.comprimento" />
              <img src="@/assets/img/comprimento.svg" alt="comprimento" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card content-input mt-5">
            <div
              class="card-body d-flex justify-content-center flex-column align-items-center"
            >
              <h5 class="pb-2">Largura</h5>
              <input type="text" name="comprimento" id="lar" v-model="dimensions.largura" />
              <img src="@/assets/img/largura.svg" alt="largura" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card content-input mt-5">
            <div
              class="card-body d-flex justify-content-center flex-column align-items-center"
            >
              <h5 class="pb-2">Altura</h5>
              <input type="text" name="comprimento" id="alt" v-model="dimensions.comprimento" />
              <img src="@/assets/img/altura.svg" alt="altura" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dimensions",
  data(){
    return{
      dimensions: {
        largura: '',
        altura: '',
        comprimento: ''
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dimensions{
  height: 100vh;
}
@media screen and(max-width: 900px){
  .dimensions{
    height: auto;
  }
}
.content-input {
  background: var(--tertiary);
  min-height: 15rem;
  color: white;
  img{
    max-width: 1.5rem;
    padding-top: 1.3rem
  }
  input {
    transition: all .2s ease-in-out;
    height: 2.5rem;
    width: 75%;
    background: var(--body-bg);
    border: 0;
    border-radius: 0.3rem;
    color: white;
    font-weight: 500;
    text-align: center;
  }
}
@media screen and(max-width: 900px){
  .content-input{
     min-height: 5rem;
  }
}
</style>