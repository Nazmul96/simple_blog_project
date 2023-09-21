<script setup>
    import { ref,onBeforeMount} from 'vue';
    import { RouterLink, useRouter } from 'vue-router'
    import axios from 'axios';
    const products = ref([]);
    const router = useRouter();
    const url=`https://dummyjson.com/products?limit=15`;
    onBeforeMount (() => {
        axios.get(url) 
        .then(function(response) {
            if(response.data.products)products.value=response.data.products
        })
        .catch(function(error) {
            console.error(error);
        });
    });

</script>

<template>
    <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
                <div class="card col-md-4 g-4 m-3" style="width: 18rem;" v-for="(product,index) in products" :key="index">
                    <img :src="product.thumbnail" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">{{product.title}}</h3>
                        <RouterLink :to="`/product-details/${product.id}`" class="btn btn-primary">Details</RouterLink>
                    </div>
                </div>
            </div>    
    </div>
</template>

<style scoped>
</style>