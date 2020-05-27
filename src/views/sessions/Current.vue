<template>
    <v-card class="current-card pa-3">
        <v-row>
            <v-col>
                <v-text-field
                    v-model="title"
                    :rules="rules"
                    counter="25"
                    label="Session Title"
                    outlined
                ></v-text-field>
            </v-col>

            <v-col>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </v-col>
        </v-row>

        <v-card-text>
              <v-slider
                v-model="fruits"
                :tick-labels="ticksLabels"
                :max="3"
                step="1"
                ticks="always"
                tick-size="4"
              ></v-slider>
            </v-card-text>

        <v-subheader>Min and max default slider</v-subheader>

        <v-card-text>
            <v-row>
                <v-col class="pr-4">
                    <v-slider
                        v-model="slider"
                        class="align-center"
                        :max="max"
                        :min="min"
                        hide-details
                    >
                        <template v-slot:append>
                            <v-text-field
                                v-model="slider"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                style="width: 60px"
                            ></v-text-field>
                        </template>
                    </v-slider>
                </v-col>
            </v-row>
        </v-card-text>

        <v-subheader>Min and max range slider</v-subheader>

        <v-card-text>
            <v-row>
                <v-col class="px-4">
                    <v-range-slider
                        v-model="range"
                        :max="max"
                        :min="min"
                        hide-details
                        class="align-center"
                    >
                        <template v-slot:prepend>
                            <v-text-field
                                :value="range[0]"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                style="width: 60px"
                                @change="$set(range, 0, $event)"
                            ></v-text-field>
                        </template>

                        <template v-slot:append>
                            <v-text-field
                                :value="range[1]"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                style="width: 60px"
                                @change="$set(range, 1, $event)"
                            ></v-text-field>
                        </template>
                    </v-range-slider>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-textarea
                        class="purple-input"
                        label="Session Notes"
                        placeholder="Enter your notes for reference."
                        v-model="notes"
                    />

                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>
export default {
    components: {
        // ParagraphHeading: {
        //     render (h) {
        //         return h('div', {
        //             class: 'headline font-weight-light col cols-12',
        //         }, this.$slots.default)
        //     },
        // },
    },
    data: () => {
        return {
            title: null,
            notes: null,

            rules: [v => v.length <= 25 || 'Max 25 characters'],

            min: -50,
            max: 90,
            slider: 40,
            range: [-20, 70],

            value: 0,
            fruits: 0,
            ticksLabels: [
              'Figs',
              'Lemon',
              'Pear',
              'Apple',
            ],
        }
    }
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white

.current-card
    width: 100%

v-range-slider
    width: 300px
</style>
