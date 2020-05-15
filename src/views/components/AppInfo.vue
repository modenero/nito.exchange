<template>
    <div id="settings-wrapper">
        <v-card
            id="settings"
            class="py-2 px-4"
            color="rgba(0, 0, 0, .3)"
            dark
            flat
            link
            min-width="100"
            style="position: fixed; bottom: 120px; right: -35px; border-radius: 8px;"
        >
            <v-icon large>
                mdi-information
                <!-- mdi-information-outline -->
            </v-icon>
        </v-card>

        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            activator="#settings"
            bottom
            content-class="v-settings"
            left
            nudge-left="8"
            offset-x
            origin="bottom right"
            transition="scale-transition"
        >
            <v-card class="text-center mb-0" width="300">
                <v-card-text>

                    <base-material-alert
                        color="info"
                        dark
                    >
                        <p>
                            Nito Exchange is currently in <strong>Alpha</strong> stage.
                            We appreciate your support in getting us to <strong>Beta</strong> stage in the next few weeks.

                            <v-divider class="my-2" />

                            <a href="https://causes.cash/@BCHPlease/nito-exchange-443db3869688" target="_blank">
                                Click here to learn how YOUR support <strong>Causes Cash</strong> for our team
                            </a>
                            <v-icon>mdi-open-in-new</v-icon>
                        </p>
                    </base-material-alert>

                    <v-btn
                        block
                        class="mb-3"
                        color="success"
                        href="https://www.creative-tim.com/product/vuetify-material-dashboard"
                        default
                        rel="noopener"
                        target="_blank"
                    >
                        Free Download
                    </v-btn>

                    <v-btn
                        block
                        class="mb-3"
                        color="grey darken-1"
                        dark
                        href="https://vuetifyjs.com/components/api-explorer"
                        default
                        rel="noopener"
                        target="_blank"
                    >
                        Documentation
                    </v-btn>

                    <div class="my-12" />

                    <div>
                        <strong class="mb-3 d-inline-block">THANK YOU FOR SHARING!</strong>
                    </div>

                    <v-btn
                        class="ma-1"
                        color="#55acee"
                        dark
                        default
                        rounded
                    >
                        <v-icon>mdi-twitter</v-icon>
                        - 45
                    </v-btn>

                    <v-btn
                        class="ma-1"
                        color="#3b5998"
                        dark
                        default
                        rounded
                    >
                        <v-icon>mdi-facebook</v-icon>
                        - 50
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
export default {
    // 
}
</script>

<style lang="sass">
.v-alert--material
    p
        font-weight: 600 !important
        margin: 0
    a
        color: white !important
        text-decoration: none
    a:hover
        text-decoration: underline
    strong
        font-size: 1.1em

</style>
