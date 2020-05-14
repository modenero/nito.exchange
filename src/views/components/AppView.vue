<template>
    <v-content>
        <router-view />
        <app-footer />
    </v-content>
</template>

<script>
export default {
    components: {
        AppFooter: () => import('./AppFooter'),
    },
}
</script>
