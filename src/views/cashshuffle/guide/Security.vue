<template>
    <main>
        <paragraph-heading class="pb-0">
            <h4 class="font-weight-light">
                Kudelski Security Audit
            </h4>
        </paragraph-heading>

        <v-col cols="12 pt-0">
            <v-card>
                <v-container fluid>
                    <v-row>

                        <v-col cols="12" sm="6">
                            <paragraph-heading>
                                Summary
                            </paragraph-heading>

                            <v-card-text class="font-weight-light text-left">
                                <p>
                                    To ensure the effectiveness of the platform and technology, Cashshuffle has been successfully audited by Kudelski Security.
                                </p>

                                <p>
                                    During the audit, those in the security firm analyzed the platform’s implementation, interaction with the blockchain network, error handling, and other factors that impact security.
                                </p>

                                <p>
                                    In addition, the security firm took a look at the platform’s general code safety and susceptibility to ensure that transactions were safe, secure, and not prone to the dissemination of information.
                                </p>
                            </v-card-text>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <!-- <paragraph-heading>
                                Handling Toxic Waste
                            </paragraph-heading> -->

                            <v-card-text class="font-weight-light large-quote text-left">
                                <span class="quote">&ldquo;</span>
                                We believe that the Cashshuffle codebase that we reviewed is implementing the Coinshuffle protocol with no significant deviations, and we did not find any evidence of malicious intent, flawed logic or potential backdoor in the codebase.
                                <span class="quote">&rdquo;</span>
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
.large-quote
    font-size: 1.8em
    line-height: 32px
    color: rgba(120, 120, 120, 1.0)

.quote
    font-size: 1.8em
</style>
