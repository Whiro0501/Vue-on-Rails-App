<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer" clipped>
            <v-container>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            <router-link to="/sale">sale</router-link>
                            Navigation lists
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
            </v-container>
        </v-navigation-drawer>
        <v-app-bar color="primary" app dark>
            <v-toolbar-title>Vuetify</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text>For Enterprise</v-btn>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" text to="/sale"
                            >Support<v-icon>mdi-menu-down</v-icon></v-btn
                        >
                    </template>
                    <v-divider></v-divider>
                    <v-list nav dense>
                        <v-list-group
                            v-for="nav_list in nav_lists"
                            :key="nav_list.name"
                            :prepend-icon="nav_list.icon"
                            no-action
                            :append-icon="nav_list.lists ? undefined : ''"
                        >
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>{{
                                        nav_list.name
                                    }}</v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item
                                v-for="list in nav_list.lists"
                                :key="list"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>{{
                                        list
                                    }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-group>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-app-bar>
        <v-main>
  <router-view />
</v-main>
        <v-footer color="primary" dark app> Vuetify </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            supports: [
                { name: "Consulting and suppourt", icon: "mdi-vuetify" },
                { name: "Discord community", icon: "mdi-discord" },
                { name: "Report a bug", icon: "mdi-bug" },
                { name: "Github issue board", icon: "mdi-github" },
                { name: "Stack overview", icon: "mdi-stack-overflow" },
            ],
            nav_lists: [
                {
                    name: "Getting Started",
                    icon: "mdi-speedometer",
                    lists: ["Quick Start", "Pre-made layouts"],
                },
                {
                    name: "Customization",
                    icon: "mdi-cogs",
                },
                {
                    name: "Styles & animations",
                    icon: "mdi-palette",
                    lists: ["Colors", "Content", "Display"],
                },
                {
                    name: "UI Components",
                    icon: "mdi-view-dashboard",
                    lists: ["API explorer", "Alerts"],
                },
                {
                    name: "Directives",
                    icon: "mdi-function",
                },
                {
                    name: "Preminum themes",
                    icon: "mdi-vuetify",
                },
            ],
            supports: [
                "Consulting and suppourt",
                "Discord community",
                "Report a bug",
                "Github issue board",
                "Stack overview",
            ],
        };
    },
};
</script>