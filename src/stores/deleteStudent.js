import { defineStore } from "pinia";
export const useStudentList = defineStore('student', {
    state: () => ({
        lastId : null,
        fullName : null,
        email: null

    }),
    actions: {
        setLastId(id){this.lastId = id},
        setfullName(fullName){this.fullName = fullName},
        setemail(email){this.email = email},
    }

});