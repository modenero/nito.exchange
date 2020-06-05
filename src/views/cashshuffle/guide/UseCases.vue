<template>
    <main>
        <paragraph-heading class="pb-0">
            <h4 class="font-weight-light">
                Practical Use Cases
            </h4>
        </paragraph-heading>

        <v-col cols="12 pt-0">
            <v-card>
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" sm="4">
                            <paragraph-heading>
                                Prevent Censorship
                            </paragraph-heading>

                            <v-card-text class="font-weight-light text-left">
                                <p>
                                    In the event that you receive coins from a source deemed unlawful by the authorities, you could find your coins seized by a merchant or exchange.
                                </p>

                                <p>
                                    CashShuffle make your coins fungible, but mixing them with other coins on the blockchain, thereby removing any direct linkage to past history.
                                </p>
                            </v-card-text>
                        </v-col>

                        <v-col cols="12" sm="4">
                            <paragraph-heading>
                                Dark Markets
                            </paragraph-heading>

                            <v-card-text class="font-weight-light">
                                While we only encourage the "legal" use of anonymity services; the definition of "legal" is often subjective, and so we trust you will do what's right for you.
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
                            <paragraph-heading>Fungibility</paragraph-heading>

                            <v-card-text class="font-weight-light text-left">
                                As well as making it far harder to identify parties to a transaction, shuffling also adds back fungibility — coins cannot be marked as “tainted” and/or blacklisted from certain services. This might include an exchange refusing to touch coins that have been involved in past gambling, theft, or drug transactions, regardless of whether the account holder made those transactions or not.
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </main>
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
