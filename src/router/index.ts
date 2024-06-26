import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Account from '@/views/Account/Show.vue'
import EditAccount from '@/views/Account/Edit.vue'
import Register from '@/views/Account/Register.vue'
import Application from '@/views/Applications/Show.vue'
import Applications from '@/views/Applications/Index.vue'
import Comments from '@/views/Applications/Comments/Index.vue'
import DocumentationFile from '@/views/Applications/DocumentationFiles/Show.vue'
import UploadDocumentation from '@/views/Applications/DocumentationFiles/Upload.vue'
import Offers from '@/views/Offers/Index.vue'
import ScholarshipOffer from '@/views/Offers/Scholarship.vue'
import JobOffer from '@/views/Offers/Job.vue'
import ApplyForJob from '@/views/Offers/ApplyForJob.vue'
import ApplyForScholarship from '@/views/Offers/ApplyForScholarship.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/applications',
        name: 'applications',
        component: Applications
    },
    {
        path: '/applications/:id',
        name: 'applications.show',
        component: Application,
        props: true
    },
    {
        path: '/applications/files/:id',
        name: 'applications.files.show',
        component: DocumentationFile,
        props: true
    },
    {
        path: '/applications/:id/files/upload',
        name: 'applications.files.upload',
        component: UploadDocumentation,
        props: true
    },
    {
        path: '/applications/:id/comments',
        name: 'applications.comments',
        component: Comments,
        props: true
    },
    {
        path: '/search',
        name: 'search',
        component: Offers
    },
    {
        path: '/offers/job',
        name: 'offers.job',
        component: Offers
    },
    {
        path: '/offers/scholarship',
        name: 'offers.scholarship',
        component: Offers
    },
    {
        path: '/offers/job/:id',
        name: 'offers.job.show',
        component: JobOffer,
        props: true
    },
    {
        path: '/offers/scholarship/:id',
        name: 'offers.scholarship.show',
        component: ScholarshipOffer,
        props: true
    },
    {
        path: '/offers/job/apply/:id',
        name: 'offers.job.apply',
        component: ApplyForJob,
        props: true
    },
    {
        path: '/offers/scholarship/apply/:id',
        name: 'offers.scholarship.apply',
        component: ApplyForScholarship,
        props: true
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },
    {
        path: '/account/edit',
        name: 'account.edit',
        component: EditAccount
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
    linkActiveClass: 'active'
})

export default router
