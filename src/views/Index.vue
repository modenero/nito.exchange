<template>
    <v-app>
        <app-bar />
        <app-drawer />
        <app-view />
    </v-app>
</template>

<script>
export default {
    components: {
        AppBar: () => import('@/components/AppBar'),
        AppDrawer: () => import('@/components/AppDrawer'),
        AppView: () => import('@/components/AppView'),
    },

    data: () => ({
        expandOnHover: false,
    }),
}
</script>
