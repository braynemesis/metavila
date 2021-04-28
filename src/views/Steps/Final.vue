<template>
  <div
    class="home row final d-flex justify-content-start align-items-center p-md-5 p-3 m-0"
  >
    <div class="col-12">
      <p class="color-text">Potência mínima necessária: {{ kw }}Kw</p>
      <h3 class="color-text">
        Veja alguns resultados que selecionamos para você
      </h3>
      <hr class="color-text bg-secondary" />
    </div>
    <div class="row mt-4 w-100">
      <div
        class="col-md-4 col-xl-3 mb-3"
        v-for="product in productsResult"
        :key="product.ref"
      >
        <div class="card border-0 bg-tertiary">
          <div class="card-body color-text d-flex flex-column">
            <img
              :src="product.image"
              alt="produto foto"
              class="img-fluid mb-3 d-flex mx-auto w-75"
            />
            <h6>{{ product.name }}</h6>
            <div class="d-flex justify-content-between align-items-center">
            <span class="badge badge-primary bg-dark">{{ product.kw }} Kw</span>
            <span class="badge badge-primary bg-dark">Ref: {{ product.ref }}</span>
            </div>
            <hr class="bg-secondary w-100" />
            <a
              :href="product.url"
              target="_blank"
              class="btn btn-tertiary d-flex align-items-center justify-content-center"
              >Visualizar</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <div class="card border-0 shadow-sm bg-tertiary">
          <div class="card-body color-text">
<feather class="color-secondary" type="alert-triangle"></feather>
<h5>Lembrete</h5>
<p>
  <strong>Fator isolamento:</strong> o isolamento do ambiente pode interferir na capacidade de aquecimento de seu produto de dupla combustão. Instalações realizadas próximas a portas janelas ou ambientes que contenham muito vidro, podem diminuir a capacidade de aquecimento.
</p>
<p>
  Outros fatores como a orientação (norte, sul, leste, oeste) solar do ambiente onde o produto estiver instalado e a temperatura externa também são variáveis no potencial calorífico do seu calefator, inserto ou fogão de alto rendimento.
</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import produtos from "../../server/products.json";
import images from "../../server/images.json";
import axios from 'axios'
export default {
  name: "Steps",
  data() {
    return {
      productsResult: [],
      loading: false,
      calc_meters: 0,
      kw: 0,
      list: [],
      images: []
    };
  },
  methods: {
     async getImage(){
       this.loading = true
        try {
              const {ref, image } = await axios.get('https://metavila.com.br/wp-json/wl/v1/posts')
              this.list.push({ref, image})
        } finally{
         this.loading = false
        }
    },
    filterProducts(product_list) {
      const list = product_list.filter((e) => {
        let val = parseInt(e.kw);
        let max = parseFloat(this.kw) + 3;
        return val > this.kw && val < max;
      });
      this.productsResult.push(...list);
      this.productsResult.sort(function(a, b) {
        return a.kw - b.kw;
      });

      this.productsResult.map( i => {
          this.images.forEach( e => {
            if(i.ref === e.ref){
              i['image'] = e.image
            }
          })
      })
    },
  },
  created() {
    const data = {
      alt: sessionStorage.altura,
      lar: sessionStorage.largura,
      comp: sessionStorage.comprimento,
    };
    this.$router.push({ query: data });
    this.images = [...images]
    const { metavila } = produtos;
    const { comp, lar, alt } = this.$route.query;
    this.calc_meters = comp * lar * alt;
    this.kw = (this.calc_meters / 26).toFixed(1);
    this.filterProducts(metavila);
  },
};
</script>

<style></style>
