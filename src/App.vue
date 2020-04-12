<template>
    <main>
        <Header />
        <Intro />
        <Highlights />
        <Locations />
        <Benefits />
        <Architecture />
        <Stats />
        <Deployments />
        <Sponsors />
        <Articles />
        <Support />
        <GetStarted />
        <Footer />
    </main>
</template>

<script>
/* Import components. */
import Architecture from '@/components/Architecture.vue'
import Articles from '@/components/Articles.vue'
import Benefits from '@/components/Benefits.vue'
import Deployments from '@/components/Deployments.vue'
import Footer from '@/components/Footer.vue'
import GetStarted from '@/components/GetStarted.vue'
import Header from '@/components/Header.vue'
import Highlights from '@/components/Highlights.vue'
import Intro from '@/components/Intro.vue'
import Locations from '@/components/Locations.vue'
import Sponsors from '@/components/Sponsors.vue'
import Stats from '@/components/Stats.vue'
import Support from '@/components/Support.vue'

export default {
    components: {
        Architecture,
        Articles,
        Benefits,
        Deployments,
        Footer,
        GetStarted,
        Header,
        Highlights,
        Intro,
        Locations,
        Sponsors,
        Stats,
        Support,
    }
}
</script>

<style>
/*  */
</style>
