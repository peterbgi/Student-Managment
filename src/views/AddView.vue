<script setup>
import axios from 'axios';  
import { reactive} from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter();

const addStudent = () => {
    axios.post('http://localhost:3000/students', newStudentData)
    .then(() => {
        router.push("/")
    })
};

const newStudentData = reactive({
    fullname: '',
    email: ''
});

const emailvalidation = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};


</script>




<template>
    <form class="w-75 mt-3 mx-auto" @submit.prevent="addStudent">
        <div class="mb-3">
            <label for="fullname" class="form-label">Tanuló neve</label>
            <input type="text" class="form-control" v-model="newStudentData.fullname" placeholder="PL: Példa Bence" id="fullname">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">E_mail cím</label>
            <input type="email" class="form-control" v-model="newStudentData.email" placeholder="PL: abc@abc.com" id="email">
            <p v-if="newStudentData.email && !emailvalidation(newStudentData.email)">Kérlek érvényes e-mail címet adj meg!</p>
        </div>
        
        <button type="submit" class="btn btn-danger">Hozzáad</button>
    </form>
</template>
