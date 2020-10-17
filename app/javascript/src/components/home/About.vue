
<template>
    <v-app>
        <v-content>
            <div class="text-center">
                <v-pagination v-model="page" :length="6"></v-pagination>
            </div>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            page: 1,
        };
    },
};
</script>