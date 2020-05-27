<template>
    <v-container fluid tag="section">
        <v-row class="text-center">
            <base-subheading
                subheading="XS Grid"
                text="Always Horizontal"
                class="pb-0 pl-3 mt-5"
            />

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
                                <v-col cols="12" md="6">
                                    <paragraph-heading>Some Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <paragraph-heading>Another Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <paragraph-heading>Some Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <paragraph-heading>Another Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <paragraph-heading>Another Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <paragraph-heading>Some Title Here</paragraph-heading>

                                    <v-card-text class="font-weight-light">
                                        One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.
                                    </v-card-text>
                                </v-col>

                                <v-col cols="12" md="8">
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
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
