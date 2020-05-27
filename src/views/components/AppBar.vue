<template>
    <v-app-bar
        id="app-bar"
        absolute
        app
        color="transparent"
        flat
        height="75"
    >
        <v-btn
            class="mr-3"
            elevation="1"
            fab
            small
            @click="setDrawer(!drawer)"
        >
            <v-icon v-if="value">
                mdi-view-quilt
            </v-icon>

            <v-icon v-else>
                mdi-dots-vertical
            </v-icon>
        </v-btn>

        <v-toolbar-title
            class="hidden-sm-and-down font-weight-light"
            v-text="$route.name"
        />

        <v-icon class="ml-2 mr-5">
            mdi-{{icon}}
        </v-icon>

        <v-spacer />

        <v-text-field
            :label="$t('search')"
            color="secondary"
            hide-details
            style="max-width: 300px;"
        >
            <template
                v-if="$vuetify.breakpoint.mdAndUp"
                v-slot:append-outer
            >
                <v-btn class="mt-n2" elevation="1" fab small>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </template>
        </v-text-field>

        <div class="mx-3" />

        <!-- <v-btn class="ml-2" min-width="0" text to="/">
            <v-icon>mdi-view-dashboard</v-icon>
        </v-btn> -->

        <v-menu
            bottom
            left
            offset-y
            origin="top right"
            transition="scale-transition"
        >
            <template v-slot:activator="{ attrs, on }">
                <v-btn
                    class="ml-2"
                    min-width="0"
                    text
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-badge color="red" overlap bordered>
                        <template v-slot:badge>
                            <span>{{numNotif}}</span>
                        </template>

                        <v-icon>mdi-bell</v-icon>
                    </v-badge>
                </v-btn>
            </template>

            <v-list :tile="false" nav>
                <div>
                    <app-bar-item v-for="(n, i) in notifications" :key="`item-${i}`">
                        <v-list-item-title v-text="n" />
                    </app-bar-item>
                </div>
            </v-list>
        </v-menu>

        <v-btn class="ml-2" min-width="0" text to="/help">
            <v-icon>mdi-help-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
// Components
import { VHover, VListItem } from 'vuetify/lib'

// Utilities
import { mapState, mapMutations } from 'vuex'

export default {
    components: {
        AppBarItem: {
            render (h) {
                return h(VHover, {
                    scopedSlots: {
                        default: ({ hover }) => {
                            return h(VListItem, {
                                attrs: this.$attrs,
                                class: {
                                    'black--text': !hover,
                                    'white--text secondary elevation-12': hover,
                                },
                                props: {
                                    activeClass: '',
                                    dark: hover,
                                    link: true,
                                    ...this.$attrs,
                                },
                            }, this.$slots.default)
                        },
                    },
                })
            },
        },
    },

    props: {
        value: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        notifications: [
            `CashShuffle completed 5 mins ago`,
            `1,337 bits deposited 26 mins ago`,
            `Another Notification`,
        ],
    }),

    computed: {
        ...mapState(['drawer']),

        numNotif() {
            return this.notifications.length
        },

        icon() {
            switch(this.$route.path) {
            case '/':
                return 'view-dashboard'
            case '/about':
                // return 'file-document'
                return 'domain'
            case '/canary':
                return 'gavel'
            case '/cashfusion':
                return 'electron-framework'
            case '/cashshuffle':
                return 'recycle-variant'
            case '/donate':
                return 'charity'
            case '/faq':
                return 'frequently-asked-questions'
            case '/help':
                return 'lifebuoy'
            case '/history':
                return 'format-list-text'
            case '/send':
                return 'send-outline'
            case '/sessions':
                return 'pulse'
            case '/settings':
                return 'tune'
            default:
                return 'help'
            }
        },
    },

    methods: {
        ...mapMutations({
            setDrawer: 'SET_DRAWER',
        }),
    },
}
</script>
