<template>
    <v-col cols="12" sm="8">
        <base-material-card color="primary">
            <template v-slot:heading>
                <div class="display-2 font-weight-light">
                    My Recent Sessions
                </div>

                <div class="subtitle-1 font-weight-light">
                    Your most active sessions are listed first.
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
                text: 'Session Label',
                value: 'name',
            },
            {
                sortable: false,
                text: 'Value',
                value: 'amount',
                align: 'center',
            },
            {
                sortable: false,
                text: 'Shuffles | Fusions',
                value: 'numXchg',
                align: 'center',
            },
            {
                sortable: false,
                text: 'Last Updated',
                value: 'timestamp',
                align: 'right',
            },
        ]

        this.items = [
            {
                name: 'Summer Fun',
                amount: '$35,738',
                numXchg: '8 | 2',
                timestamp: '3 minutes ago',
            },
            {
                name: 'Misc',
                amount: '$3,738',
                numXchg: '9 | 3',
                timestamp: '3 hours ago',
            },
            {
                name: 'Work Stuff',
                amount: '$6,142',
                numXchg: '5 | 1',
                timestamp: '19 hours ago',
            },
            {
                name: 'Personal Expenses',
                amount: '$8,735',
                numXchg: '7 | 2',
                timestamp: '2 days ago',
            },
            {
                name: 'My First Session',
                amount: '$542',
                numXchg: '5 | 1',
                timestamp: '3 days ago',
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
