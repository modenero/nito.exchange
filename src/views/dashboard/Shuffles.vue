<template>
    <base-material-card color="indigo" class="px-5 py-3">
        <template v-slot:heading>
            <div class="display-2 font-weight-light">
                CashShuffle Spotlight
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
</template>

<script>
export default {
    components: {
        //
    },
    data: () => {
        return {
            headers: null,
            items: null,
        }
    },
    created: function () {
        this.headers = [
            {
                sortable: false,
                text: 'Name',
                value: 'name',
            },
            {
                sortable: false,
                text: 'Salary',
                value: 'salary',
                align: 'center',
            },
            {
                sortable: false,
                text: 'Country',
                value: 'country',
                align: 'center',
            },
            {
                sortable: false,
                text: 'City',
                value: 'city',
                align: 'center',
            },
        ]

        this.items = [
            {
                name: 'Shuffles',
                country: 'Niger',
                city: 'Oud-Tunrhout',
                salary: '$35,738',
            },
            {
                name: 'Minerva Hooper',
                country: 'Curaçao',
                city: 'Sinaai-Waas',
                salary: '$23,738',
            },
            {
                name: 'Sage Rodriguez',
                country: 'Netherlands',
                city: 'Overland Park',
                salary: '$56,142',
            },
            {
                name: 'Philip Chanley',
                country: 'Korea, South',
                city: 'Gloucester',
                salary: '$38,735',
            },
            {
                name: 'Doris Greene',
                country: 'Malawi',
                city: 'Feldkirchen in Kārnten',
                salary: '$63,542',
            },
        ]

    },
}
</script>

<style lang="sass">
#style
    .class
        color: white
</style>
