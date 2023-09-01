<script setup>
  import { useRoute } from 'vue-router';
  import { watch, ref, onMounted } from 'vue';
  import axios from 'axios';

  const blogList = ref('');
  const route  = useRoute();
  const id     = ref('');
  id.value     = route.params.id;
 
//   watch(() => route.params.id, (newId, oldId) => {
//         id.value = newId;
//   });

  const url = `https://basic-blog.teamrabbil.com/api/post-list/${id.value}`
     
  onMounted (() => {
        axios.get(url) 
        .then(function(response) {   
            if(response.data){
                blogList.value = response.data;
                console.log(blogList.value);
            }
        })
        .catch(function(error) {
            console.error(error);
        });
  });


</script>

<template>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
                <div class="card col-md-4 g-4 m-3" style="width: 18rem;" v-for="(blog,index) in blogList" :key="index">
                    <img :src="blog.img" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">{{blog.title}}</h3>
                        <p class="card-text">{{blog.short}}</p>
                        <RouterLink :to="`/blog-details/${blog.id}`" class="btn btn-primary">Details</RouterLink>
                    </div>
                </div>
            </div>    
        </div>
</template>

<style scoped>
</style>