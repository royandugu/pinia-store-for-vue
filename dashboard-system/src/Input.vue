<script setup>
    import { useUserInformationStore } from "@/pinia/store";

    const store = useUserInformationStore();

    const handleNameChange=(event)=>{
        store.userName = event.target.value;
    }
    const handleRollNumberChange=(event)=>{
        store.rollNumber = event.target.value;
    }
    const handleMarksChange=(event)=>{
        store.marks=event.target.value;
    }
</script>
<template>
    <input type="text" placeholder="User name" @change="handleNameChange"/>
    <input type="text" placeholder="Roll number" @change="handleRollNumberChange"/>
    <input type="text" placeholder="Marks" @change="handleMarksChange"/>
    <a href="/"> Go home </a>
</template>