<template>
    <v-container id="canary" fluid tag="section">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <base-material-card color="primary">
                    <template v-slot:heading>
                        <div class="display-3 font-weight-light">
                            Warrant Canary
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            <strong>The FBI, CIA, NSA, GCHQ, 8200 have <strong>NOT</strong> been here.</strong>

                            <br />Learn more:
                            <a href="https://en.wikipedia.org/wiki/Warrant_canary" target="_blank">
                            <strong>https://en.wikipedia.org/wiki/Warrant_canary</strong></a>
                        </div>
                    </template>

                    <p class="notice">
                        As of <strong>May 26, 2020,</strong> Nito Exchange has received and complied with <strong>0 (zero)</strong> requests for information of any kind by any third parties including but not limited to government agencies.
                        <br /><br />
                        We will renew this notice every day.
                        <br /><br />
                        If this notice fails to be renewed, you should assume the worst.
                    </p>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    //
}
</script>

<style lang="sass">
#canary
    .notice
        padding: 25px
    a
        color: rgba(255, 220, 220, 1.0)
    strong
        font-weight: 600
        strong
            font-weight: 800
            font-size: 1.2em

</style>
