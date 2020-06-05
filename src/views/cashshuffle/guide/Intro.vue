<template>
    <main>
        <paragraph-heading class="text-center pb-0">
            <h4 class="font-weight-light">
                CashShuffle User Guide
            </h4>
        </paragraph-heading>

        <v-col cols="12 pt-0">
            <v-card>
                <v-container fluid>
                    <v-row>

                        <v-col cols="12" sm="6">
                            <paragraph-heading>
                                Introduction
                            </paragraph-heading>

                            <v-card-text class="font-weight-light text-left">
                                <p>
                                    <strong>CashShuffle is one of the leading privacy protocols for Bitcoin Cash (BCH).</strong>
                                    In short, it takes your on chain coins (think of coins as individual bills of paper money) and anonymously mixes them individually with the coins of other Bitcoin Cash users.
                                </p>

                                <p>
                                    <strong>This process maintains the fungibility of your coins,</strong>
                                    by making it difficult of on-chain anaylysis companies to track the linkage of the coins usage.
                                </p>

                                <p>
                                    The process of <strong>shuffling seeks to boost privacy and fungibility,</strong> putting BCH in direct competition with "privacy coins" like DASH, Monero and Zcash.
                                </p>
                            </v-card-text>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-carousel cycle height="315" hide-delimiter-background show-arrows-on-hover>

                                <v-carousel-item>
                                    <v-sheet color="indigo" height="100%">
                                        <v-row class="fill-height" align="center" justify="center">
                                            <div class="display-3">
                                                First Slide
                                            </div>
                                        </v-row>
                                    </v-sheet>
                                </v-carousel-item>

                                <v-carousel-item>
                                    <v-sheet color="pink darken-2" height="100%" max-width="1">
                                        <v-row class="fill-height" align="center" justify="center">
                                            <img src="https://i.imgur.com/wWNiEMo.png" class="img-fluid" />
                                        </v-row>
                                    </v-sheet>
                                </v-carousel-item>

                                <v-carousel-item>
                                    <v-sheet color="deep-purple accent-4" height="100%" max-width="1">
                                        <img src="https://i.imgur.com/McX734d.png" class="img-fluid" />
                                        <!-- <v-row> -->
                                        <!-- <v-row class="fill-height" align="center" justify="center"> -->
                                        <!-- </v-row> -->
                                    </v-sheet>
                                </v-carousel-item>

                            </v-carousel>
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
    data: () => {
        return {
            //
        }
    },
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
