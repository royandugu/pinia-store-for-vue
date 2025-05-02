<script setup>
    import { useUserInformationStore } from "@/pinia/store";
    const store = useUserInformationStore();
    
    const userName = store.userName;
    const rollNumber = store.rollNumber;
    const marks = store.marks;
</script>
<template>
    <h1> User details are: </h1>
    <p> User name is {{ userName }}</p>
    <p> Roll number is {{ rollNumber }}</p>
    <p> Marks is {{ marks }}</p>
</template>