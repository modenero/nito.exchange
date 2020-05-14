<template>
    <v-container id="panels" fluid tag="section">
        <base-v-component heading="Tabs" link="components/tabs" />

        <v-row>
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
}
</script>
