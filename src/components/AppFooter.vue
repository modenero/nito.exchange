<template>
    <v-footer id="dashboard-core-footer">
        <v-container>
            <v-row align="center" no-gutters>
                <v-col
                    v-for="(link, i) in links"
                    :key="i"
                    class="text-center mb-sm-0 mb-5"
                    cols="auto"
                >
                    <a
                        v-if="link.target"
                        :href="link.href"
                        :target="link.target"
                        class="mr-0 grey--text text--darken-3"
                        rel="noopener"
                        v-text="link.text"
                    />
                    <router-link
                        v-else
                        :to="link.href"
                        class="mr-0 grey--text text--darken-3"
                        rel="noopener"
                        v-text="link.text"
                    />
                </v-col>

                <v-spacer class="hidden-sm-and-down" />

                <v-col cols="12" sm="auto">
                    <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
                        &copy; {{curYear}}.
                        <a href="https://modenero.com" target="_blank">
                            <strong>Modenero Corp.</strong></a>
                        All rights reserved.
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
/* Import modules. */
import moment from 'moment'

export default {
    data: () => ({
        links: [
            {
                href: 'about',
                text: 'About',
            },
            {
                href: 'faq',
                text: 'FAQ',
            },
            {
                href: 'https://docs.nito.exchange',
                text: 'Docs',
                target: '_blank',
            },
            {
                href: 'canary',
                text: 'Canary',
            },
        ],
    }),
    computed: {
        curYear() {
            return moment().format('YYYY')
        }
    },
}
</script>

<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
