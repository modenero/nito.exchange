<template>
    <v-container id="regular-tables" fluid tag="section">

        <v-btn-toggle class="d-none d-md-inline">
            <v-btn :color="tab.all" @click="toggle('all')">Sessions</v-btn>
            <v-btn :color="tab.shuffles" @click="toggle('shuffles')">Deposits & Transfers</v-btn>
            <v-btn :color="tab.fusions" @click="toggle('fusions')">Application</v-btn>
        </v-btn-toggle>
        <v-btn-toggle class="d-md-none">
            <v-btn :color="tab.all" @click="toggle('all')">Sessions</v-btn>
            <v-btn :color="tab.shuffles" @click="toggle('shuffles')">Transfers</v-btn>
            <v-btn :color="tab.fusions" @click="toggle('fusions')">Events</v-btn>
        </v-btn-toggle>

        <base-material-card
            icon="mdi-rotate-orbit"
            title="My Sessions"
            class="px-5 py-3"
        >
            <v-simple-table>
                <thead>
                    <tr>
                        <th class="primary--text">
                            ID
                        </th>
                        <th class="primary--text">
                            Name
                        </th>
                        <th class="primary--text">
                            Country
                        </th>
                        <th class="primary--text">
                            City
                        </th>
                        <th class="text-right primary--text">
                            Salary
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td class="text-right">
                            $36,738
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Minverva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaas-Waas</td>
                        <td class="text-right">
                            $23,789
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td class="text-right">
                            $56,142
                        </td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td class="text-right">
                            $38,735
                        </td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td class="text-right">
                            $63,542
                        </td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td class="text-right">
                            $78,615
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </base-material-card>

        <v-pagination
            :length="5"
            :value="1"
            circle
            class="justify-start"
        />

        <div class="py-3" />

    </v-container>
</template>

<script>
export default {
    data: () => ({
        tab: {
            all: 'secondary',
            shuffles: '',
            fusions: '',
        },
    }),
    methods: {
        /**
         * Toggle Tab
         */
        toggle(_tab) {
            /* Reset tabs. */
            this.tab = {
                all: '',
                shuffles: '',
                fusions: '',
            }

            /* Set active tab. */
            this.tab[_tab] = 'secondary'
        },
    },
}
</script>
