<script setup>
import axios from 'axios';  
import { ref, onMounted } from 'vue';

const student = ref([]);

onMounted(() => {
    axios.get('http://localhost:3000/students')
    .then(resp => student.value = resp.data)
});

const deletestudent = (id) => {
    axios.delete('http://localhost:3000/students/' + id)
    .then(student.value = student.value.filter(studentid => id != student.id))
    if(student.value.length == 0) notstudent = true
};
</script>

<template>
    <div class="container mt-2">
        <div>
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-2">
            <div class="col" v-for="s in student">
                <div class="card text-white bg-dark mb-3" style="width: 18rem;">
                    <div class="card-body">
                        <h4 class="card-title">Tanuló azonosítója: {{ s.id }}</h4>
                        <p class="card-text">Tanuló neve: {{ s.fullname }}</p>
                        <p class="card-text">Tanuló emailcíme: {{ s.email }}</p>
                        <RouterLink class="btn btn-warning fw-bold me-1" :to="`/updateview/${s.id}`">Modosítás</RouterLink>
                        <button @click="deletestudent(s.id)" type="button" class="btn btn-danger fw-bold ms-1"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
</template>
