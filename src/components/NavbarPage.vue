<script setup>
    import { reactive, onMounted,onBeforeUnmount } from 'vue';
    import { RouterLink, useRouter } from 'vue-router'
    import axios from 'axios';
    const blogCategories = reactive({});
    const router = useRouter();
    const url=`https://basic-blog.teamrabbil.com/api/post-categories`;
    onMounted (() => {
        axios.get(url) 
        .then(function(response) {
            if(response.data)Object.assign(blogCategories,response.data)
        })
        .catch(function(error) {
            console.error(error);
        });
    });
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav" style="float: right;">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(blogCaategory,index) in blogCategories" :key="index">
                        <RouterLink class="nav-link active" aria-current="page" :to="`/post/${blogCaategory.id}`">{{blogCaategory.name}}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style scoped>
</style>