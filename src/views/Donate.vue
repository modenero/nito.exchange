<template>
    <v-container id="canary" fluid tag="section">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <base-material-card color="primary">
                    <template v-slot:heading>
                        <div class="display-3 font-weight-light">
                            Donate <v-icon size="36">mdi-heart</v-icon> to Cause Cash
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            Your contribution greatly helps to support the continued growth of our FREE services.
                        </div>
                    </template>

                    <p class="notice">
                        <a href="https://explorer.bitcoin.com/bch/address/bitcoincash:qqdvfkqthv4vglvyffu4k2u4xx4yy0neauz9cn40p2" target="_blank">
                        <strong>bitcoincash:qqdvfkqthv4vglvyffu4k2u4xx4yy0neauz9cn40p2</strong></a>
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
        color: rgba(255, 90, 90, 1.0)
    strong
        font-weight: 600

</style>
