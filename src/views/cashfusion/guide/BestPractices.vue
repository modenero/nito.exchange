<template>
    <main>
        <paragraph-heading class="pb-0">
            <h4 class="font-weight-light">
                Best Practices
            </h4>
        </paragraph-heading>

        <v-col cols="12 pt-0">
            <v-card>
                <v-container fluid>
                    <v-row>

                        <v-col cols="12" sm="6">
                            <paragraph-heading>
                                DO NOT Spend Multiple Coins
                            </paragraph-heading>

                            <v-card-text class="font-weight-light">
                                <p>
                                    In the event that you receive coins from a source deemed unlawful by the authorities, you could find your coins seized by a merchant or exchange.
                                </p>

                                <p>
                                    CashShuffle make your coins fungible, but mixing them with other coins on the blockchain, thereby removing any direct linkage to past history.
                                </p>
                            </v-card-text>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <paragraph-heading>
                                Handling Toxic Waste
                            </paragraph-heading>

                            <v-card-text class="font-weight-light">
                                At the end of a shuffle cycle, you will eventually end up coins that are too small to be shuffled.
                                In this case, it is best to send ALL of you un-shuffled coins to a CoinFusion.
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
