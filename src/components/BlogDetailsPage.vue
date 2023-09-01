<script setup>
    import { useRoute } from 'vue-router';
    import { watch, ref, onMounted } from 'vue';
    import axios from 'axios';

    const blogDetails = ref('');
    const route  = useRoute();
    const id     = route.params.id;

    const url = `https://basic-blog.teamrabbil.com/api/post-details/${id}`;

    onMounted (() => {
        axios.get(url) 
        .then(function(response) {   
            if(response.data){
                blogDetails.value = response.data;
                console.log(blogDetails.value.postDetails.img);
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
            <p>{{ blogDetails.value.postDetails.img }}</p>
                <div class="card col-md-12" style="width: 18rem;">
                  
                    <div class="card-body">
                     </div>   
                </div>
        </div>
  </div>
</template>

<style scoped>
</style>