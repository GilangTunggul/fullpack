// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);

const routes = [
    {
        path: '/register',
        name: 'register',
        meta: {
            public: true,
        },  
        component: () => import('@/views/Register.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            public:  true,
        },
        component: () => import('@/views/Login.vue'), 
        children: []
    }, 
    {
        path:'/',
        name:'navigation',
        component: () => import('@/views/Master/Navigation.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home.vue'),
            },
            {
                path: '/myticket',
                name: 'MyTicket',
                component: () => import('@/views/Ticket/MyTicket.vue'),
            },
            {
                path: '/allticket',
                name: 'AllTicket',
                component: () => import('@/views/Ticket/Allticket.vue'),
            },
            {
                path: '/newticket',
                name: 'NewTicket',
                component: () => import('@/views/Ticket/Newticket.vue'),
            },
            {
                path: '/profile',
                name: 'Profile',
                component: () => import('@/views/Profile.vue'),
            },
            {
                path: '/settings',
                name: 'Settings',
                component: () => import('@/views/Settings.vue'),
            },
            {
                path: '/article',
                name: 'Article',
                component: () => import('@/views/Article.vue'),
            },
            {
                path: '/maps',
                name: 'Maps',
                component: () => import('@/views/Maps.vue'),
            },
        ]
    },
    {
        path: '/admin',
        name: 'Admin',
        meta: {
            public: true,
        },  
        component: () => import('@/views/Admin/Admin.vue'),
    },
    {
        path:'/',
        name:'navigationadmin',
        component: () => import('@/views/Master/NavigationAdmin.vue'),
        redirect: '/adminhome',
        children: [
            {
                path: '/adminhome',
                name: 'AdminHome',
                meta: {
                    public: true,
                },  
                component: () => import('@/views/Admin/AdminHome.vue'),
            },
            {
                path: '/calendar',
                name: 'Calendar',
                meta: {
                    public: true,
                },  
                component: () => import('@/views/Admin/Calendar.vue'),
            },
            {
                path: '/reminders',
                name: 'Reminders',
                meta: {
                    public: true,
                },  
                component: () => import('@/views/Admin/Reminders.vue'),
            },
            {
                path: '/tableadmin',
                name: 'TableAdmin',
                meta: {
                    public: true,
                },  
                component: () => import('@/views/Admin/TableAdmin.vue'),
            },
            {
                path: '/tableadminview',
                name: 'TableAdminView',
                meta: {
                    public: true,
                },  
                component: () => import('@/views/Admin/TableAdminView.vue'),
            },
            {
                path: '/notification',
                name: 'Notification',
                meta: {
                    public: true,
                },  
                component: () => import('@/views/Admin/Notification.vue'),
            },
                                    {
                path: '/setting',
                name: 'Setting',
                meta: {
                    public: true,
                },  
                component: () => import('@/views/Admin/Setting.vue'),
            },
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue'),
    }
];
export default routes;
//navigate vuejs