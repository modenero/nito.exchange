<template>
    <v-container id="user-profile" fluid tag="section">

        <v-btn-toggle>
            <v-btn :color="tab.current" @click="toggle('current')">Current</v-btn>
            <v-btn :color="tab.manage" @click="toggle('manage')">Directory</v-btn>
            <v-btn :color="tab.monitor" @click="toggle('monitor')">Monitor</v-btn>
        </v-btn-toggle>

        <v-row justify="center">
            <v-col cols="12" sm="7">

                <v-row v-if="tab.current">
                    <CurrentView />
                </v-row>

                <v-row v-if="tab.manage">

                    <base-material-card>
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">
                                Edit Profile
                            </div>

                            <div class="subtitle-1 font-weight-light">
                                Complete your profile
                            </div>
                        </template>

                        <v-form>
                            <v-container class="py-0">
                                <v-row>
                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            label="Company (disabled)"
                                            disabled
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            class="purple-input"
                                            label="User Name"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            label="Email Address"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            label="First Name"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            label="Last Name"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12">
                                        <v-text-field
                                            label="Adress"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            label="City"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            label="Country"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            class="purple-input"
                                            label="Postal Code"
                                            type="number"
                                        />
                                    </v-col>

                                    <v-col cols="12">
                                        <v-textarea
                                            class="purple-input"
                                            label="About Me"
                                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        />
                                    </v-col>

                                    <v-col cols="12" class="text-right">
                                        <v-btn color="success" class="mr-0">
                                            Update Profile
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </base-material-card>

                </v-row>

                <v-row v-if="tab.monitor">
                    <MonitorView />
                </v-row>
            </v-col>

            <v-col cols="12" sm="5">
                <base-material-card
                    class="v-card-profile"
                    avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                >
                    <v-card-text class="text-center">
                        <h6 class="display-1 mb-1 grey--text">
                            CEO / CO-FOUNDER
                        </h6>

                        <h4 class="display-2 font-weight-light mb-3 black--text">
                            Alec Thompson
                        </h4>

                        <p class="font-weight-light grey--text">
                            Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                        </p>

                        <v-btn color="success" rounded class="mr-0">
                            Follow
                        </v-btn>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* Import components. */
import CurrentView from './sessions/Current'
import MonitorView from './sessions/Monitor'
// import StatsView from './sessions/Stats'

export default {
    components: {
        CurrentView,
        MonitorView,
        // StatsView,
    },
    data: () => {
        return {
            tab: {
                current: '',
                manage: 'secondary',
                monitor: '',
            },
        }
    },
    methods: {
        /**
         * Toggle Tab
         */
        toggle(_tab) {
            /* Reset tabs. */
            this.tab = {
                current: '',
                manage: '',
                monitor: '',
            }

            /* Set active tab. */
            this.tab[_tab] = 'secondary'
        },
    },
}
</script>
