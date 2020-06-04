<template>
    <v-app>
        <router-view />

        <!-- Floating Action Button (FAB) -->
        <!-- <v-speed-dial
            v-model="fab"
            :bottom="true"
            :right="true"
            direction="top"
            transition="'slide-y-reverse-transition'"
        >
            <template v-slot:activator>
                <v-btn v-model="fab" color="blue darken-2" dark fab>
                    <v-icon v-if="fab">mdi-close</v-icon>
                    <v-icon v-else>mdi-account-circle</v-icon>
                </v-btn>
            </template>

            <v-btn fab dark small color="green">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn fab dark small color="indigo">
                <v-icon>mdi-plus</v-icon>
            </v-btn>

            <v-btn fab dark small color="red">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-speed-dial> -->

        <!-- Snackbar -->
        <base-material-snackbar
            v-model = "snackbar"
            :type = "color"
            v-bind = "{
                [parsedDirection[0]]: true,
                [parsedDirection[1]]: true
            }"
        >
            Welcome to <span class="font-weight-bold">&nbsp;NITO EXCHANGE&nbsp;</span> — a beautiful admin panel for every web developer.
        </base-material-snackbar>

        <!-- Dialog Box -->
        <v-dialog v-model="dialog" max-width="500">
            <v-card class="text-center">
                <v-card-title>
                    Welcome

                    <v-spacer />

                    <v-icon aria-label="Close" @click="dialog = false">
                        mdi-close
                    </v-icon>
                </v-card-title>

                <v-card-text>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </v-card-text>

                <!-- <v-card-actions>
                    <v-spacer />

                    <v-btn color="error" text @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions> -->

                <v-btn
                    class="my-6"
                    color="info"
                    depressed
                    default
                    rounded
                    @click="dialog = false"
                >
                    Okay
                </v-btn>

            </v-card>
        </v-dialog>

        <!-- Alert Box -->
        <v-dialog
            v-model="alert"
            max-width="300"
        >
            <v-card>
                <v-card-title>
                    Would you like to play a game?

                    <v-spacer />

                    <v-icon
                        aria-label="Close"
                        @click="alert = false"
                    >
                        mdi-close
                    </v-icon>
                </v-card-title>

                <v-card-text class="pb-6 pt-12 text-center">
                    <v-btn class="mr-3" text @click="alert = false">
                        Not now
                    </v-btn>

                    <v-btn color="success" text @click="alert = false">
                        Sure!
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>

    </v-app>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            bitbox: null,

            color: 'info',
            direction: 'top right',
            alert: false,
            dialog: false,
            snackbar: false,
            fab: false,
        }
    },
    computed: {
        ...mapGetters('cloud', [
            'getStats',
        ]),

        parsedDirection () {
            return this.direction.split(' ')
        },
    },
    methods: {
        ...mapActions('cloud', [
            'updateStats',
        ]),

        /**
         * Initialize BITBOX
         */
        initBitbox() {
            console.info('Initializing BITBOX..')

            try {
                /* Initialize BITBOX. */
                // this.bitbox = new BITBOX()
                this.bitbox = new window.BITBOX()
            } catch (err) {
                console.error(err)
            }
        },

    },
    created: function () {
        console.info('Initialize Nito Exchange...')

        /* Initialize BITBOX. */
        this.initBitbox()

        // FOR DEVELOPMENT PURPOSES
        this.updateStats()

    },
}
</script>

<style lang="sass" scoped>
base-material-alert
    p
        font-weight: 600
        margin: 0
    strong
        font-size: 1.1em

// .v-speed-dial
//     position: absolute
//
// .v-btn--floating
//     position: relative
</style>
