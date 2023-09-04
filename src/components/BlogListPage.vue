<script setup>
  import { useRoute } from 'vue-router';
  import { watch, ref, onMounted } from 'vue';

  const blogList = ref('');
  const route  = useRoute();

  const getBlog = () => {
    fetch(`https://basic-blog.teamrabbil.com/api/post-list/${route.params.id}`)
        .then(response => response.json())
        .then(data => {
            blogList.value = data;
        })
        .catch(error => {
            console.log(error)
        });
    }

  watch(() => route.params.id, () => {
        getBlog()
  }, {immediate: true})

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