<template>
    <v-app>
        <layout-header></layout-header>
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="8" sm="6" md="4" lg="3">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer color="primary" dark app clipped-left> Vuetify </v-footer>
    </v-app>
</template>

<script>
import LayoutHeader from "../layout/LayoutHeader";
export default {
    components: { LayoutHeader },
    data() {
        return {
            drawer: null,
        };
    },
};
</script>