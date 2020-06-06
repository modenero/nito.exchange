<template>
    <v-container fluid tag="section">
        <v-row class="text-center">
            <v-row>
                <Intro />
                <GettingStarted />
                <UseCases />
                <BestPractices />
                <Security />
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
/* Import components. */
import BestPractices from './guide/BestPractices'
import GettingStarted from './guide/GettingStarted'
import Intro from './guide/Intro'
import Security from './guide/Security'
import UseCases from './guide/UseCases'

export default {
    components: {
        BestPractices,
        GettingStarted,
        Intro,
        Security,
        UseCases,
    },
    data: () => {
        return {
            //
        }
    },
}
</script>

<style lang="sass" scoped>
p
    strong
        font-weight: 600

hr
    width: 80%
    height: 1px
    margin: 10px auto
    color: rgba(120, 120, 120, 0.2)
</style>
