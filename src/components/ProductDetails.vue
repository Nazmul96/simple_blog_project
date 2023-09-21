<script setup>
    import { reactive,onBeforeMount} from 'vue';
    import { useRoute } from 'vue-router';
    import axios from 'axios';

    const productDetails = reactive({});
    const route  = useRoute();
    const id     = route.params.id;

    onBeforeMount (() => {
        axios.get(`https://dummyjson.com/products/${id}`) 
        .then(function(response) {
            if(response.data){
                productDetails.id = response.data.id
                productDetails.title = response.data.title
                productDetails.description = response.data.description
                productDetails.thumbnail = response.data.thumbnail
                productDetails.brand = response.data.brand
                productDetails.category = response.data.category
            }
        })
        .catch(function(error) {
            console.error(error);
        });
    });

 

</script>

<template>
  <div class="container">
        <div class="row mt-5  col-md-12">
            <h1>Product Details</h1>
            <div class="card" v-if="productDetails">
                <img :src="productDetails.thumbnail" class="card-img-top" alt="..." height="500">
                <div class="card-body">
                    <h2>Category: {{ productDetails.category }}</h2>
                    <h2>Brand: {{ productDetails.brand }}</h2>
                    <h3>{{ productDetails.title }}</h3>
                    <p>{{ productDetails.description}}</p>
                </div> 
            </div>
        
            
        </div>
  </div>
</template>

<style scoped>
</style>