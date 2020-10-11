<template>
    <div>
        <p>Home</p>
        <p>{{ store}}</p>

    </div>
</template>


<script>
export default {
    computed: {
        store(){
            return this.$store.state.store
        }
    }
    }
</script>