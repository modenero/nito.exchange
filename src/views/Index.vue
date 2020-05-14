<template>
    <v-app>
        <dashboard-app-bar />

        <dashboard-drawer />

        <dashboard-view />

        <dashboard-settings />
    </v-app>
</template>

<script>
export default {
    components: {
        DashboardAppBar: () => import('./dashboard/AppBar'),
        DashboardDrawer: () => import('./dashboard/Drawer'),
        DashboardSettings: () => import('./dashboard/Settings'),
        DashboardView: () => import('./dashboard/View'),
    },

    data: () => ({
        expandOnHover: false,
    }),
}
</script>
