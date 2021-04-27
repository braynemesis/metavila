<template>
    <div class="home row final d-flex justify-content-start align-items-center p-md-5 p-3 m-0">
      <div class="col-12">
        <p>Resultado: {{calc_meters}}m²</p>
        <h3 class="color-text">Veja alguns resultados que selecionamos para você</h3>
        <hr class="color-text bg-secondary">
      </div>
<div class="row mt-4 w-100">
        <div class="col-md-4 col-xl-3 mb-3" v-for="product in productsResult" :key="product.ref">
        <div class="card border-0 bg-tertiary">
          <div class="card-body color-text d-flex flex-column">
            <img src="@/assets/img/produto.webp" alt="produto foto" class="img-fluid mb-3 d-flex mx-auto w-75">
            <h6>{{product.name}}</h6>
            <small>{{product.min}}m²</small>
            <hr class="bg-secondary w-100" />
            <small class="mb-3">Ref: {{product.ref}}</small>
            <a :href="product.url" target="_blank" class="btn btn-tertiary d-flex align-items-center justify-content-center">Visualizar</a>
          </div>
        </div>
      </div>
</div>
    </div>
</template>

<script>
import produtos from '../../server/products.json'
export default {
  name: "Steps",
  data() {
    return{
      productsResult: [],
      calc_meters: 0
    }
  },
  methods:{
    filterProducts(meters, product_list){
        const list = product_list.filter(e => parseInt(e.min) > meters || parseInt(e?.max) < meters)
       this.productsResult.push(...list)
       this.productsResult.sort(function(a, b){return a.min - b.min})
    }
  },
  created(){
    const { metavila } = produtos
    const {comp, lar } = this.$route.query
    this.calc_meters = comp * lar
    this.filterProducts(this.calc_meters, metavila)
    console.log(this.calc_meters)
  }
}
</script>

<style>

</style>