import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
// Bootstrap 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";
// Skeleter Loader
import { Skeletor } from "vue-skeletor";


const mixins = {
    methods: {
        async success(msg) {
            await Swal.fire({
                position: "top-end",
                icon: "success",
                title: msg,
                toast: true,
                showConfirmButton: false,
                timer: 1500,
            });
        },
        async failed(msg) {
            await Swal.fire({
                position: "top-end",
                icon: "error",
                title: msg,
                toast: true,
                showConfirmButton: false,
                timer: 1500,
            });
        },

    },
};

createApp(App).use(store).use(VueSweetalert2).component(Skeletor.name, Skeletor).mixin(mixins).use(router).mount("#app");