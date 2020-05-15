<template>
    <v-app>
        <app-bar />
        <app-drawer />
        <app-info />
        <app-view />
    </v-app>
</template>

<script>
export default {
    components: {
        AppBar: () => import('./components/AppBar'),
        AppDrawer: () => import('./components/AppDrawer'),
        AppInfo: () => import('./components/AppInfo'),
        AppView: () => import('./components/AppView'),
    },

    data: () => ({
        expandOnHover: false,
    }),
}
</script>
