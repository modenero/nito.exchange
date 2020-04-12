<template>
    <footer class="section padding-bottom-16 is-dark">
        <div class="container flex-horizontal">
            <div class="col lg-3 flexv-space-between md-12 flexv-align-left"><img src="images/-asset-peyton-light.svg" alt="">
                <div class="footer-tagline margin-bottom">
                    .cloud for developer
                </div>
            </div>

            <div class="col lg-1 no-margin-bottom"></div>

            <div class="col lg-8 md-12">
                <div class="container container-nested is-wrapped">
                    <div class="col lg-3 no-margin-bottom-lg md-12">
                        <div class="size-h4 margin-bottom on-dark">
                            Product
                        </div>

                        <a href="javascript://" class="footer-nav-link on-dark">Kubernetes</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Micro host</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Cloud compute</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Cloud storage</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Dedicate cloud</a>
                    </div>

                    <div class="col lg-3 no-margin-bottom-lg md-12">
                        <div class="size-h4 margin-bottom on-dark">
                            Why Superly host
                        </div>

                        <a href="javascript://" class="footer-nav-link on-dark">Support experience</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Predictable pricing</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Global infrastructure</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Craft of code</a>
                        <a href="javascript://" class="footer-nav-link on-dark">open cloud</a>
                    </div>

                    <div class="col lg-3 no-margin-bottom-lg md-12">
                        <div class="size-h4 margin-bottom on-dark">
                            Company
                        </div>

                        <a href="javascript://" class="footer-nav-link on-dark">About</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Pricing</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Career</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Leadership</a>
                        <a href="javascript://" class="footer-nav-link on-dark">Press</a>
                    </div>

                    <div class="col lg-3 no-margin-bottom-lg md-12">
                        <div class="size-h4 margin-bottom on-dark">
                            Let&#x27;s connect
                        </div>

                        <a href="javascript://" class="footer-nav-link on-dark w-inline-block">
                            <div>
                                <span class="fa-brand-2 w24"></span> LinkedIn
                            </div>
                        </a>

                        <a href="javascript://" class="footer-nav-link on-dark w-inline-block">
                            <div>
                                <span class="fa-brand-2 w24"></span> Youtube
                            </div>
                        </a>

                        <a href="javascript://" class="footer-nav-link on-dark w-inline-block">
                            <div>
                                <span class="fa-brand-2 w24"></span> Facebook
                            </div>
                        </a>

                        <a href="javascript://" class="footer-nav-link on-dark w-inline-block">
                            <div>
                                <span class="fa-brand-2 w24"></span> Twitter
                            </div>
                        </a>

                        <a href="javascript://" class="footer-nav-link on-dark w-inline-block"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="col lg-12 margin-bottom">
                <div class="hr on-dark opacity"></div>
            </div>
        </div>

        <div class="container">
            <div class="col lg-6 no-margin-bottom md-12 md-order-last">
                <div class="low-text-contrast text-small flexh-space-between md-flex-vertical">
                    <div class="md-order-last">
                        &copy; {{curYear}} Bitcoin Cash Please. All rights reserved.
                    </div>
                </div>
            </div>

            <div class="col lg-6 no-margin-bottom md-12">
                <div class="w100 text-align-right footer-bottom md-text-align-left">
                    <a href="javascript://" class="footer-bottom-link on-dark">Privacy Policy</a>
                    |
                    <a href="javascript://" class="footer-bottom-link on-dark">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
/* Import modules. */
import moment from 'moment'

export default {
    props: {
        // msg: String
    },
    computed: {
        curYear() {
            return moment().format('YYYY')
        }
    }
}
</script>

<style scoped>
/*  */
</style>
