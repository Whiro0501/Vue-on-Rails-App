<template>
    <v-app>
        <v-container>
            <v-card width="400px" class="mx-auto mt-5">
                <v-card-title>
                    <h1 class="display-1">ログイン</h1>
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <v-text-field
                            v-model="user.email"
                            prepend-icon="mdi-email"
                            label="メールアドレス"
                        />
                        <p>{{ user.email}}</p>
                        <v-text-field
                            v-model="user.password"
                            prepend-icon="mdi-lock"
                            append-icon="mdi-eye-off"
                            label="パスワード"
                        />
                         <p>{{ user.password}}</p>
                        <v-card-actions>
                            <v-btn
                                color="light-green darken-1"
                                class="white--text"
                                @click="loginUser"
                            >
                                ログイン
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </v-app>

</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
          user:{
            email: "",
            password: ""
            }
        };
    },
    methods: {
        loginUser() {
            axios.post("/api/v1/auth/sign_in", this.user).then(
                (response) => {
                    // レスポンスで返ってきた、認証に必要な情報をlocalStorageに保存
                    localStorage.setItem(
                        "access-token",
                        response.headers["access-token"]
                    );
                    // localStorage.setItem("expiry", response.headers.expiry);
                    localStorage.setItem("client", response.headers.client);
                    localStorage.setItem("uid", response.headers.uid);
                    localStorage.setItem(
                        "token-type",
                        response.headers["token-type"]
                    );
                    this.$router.push({ path: "/" });
                    return response;
                },
                (error) => {
                    return error;
                }
            );
        },
    },
};
</script>