<template>
    <v-container fluid tag="section">
        <v-row>
            <v-col cols="12" lg="4">
                <base-material-chart-card
                    :data="emailsSubscriptionChart.data"
                    :options="emailsSubscriptionChart.options"
                    :responsive-options="emailsSubscriptionChart.responsiveOptions"
                    color="#E91E63"
                    hover-reveal
                    type="Bar"
                >
                    <template v-slot:reveal-actions>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    color="info"
                                    icon
                                    v-on="on"
                                >
                                    <v-icon color="info">
                                        mdi-refresh
                                    </v-icon>
                                </v-btn>
                            </template>

                            <span>Refresh</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    light
                                    icon
                                    v-on="on"
                                >
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>

                            <span>Change Date</span>
                        </v-tooltip>
                    </template>

                    <h4 class="card-title font-weight-light mt-2 ml-2">
                        CashShuffle
                    </h4>

                    <p class="d-inline-flex font-weight-light ml-2 mt-1">
                        <v-icon color="green" small>
                            mdi-arrow-up
                        </v-icon>

                        <span class="green--text mr-1">25%</span>
                        increase in today's shuffles
                    </p>

                    <template v-slot:actions>
                        <v-icon class="mr-1" small>
                            mdi-clock-outline
                        </v-icon>

                        <span class="caption grey--text font-weight-light">
                            updated 10 minutes ago
                        </span>
                    </template>
                </base-material-chart-card>
            </v-col>

            <v-col cols="12" lg="4">
                <base-material-chart-card
                    :data="dailySalesChart.data"
                    :options="dailySalesChart.options"
                    color="success"
                    hover-reveal
                    type="Line"
                >
                    <template v-slot:reveal-actions>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    color="info"
                                    icon
                                    v-on="on"
                                >
                                    <v-icon color="info">
                                        mdi-refresh
                                    </v-icon>
                                </v-btn>
                            </template>

                            <span>Refresh</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    light
                                    icon
                                    v-on="on"
                                >
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>

                            <span>Change Date</span>
                        </v-tooltip>
                    </template>

                    <h4 class="card-title font-weight-light mt-2 ml-2">
                        CashFusion
                    </h4>

                    <p class="d-inline-flex font-weight-light ml-2 mt-1">
                        <v-icon color="red" small>
                            mdi-arrow-down
                        </v-icon>

                        <span class="red--text mr-1">6%</span>
                        decrease in today's fusions
                    </p>

                    <template v-slot:actions>
                        <v-icon class="mr-1" small>
                            mdi-clock-outline
                        </v-icon>

                        <span class="caption grey--text font-weight-light">
                            updated 4 minutes ago
                        </span>
                    </template>
                </base-material-chart-card>
            </v-col>

            <v-col cols="12" lg="4">
                <base-material-chart-card
                    :data="dataCompletedTasksChart.data"
                    :options="dataCompletedTasksChart.options"
                    hover-reveal
                    color="info"
                    type="Line"
                >
                    <template v-slot:reveal-actions>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    color="info"
                                    icon
                                    v-on="on"
                                >
                                    <v-icon color="info">
                                        mdi-refresh
                                    </v-icon>
                                </v-btn>
                            </template>

                            <span>Refresh</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ attrs, on }">
                                <v-btn
                                    v-bind="attrs"
                                    light
                                    icon
                                    v-on="on"
                                >
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>

                            <span>Change Date</span>
                        </v-tooltip>
                    </template>

                    <h3 class="card-title font-weight-light mt-2 ml-2">
                        Nito Cloud
                    </h3>

                    <p class="d-inline-flex font-weight-light ml-2 mt-1">
                        <v-icon color="green" small>
                            mdi-arrow-up
                        </v-icon>

                        <span class="green--text mr-1">3%</span>
                        increase in today's Nito Cash
                    </p>

                    <template v-slot:actions>
                        <v-icon class="mr-1" small>
                            mdi-clock-outline
                        </v-icon>

                        <span class="caption grey--text font-weight-light">
                            campaign sent 26 minutes ago
                        </span>
                    </template>
                </base-material-chart-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => {
        return {
            dailySalesChart: null,
            dataCompletedTasksChart: null,
            emailsSubscriptionChart: null,
        }
    },
    created: function () {
        this.dailySalesChart = {
            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                series: [
                    [12, 17, 7, 17, 23, 18, 38],
                ],
            },
            options: {
                lineSmooth: this.$chartist.Interpolation.cardinal({
                    tension: 0,
                }),
                low: 0,
                high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
        }

        this.dataCompletedTasksChart = {
            data: {
                labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
                series: [
                    [230, 750, 450, 300, 280, 240, 200, 190],
                ],
            },
            options: {
                lineSmooth: this.$chartist.Interpolation.cardinal({
                    tension: 0,
                }),
                low: 0,
                high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
        }

        this.emailsSubscriptionChart = {
            data: {
                labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
                series: [
                    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
                ],
            },
            options: {
                axisX: {
                    showGrid: false,
                },
                low: 0,
                high: 1000,
                chartPadding: {
                    top: 0,
                    right: 5,
                    bottom: 0,
                    left: 0,
                },
            },
            responsiveOptions: [
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0]
                        },
                    },
                }],
            ],
        }

    },
}
</script>
