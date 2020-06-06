<template>
    <v-col cols="12" sm="6">
        <base-material-card color="pink darken-2" class="px-5 py-3">
            <template v-slot:heading>
                <div class="display-2 font-weight-light">
                    CashFusion Spotlight
                </div>

                <div class="subtitle-1 font-weight-light">
                    Showing data from the last 24 hours
                </div>
            </template>

            <v-card-text>

                <v-row>
                    <v-col cols="8" class="text-right">
                        Most active coin tier
                    </v-col>
                    <v-col cols="4">
                        0.22 BCH
                    </v-col>
                </v-row>

                <hr />

                <v-row>
                    <v-col cols="8" class="text-right">
                        Largest transaction (total)
                    </v-col>
                    <v-col cols="4">
                        38.1273 BCH
                    </v-col>
                </v-row>

                <hr />

                <v-row>
                    <v-col cols="8" class="text-right">
                        Average completion time
                    </v-col>
                    <v-col cols="4">
                        ~32 mins
                    </v-col>
                </v-row>

                <hr />

                <v-row>
                    <v-col cols="8" class="text-right">
                        Most fusions in a block
                    </v-col>
                    <v-col cols="4">
                        2
                    </v-col>
                </v-row>

            </v-card-text>
        </base-material-card>
    </v-col>
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
