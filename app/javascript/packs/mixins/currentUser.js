import axios from 'axios'

export const currentUser = {
    data() {
        return {
            currentUser: {
                id: -1,
                password: "",
                email: "",
            },
        };
    },
    created() {
        this.setCurrentUser()
    },
    watch: {
        $route: "setCurrentUser"
    },
    methods: {
        setCurrentUser() {
            axios
                .get(`/api/v1/users/index`, {
                    headers: {
                        'access-token': localStorage.getItem('access-token'),
                        'uid': localStorage.getItem('uid'),
                        'client': localStorage.getItem('client'),
                    },
                })
                .then((response) => {
                    if (response.data !== null) {
                        this.currentUser = response.data;
                    } else {
                        this.currentUser.id = -1
                    }
                });
        }
    }
};