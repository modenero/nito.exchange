<template>
    <main>
        <paragraph-heading class="pb-0">
            <h4 class="font-weight-light">
                Getting Started
            </h4>
        </paragraph-heading>

        <v-col cols="12 pt-0">
            <v-card>
                <v-container fluid>
                    <v-row>
                        <v-col cols="12" class="text-left">
                            <h2>What is CashShuffle?</h2>

                            <p>
                                CashShuffle itself is merely software, not a service or provider. As such it differs from the coin mixing, or coin tumbling, services of the past.
                            </p>

                            <p>
                                Getting started is easy!
                                Every Bitcoin Cash is compatible with CashShuffle.
                            </p>

                            <hr />

                            <h2>The Problem</h2>

                            <p>
                                One of the problems with a public, immutable ledger like the blockchain is: it’s public. All transactions from all time are out there for all to see — and analyze, perhaps to identify the parties involved and what they were doing. That’s a nightmare for both businesses and individuals who value privacy.
                            </p>

                            <p>
                                Governments and other institutions should not be given room to start blacklisting coins, as this threatens the foundation of the currency. Each coin should be the same as another (fungible)” as Cash Shuffle and protocols alike will “increase ambiguity and “coin-taint” across the spectrum of transactions so that all coins will be more similar to each other.
                            </p>

                            <h2>CashShuffle vs Mixing Services</h2>

                            <p>
                                Mixers/tumblers are online services that would replace a user’s coins with “clean”, or at least new, coins. However their usability was marred by trust issues — users had to send coins to an anonymous third-party service, pay a fee, and trust they’d come back new.
                            </p>

                            <p>
                                Often they didn’t come back at all and, even if they did, it was impossible to know what was happening on the other side. Were the coins actually being mixed? Were mixing services scams, or “honeypot” operations run by law enforcement? Even reputable mixers could be compromised, change hands, or suddenly pull an exit-scam and disappear.
                            </p>

                            <p>
                                CashShuffle’s trustless client-server model removes that risk. The software “shuffles” transactions by combining them with others, obfuscating the sender and receiver.
                            </p>
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
