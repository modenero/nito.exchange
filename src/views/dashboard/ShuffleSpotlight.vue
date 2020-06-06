<template>
    <base-material-card color="indigo" class="px-5 py-3">
        <template v-slot:heading>
            <div class="display-2 font-weight-light">
                CashShuffle Spotlight
            </div>

            <div class="subtitle-1 font-weight-light">
                Showing data from the last 24 hours
            </div>
        </template>

        <v-card-text>
            <v-row>
                <v-col cols="8" class="text-right">
                    Most active coin pool
                </v-col>
                <v-col cols="4">
                    0.01 BCH
                </v-col>
            </v-row>

            <hr />

            <v-row>
                <v-col cols="8" class="text-right">
                    Largest transaction (total)
                </v-col>
                <v-col cols="4">
                    12.4948 BCH
                </v-col>
            </v-row>

            <hr />

            <v-row>
                <v-col cols="8" class="text-right">
                    Average completion time
                </v-col>
                <v-col cols="4">
                    ~2.3 mins
                </v-col>
            </v-row>

            <hr />

            <v-row>
                <v-col cols="8" class="text-right">
                    Most shuffles in a block
                </v-col>
                <v-col cols="4">
                    9
                </v-col>
            </v-row>

        </v-card-text>
    </base-material-card>
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            //
        }
    },
    created: function () {
        //
    },
}
</script>

<style lang="sass">
#style
    .class
        color: white
</style>
