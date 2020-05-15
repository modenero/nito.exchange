<template>
    <v-col cols="12" md="6">
        <base-material-card class="px-5 py-3">
            <template v-slot:heading>
                <v-tabs
                    v-model="tabs"
                    background-color="transparent"
                    slider-color="white"
                >
                    <!-- <span
                        class="subheading font-weight-light mx-3"
                        style="align-self: center"
                    >Feeds:</span> -->

                    <v-tab class="mr-3">
                        <v-icon class="mr-2">
                            mdi-recycle-variant
                        </v-icon>
                        CashShuffle
                    </v-tab>

                    <v-tab class="mr-3">
                        <v-icon class="mr-2">
                            mdi-electron-framework
                        </v-icon>
                        CashFusion
                    </v-tab>

                    <v-tab>
                        <v-icon class="mr-2">
                            mdi-cloud-sync-outline
                        </v-icon>
                        Nito Cloud
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
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            tabs: 0,
            tasks: null,
        }
    },
    created: function () {
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

    },
}
</script>

<style lang="sass">
#style
    .class
        color: white
</style>
