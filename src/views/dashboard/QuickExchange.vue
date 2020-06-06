<template>
    <v-col cols="12" sm="6">
        <base-material-card color="warning">
            <template v-slot:heading>
                <div class="display-2 font-weight-light">
                    Need a Quick Exchange?
                </div>

                <div class="subtitle-1 font-weight-light">
                    Bitcoin privacy is just moments away...
                </div>
            </template>

            <v-card-text>
                <p>
                    Quickly exchange your coin(s) with other peers, waiting in one of the community privacy pools.
                </p>
                <v-row>
                    <v-col cols="12" sm="6" class="text-center">
                        <v-dialog v-model="shuffleWin" width="500">
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    color="red lighten-2"
                                    dark
                                    v-on="on"
                                >
                                    Quick Shuffle
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title
                                >
                                    Quick Shuffle
                                </v-card-title>

                                <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="shuffleWin = false"
                                    >
                                        I accept
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <div class="mt-2">
                            <small color="danger">current est. &lt;1 min</small>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="6" class="text-center">
                        <v-dialog v-model="fusionWin" width="500">
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    color="red lighten-2"
                                    dark
                                    v-on="on"
                                >
                                    Quick Fusion
                                </v-btn>
                            </template>

                            <v-card>
                                <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title
                                >
                                    Quick Fusion
                                </v-card-title>

                                <v-card-text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="fusionWin = false"
                                    >
                                        I accept
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <div class="mt-2">
                            <small class="text-danger">current est. ~15 mins</small>
                        </div>
                    </v-col>

                </v-row>
            </v-card-text>
        </base-material-card>
    </v-col>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        //
    },
    data() {
        return {
            fusionWin: false,
            shuffleWin: false,
        }
    },
    computed: {
        ...mapGetters('purse', [
            // 'getActiveSessionId',
            // 'getSessions',
        ]),

    },
    methods: {
        ...mapActions('purse', [
            // 'createSession',
        ]),

    },
    created: function () {
        //
    },
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
