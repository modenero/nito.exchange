<template>
    <v-container fluid tag="section">
        <base-v-component heading="Grid System" link="components/grid" />

        <v-row>
            <v-col class="ml-auto mr-auto" sm="8">
                <base-material-alert
                    color="error"
                    dark
                    dismissible
                    icon="mdi-bell"
                >
                    This is simply a BLANK template offering ALL the necessary components to build a new pageview.
                </base-material-alert>
            </v-col>
        </v-row>

        <v-row class="text-center">
            <base-subheading
                subheading="XS Grid"
                text="Always Horizontal"
                class="pb-0 pl-3 mt-5"
            />

            <v-col
                v-for="n in 3"
                :key="`cols-${n}`"
                cols="4"
                class="pt-0"
            >
                <v-card class="mt-0">
                    <v-card-text class="red--text text--darken-4">
                        col-4
                    </v-card-text>
                </v-card>
            </v-col>

            <base-subheading
                subheading="SM Grid"
                text="Collapsed at 600px"
                class="pb-0 pl-3 mt-5"
            />

            <v-col
                v-for="n in 3"
                :key="`sm-${n}`"
                cols="12"
                sm="4"
                class="pt-0"
            >
                <v-card class="mt-0">
                    <v-card-text class="red--text text--darken-4">
                        col-sm-4
                    </v-card-text>
                </v-card>
            </v-col>

            <v-row class="text-center">
                <base-subheading
                    subheading="Offset Grid"
                    text="Adding some space when neede"
                    class="pb-0 pl-3 mt-5"
                />

                <v-col sm="3" class="pt-0">
                    <v-card class="mt-0">
                        <v-card-text class="red--text text--darken-4">
                            col-md-3
                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>

            <v-row class="text-center">
                <v-col
                    v-for="n in 2"
                    :key="`offset-${n}`"
                    class="ml-auto mr-auto"
                    sm="4"
                >
                    <v-card class="mt-0">
                        <v-card-text class="red--text text--darken-4">
                            col-md-4 ml-auto mr-auto
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="text-center mb-12">
                <v-col class="ml-auto mr-auto" sm="6">
                    <v-card class="mt-0">
                        <v-card-text class="red--text text--darken-4">
                            col-md-6 ml-auto mr-auto
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <paragraph-heading class="text-center pb-0">
                    <h4 class="font-weight-light">
                        Paragraphs
                    </h4>
                </paragraph-heading>

                <v-col cols="12 pt-0">
                    <v-card>
                        <v-container fluid>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <paragraph-heading>Some Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" sm="6">
                                    <paragraph-heading>Another Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" sm="4">
                                    <paragraph-heading>Some Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" sm="4">
                                    <paragraph-heading>Another Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" sm="4">
                                    <paragraph-heading>Another Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" sm="4">
                                    <paragraph-heading>Some Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" sm="8">
                                    <paragraph-heading>Another Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        ParagraphHeading: {
            render (h) {
                return h('div', {
                    class: 'headline font-weight-light col cols-12',
                }, this.$slots.default)
            },
        },
    },
    data() {
        return {
            //
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
