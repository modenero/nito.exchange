<template>
    <v-container id="panels" fluid tag="section">
        <base-v-component heading="Tabs" link="components/tabs" />

        <v-row>
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-text>
                        <base-subheading subheading="General Information" />

                        <v-expansion-panels>
                            <v-expansion-panel v-for="faq in faqs" :key="faq.id">
                                <v-expansion-panel-header>
                                    {{faq.question}}
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                    {{faq.answer}}
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card>
                    <v-card-text>
                        <base-subheading subheading="Collapsible Accordion" />

                        <v-expansion-panels>
                            <v-expansion-panel v-for="n in 5" :key="n">
                                <v-expansion-panel-header>
                                    Collapsible Group Item #{{ n }}
                                </v-expansion-panel-header>

                                <v-expansion-panel-content>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        faqs: [],
        tab: 0,
        tabs: [
            'Profile',
            'Settings',
            'Options',
        ],
        tabs2: [
            {
                text: 'Home',
                icon: 'mdi-view-dashboard',
            },
            {
                text: 'Settings',
                icon: 'mdi-clock-outline',
            },
        ],
        tabs3: [
            {
                text: 'Description',
                icon: 'mdi-information',
            },
            {
                text: 'Location',
                icon: 'mdi-map-marker',
            },
            {
                text: 'Legal Info',
                icon: 'mdi-gavel',
            },
            {
                text: 'Help Center',
                icon: 'mdi-help-circle-outline',
            },
        ],

    }),
    created: function () {
        this.faqs.push({
            id: '23c08e2b-1adb-4f62-b3b3-dbd7057dde1e',
            question: `What fee amount is charged for transfers and when are the funds credited to the account?`,
            answer: `Fee amount, number of confirmations of the network required for crediting your account can be found on this page.`,
        })

        this.faqs.push({
            id: 'd1f0edde-c6cb-4e69-a794-4e636146a8a1',
            question: ``,
            answer: ``,
        })

        this.faqs.push({
            id: 'fb40d74b-23f6-4976-8898-dbf39bfb4353',
            question: ``,
            answer: ``,
        })

        this.faqs.push({
            id: 'd26769f9-100d-4595-a11b-d6f7733415e2',
            question: ``,
            answer: ``,
        })

        this.faqs.push({
            id: '37ae845c-0d19-4733-ab79-405a455b0a14',
            question: ``,
            answer: ``,
        })

    },
}
</script>
