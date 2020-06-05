<template>
    <v-container id="user-profile" fluid tag="section">

        <v-row justify="center">
            <v-col cols="12" sm="8">
                <base-material-card>
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Hush Your Money
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            Spend Your Cash Privately. Fearlessly!
                        </div>
                    </template>

                    <v-container class="py-0">
                        <v-row>
                            <v-col cols="12">
                                <p>
                                    Nito Exchange is proud to be the <strong>premier, non-custodial exchange</strong> for maintaining the anonymity and fungibility of your Bitcoin Cash (BCH).
                                </p>

                                <h1>Your Keys. Your Coins.</h1>

                                <p>
                                    Nito Exchange <strong>NEVER</strong> claims ownership of your private keys OR your coins.
                                    At absolutely <strong>ANY</strong> point during your session, <strong>you maintain the ability to move your own coins.</strong>
                                </p>

                                <h1>Compliance</h1>

                                <p class="red--text text-center">
                                    <em>Rest assured .. Nito Exchange will <strong>NEVER</strong> perform AML / KYC on our users.</em>
                                </p>

                                <p>
                                    Nito Exchange is registered with <a href="https://www.fincen.gov/" target="_blank"><strong>FinCEN</strong></a> and complies with all financial regulations.
                                    Nito Exchange has a strict policy <strong>NEVER</strong> to transmit coins on our client's behalf.
                                    Our service functions <strong>SOLELY as a (xPriv) private key manager.</strong>
                                    During CashShuffle and CashFusion sessions, we rely on the community of pool &amp; tier participants to facilitate <strong>ALL</strong> broadcasts to the blockchain.
                                </p>

                                <h1>Legal</h1>

                                <p>
                                    We encourage <strong>ALL</strong> of our users to act responsibly with their coins.
                                    We <strong>DO NOT</strong> condone the use of "illegal" activities with our service.
                                    We leave it up to our users to determine what constitues "illegal" activity.
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </base-material-card>
            </v-col>

            <v-col cols="12" sm="4">
                <base-material-card
                    class="v-card-profile"
                    :avatar="require('@/assets/modenero-avatar.png')"
                >
                    <v-card-text class="text-center">
                        <h4 class="display-2 font-weight-light black--text main-title">
                            Modenero
                        </h4>
                        <p class="sub-title">
                            New Money Beginnings™
                        </p>

                        <p class="font-weight-light grey--text text-left mission">
                            Since 2015, our mission has been to empower the 99% with the ability to grow &amp; secure their own wealth and financial security.
                        </p>

                        <h6 class="display-1 mb-1 grey--text">
                            <a href="https://modenero.com" target="_blank" class="red--text">
                                visit us at modenero.com
                            </a>
                        </h6>

                        <!-- <v-btn color="success" rounded class="mr-0">
                            Follow
                        </v-btn> -->
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => {
        return {
            //
        }
    }
}
</script>

<style lang="sass" scoped>
.v-card-profile
    margin-top: 80px

h6
    a
        text-decoration: none

.main-title
    margin-top: -30px

.sub-title
    font-style: italic
    font-size: 0.9em
    color: rgba(120, 120, 120, 1.0)

.mission
    line-height: 25px
</style>
