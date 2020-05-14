<template>
    <v-content>
        <router-view />

        <dashboard-core-footer />
    </v-content>
</template>

<script>
export default {
    components: {
        DashboardCoreFooter: () => import('./Footer'),
    },
}
</script>
