<template>
    <v-app>
        <app-bar />
        <app-drawer />
        <app-view />
        <app-settings />
    </v-app>
</template>

<script>
export default {
    components: {
        AppBar: () => import('./components/AppBar'),
        AppDrawer: () => import('./components/AppDrawer'),
        AppSettings: () => import('./components/AppSettings'),
        AppView: () => import('./components/AppView'),
    },

    data: () => ({
        expandOnHover: false,
    }),
}
</script>
