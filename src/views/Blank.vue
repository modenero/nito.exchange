<template>
    <v-container fluid tag="section">
        <v-row>
            <v-col class="ml-auto mr-auto" sm="8">
                Blank Template
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* Initialize vuex. */
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        // 
    },
    data() {
        return {
            //
        }
    },
    computed: {
        ...mapGetters('purse', [
            // 'getActiveSessionId',
            // 'getSessions',
        ]),

    },
    methods: {
        ...mapActions('purse', [
            // 'createSession',
        ]),

    },
    created: function () {
        //
    },
}
</script>

<style lang="sass" scoped>
#style
    .class
        color: white
</style>
