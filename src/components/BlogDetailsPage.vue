<script setup>
    import { useRoute } from 'vue-router';
    import { watch, ref, onMounted, onBeforeMount } from 'vue';
    import axios from 'axios';

    const blogDetails = ref('');
    const route  = useRoute();
    const id     = route.params.id;



    fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
    .then(response => response.json())
    .then(data => blogDetails.value = data)
    .catch(error => {
        console.log(error)
    });
   

</script>

<template>
  <div class="container">
        <div class="row mt-5  col-md-12">
            <div class="card">
                <img :src="blogDetails.postDetails.img" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3>{{ blogDetails.postDetails.title }}</h3>
                    <p>{{ blogDetails.postDetails.content}}</p>
                </div> 
            </div>
        </div>
  </div>
</template>

<style scoped>
</style>