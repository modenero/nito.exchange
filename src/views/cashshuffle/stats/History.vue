<template>
    <base-material-chart-card
        :data="chart.data"
        :options="chart.options"
        :responsive-options="chart.responsiveOptions"
        color="#407a02"
        hover-reveal
        type="Bar"
    >
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
</template>

<script>
export default {
    data: () => {
        return {
            chart: null,
        }
    },
    created: function () {
        this.chart = {
            data: {
                labels: [ 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May' ],
                series: [
                    [ 326, 542, 443, 320, 780, 553 ],
                    [ 126, 342, 243, 120, 580, 353 ],
                ],
            },
            options: {
                // showArea: true,
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
