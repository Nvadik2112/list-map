import { createRouter, createWebHistory } from 'vue-router'
import Person from "@/components/Person";
import Index from "@/components/Index";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'index', path: '/', component: Index },
        { name: 'person', path: '/person/:id', component: Person }
    ],
})