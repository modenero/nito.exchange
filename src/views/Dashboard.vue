<template>
    <v-container id="dashboard" fluid tag="section">
        <dashboard-charts />

        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                    color="info"
                    icon="mdi-twitter"
                    title="Followers"
                    value="+245"
                    sub-icon="mdi-clock"
                    sub-text="Just Updated"
                />
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                    color="primary"
                    icon="mdi-poll"
                    title="Website Visits"
                    value="75.521"
                    sub-icon="mdi-tag"
                    sub-text="Tracked from Google Analytics"
                />
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                    color="success"
                    icon="mdi-store"
                    title="Revenue"
                    value="$ 34,245"
                    sub-icon="mdi-calendar"
                    sub-text="Last 24 Hours"
                />
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <base-material-stats-card
                    color="orange"
                    icon="mdi-sofa"
                    title="Bookings"
                    value="184"
                    sub-icon="mdi-alert"
                    sub-icon-color="red"
                    sub-text="Get More Space..."
                />
            </v-col>

            <v-col cols="12" md="6">
                <base-material-card color="warning" class="px-5 py-3">
                    <template v-slot:heading>
                        <div class="display-2 font-weight-light">
                            Employees Stats
                        </div>

                        <div class="subtitle-1 font-weight-light">
                            New employees on 15th September, 2016
                        </div>
                    </template>

                    <v-card-text>
                        <v-data-table
                            :headers="headers"
                            :items="items"
                        />
                    </v-card-text>
                </base-material-card>
            </v-col>

            <v-col cols="12" md="6">
                <base-material-card class="px-5 py-3">
                    <template v-slot:heading>
                        <v-tabs
                            v-model="tabs"
                            background-color="transparent"
                            slider-color="white"
                        >
                            <span
                                class="subheading font-weight-light mx-3"
                                style="align-self: center"
                            >Tasks:</span>

                            <v-tab class="mr-3">
                                <v-icon class="mr-2">
                                    mdi-bug
                                </v-icon>

                                Bugs
                            </v-tab>

                            <v-tab class="mr-3">
                                <v-icon class="mr-2">
                                    mdi-code-tags
                                </v-icon>
                                Website
                            </v-tab>

                            <v-tab>
                                <v-icon class="mr-2">
                                    mdi-cloud
                                </v-icon>
                                Server
                            </v-tab>
                        </v-tabs>
                    </template>

                    <v-tabs-items v-model="tabs" class="transparent">
                        <v-tab-item v-for="n in 3" :key="n">
                            <v-card-text>
                                <template v-for="(task, i) in tasks[tabs]">
                                    <v-row :key="i" align="center">
                                        <v-col cols="1">
                                            <v-list-item-action>
                                                <v-checkbox
                                                    v-model="task.value"
                                                    color="secondary"
                                                />
                                            </v-list-item-action>
                                        </v-col>

                                        <v-col cols="9">
                                            <div
                                                class="font-weight-light"
                                                v-text="task.text"
                                            />
                                        </v-col>

                                        <v-col cols="2" class="text-right">
                                            <v-icon class="mx-1">
                                                mdi-pencil
                                            </v-icon>
                                            <v-icon color="error" class="mx-1">
                                                mdi-close
                                            </v-icon>
                                        </v-col>
                                    </v-row>
                                </template>
                            </v-card-text>
                        </v-tab-item>
                    </v-tabs-items>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    components: {
        DashboardCharts: () => import('./dashboard/Charts'),
    },
    data: () => {
        return {
            headers: null,
            items: null,
            tabs: 0,
            tasks: null,
            list: null,
        }
    },

    methods: {
        // complete (index) {
        //     this.list[index] = !this.list[index]
        // },
    },
    created: function () {
        this.headers = [
            {
                sortable: false,
                text: 'ID',
                value: 'id',
            },
            {
                sortable: false,
                text: 'Name',
                value: 'name',
            },
            {
                sortable: false,
                text: 'Salary',
                value: 'salary',
                align: 'right',
            },
            {
                sortable: false,
                text: 'Country',
                value: 'country',
                align: 'right',
            },
            {
                sortable: false,
                text: 'City',
                value: 'city',
                align: 'right',
            },
        ]

        this.items = [
            {
                id: 1,
                name: 'Dakota Rice',
                country: 'Niger',
                city: 'Oud-Tunrhout',
                salary: '$35,738',
            },
            {
                id: 2,
                name: 'Minerva Hooper',
                country: 'Curaçao',
                city: 'Sinaai-Waas',
                salary: '$23,738',
            },
            {
                id: 3,
                name: 'Sage Rodriguez',
                country: 'Netherlands',
                city: 'Overland Park',
                salary: '$56,142',
            },
            {
                id: 4,
                name: 'Philip Chanley',
                country: 'Korea, South',
                city: 'Gloucester',
                salary: '$38,735',
            },
            {
                id: 5,
                name: 'Doris Greene',
                country: 'Malawi',
                city: 'Feldkirchen in Kārnten',
                salary: '$63,542',
            },
        ]

        this.tasks = {
            0: [
                {
                    text: 'Sign contract for "What are conference organizers afraid of?"',
                    value: true,
                },
                {
                    text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
                    value: false,
                },
                {
                    text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                    value: false,
                },
                {
                    text: 'Create 4 Invisible User Experiences you Never Knew About',
                    value: true,
                },
            ],
            1: [
                {
                    text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                    value: true,
                },
                {
                    text: 'Sign contract for "What are conference organizers afraid of?"',
                    value: false,
                },
            ],
            2: [
                {
                    text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
                    value: false,
                },
                {
                    text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
                    value: true,
                },
                {
                    text: 'Sign contract for "What are conference organizers afraid of?"',
                    value: true,
                },
            ],
        }

        this.list = {
            0: false,
            1: false,
            2: false,
        }

    },
}
</script>
