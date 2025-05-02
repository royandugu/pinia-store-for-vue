import { defineStore } from "pinia";

export const useUserInformationStore = defineStore('user-info',{
    state:()=>{
        return{
            userName:'',
            rollNumber:'',
            marks:0
        }
    },
    actions:{
        assignUsername(value){
            this.userName=value;
        },
        assignRollNumber(value){
            this.rollNumber=value;
        },
        assignMarks(value){
            this.marks=value;
        }
    }
})