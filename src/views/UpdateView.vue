<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const rout = useRoute();

const updateStudent = reactive({
    fullname: '',
    email: ''
});

onMounted(() => {
    axios.get(`http://localhost:3000/students/${rout.params.id}`)
    .then((resp) => {
        updateStudent.fullname = resp.data.fullname;
        updateStudent.email = resp.data.email;
    });
});


const update = () => {
    axios.put(`http://localhost:3000/students/${rout.params.id}`, updateStudent)
    .then(() => {
        router.push("/")
    });
};
</script>


<template>
       <form class="w-75 mt-3 mx-auto" @submit.prevent="update">
        <div class="mb-3">
            <label for="fullname" class="form-label">Tanuló neve</label>
            <input type="text" class="form-control" v-model="updateStudent.fullname" id="fullname">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">E_mail cím</label>
            <input type="email" class="form-control" v-model="updateStudent.email" id="email">
        </div>
        
        <button type="submit" class="btn btn-danger">Modosítás</button>
    </form>
</template>