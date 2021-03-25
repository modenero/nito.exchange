<template>
    <v-container id="user-profile" fluid tag="section">

        <v-row justify="center">
            <v-col cols="12" sm="8">
                <base-material-card>
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Edit Profile
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            Complete your profile
                        </div>
                    </template>

                    <strong class="mb-3 d-inline-block">SIDEBAR FILTERS</strong>

                    <v-item-group v-model="color">
                        <v-item
                            v-for="color in colors"
                            :key="color"
                            :value="color"
                        >
                            <template v-slot="{ active, toggle }">
                                <v-avatar
                                    :class="active && 'v-settings__item--active'"
                                    :color="color"
                                    class="v-settings__item"
                                    size="25"
                                    @click="toggle"
                                />
                            </template>
                        </v-item>
                    </v-item-group>

                    <v-divider class="my-4 secondary" />

                    <v-row align="center" no-gutters>
                        <v-col cols="auto">
                            Dark Mode
                        </v-col>

                        <v-spacer />

                        <v-col cols="auto">
                            <v-switch
                                v-model="$vuetify.theme.dark"
                                class="ma-0 pa-0"
                                color="secondary"
                                hide-details
                            />
                        </v-col>
                    </v-row>

                    <v-divider class="my-4 secondary" />

                    <v-row align="center" no-gutters>
                        <v-col cols="auto">
                            Sidebar Image
                        </v-col>

                        <v-spacer />

                        <v-col cols="auto">
                            <v-switch
                                v-model="showImg"
                                class="ma-0 pa-0"
                                color="secondary"
                                hide-details
                            />
                        </v-col>
                    </v-row>

                    <v-divider class="my-4 secondary" />

                    <strong class="mb-3 d-inline-block">SIDEBAR IMAGE</strong>

                    <v-item-group
                        v-model="image"
                        class="d-flex justify-space-between mb-3"
                    >
                        <v-item
                            v-for="image in images"
                            :key="image"
                            :value="image"
                            class="mx-1"
                        >
                            <template v-slot="{ active, toggle }">
                                <v-sheet
                                    :class="active && 'v-settings__item--active'"
                                    class="d-inline-block v-settings__item"
                                    @click="toggle"
                                >
                                    <v-img
                                        :src="image"
                                        height="100"
                                        width="50"
                                    />
                                </v-sheet>
                            </template>
                        </v-item>
                    </v-item-group>



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

                                    <v-btn color="secondary" class="mr-0 ml-3" @click="resetAllStats">
                                        Reset All Stats
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </base-material-card>
            </v-col>

            <v-col cols="12" sm="4">
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
// Mixins
import Proxyable from 'vuetify/lib/mixins/proxyable'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    mixins: [Proxyable],

    data: () => ({
        color: '#E91E63',
        colors: [
            '#9C27b0',
            '#00CAE3',
            '#4CAF50',
            '#ff9800',
            '#E91E63',
            '#FF5252',
        ],
        image: require('@/assets/sidebar-04.jpg'),
        images: [
            require('@/assets/sidebar-01.jpg'),
            require('@/assets/sidebar-02.jpg'),
            require('@/assets/sidebar-03.jpg'),
            require('@/assets/sidebar-04.jpg'),
        ],
        saveImage: '',
        showImg: true,
    }),

    computed: {
        ...mapState(['barImage']),
    },

    watch: {
        color (val) {
            this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val
        },
        showImg (val) {
            if (!val) {
                this.saveImage = this.barImage
                this.setBarImage('')
            } else if (this.saveImage) {
                this.setBarImage(this.saveImage)
                this.saveImage = ''
            } else {
                this.setBarImage(val)
            }
        },
        image (val) {
            this.setBarImage(val)
        },
    },

    methods: {
        ...mapActions('cloud', [
            'resetStats',
        ]),

        ...mapMutations({
            setBarImage: 'SET_BAR_IMAGE',
        }),

        resetAllStats() {
            this.resetStats()
            alert('All stats have been reset!')
        },
    },
}
</script>

<style lang="sass" scoped>
.v-settings
    .v-item-group > *
        cursor: pointer

    &__item
        border-width: 3px
        border-style: solid
        border-color: transparent !important

        &--active
            border-color: #00cae3 !important

.v-card-profile
    margin-top: 80px
</style>
