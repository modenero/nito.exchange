<template>
    <v-container id="user-profile" fluid tag="section">

        <v-btn-toggle>
            <v-btn :color="tab.all" @click="toggle('all')">Show all</v-btn>
            <v-btn :color="tab.coins" @click="toggle('coins')">My Coins</v-btn>
            <v-btn :color="tab.accounts" @click="toggle('accounts')">My Accounts</v-btn>
        </v-btn-toggle>

        <v-row justify="center">
            <v-col cols="12" sm="7">
                <v-row v-if="tab.all">

                    <base-material-card>
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">
                                Edit Profile
                            </div>

                            <div class="subtitle-1 font-weight-light">
                                Complete your profile
                            </div>
                        </template>

                        <v-form>
                            <v-container class="py-0">
                                <v-row>
                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            label="Company (disabled)"
                                            disabled
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            class="purple-input"
                                            label="User Name"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            label="Email Address"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            label="First Name"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="6">
                                        <v-text-field
                                            label="Last Name"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12">
                                        <v-text-field
                                            label="Adress"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            label="City"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            label="Country"
                                            class="purple-input"
                                        />
                                    </v-col>

                                    <v-col cols="12" sm="4">
                                        <v-text-field
                                            class="purple-input"
                                            label="Postal Code"
                                            type="number"
                                        />
                                    </v-col>

                                    <v-col cols="12">
                                        <v-textarea
                                            class="purple-input"
                                            label="About Me"
                                            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                        />
                                    </v-col>

                                    <v-col cols="12" class="text-right">
                                        <v-btn color="success" class="mr-0">
                                            Update Profile
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>
                    </base-material-card>

                </v-row>

                <v-row v-if="tab.coins">
                    <base-material-card>
                        <template v-slot:heading>
                            <div class="display-2 font-weight-light">
                                My Coins
                            </div>

                            <div class="subtitle-1 font-weight-light">
                                Complete listing of ALL spendable coins.
                            </div>
                        </template>

                        <v-card-text>
                            <template v-for="(task, i) in tasks[0]">
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
                    </base-material-card>
                </v-row>

                <v-row v-if="tab.accounts">



                          <v-card>
                              <v-toolbar
                                color="primary"
                                dark
                                flat
                              >
                                <v-icon>mdi-silverware</v-icon>
                                <v-toolbar-title>Local hotspots</v-toolbar-title>
                              </v-toolbar>

                              <v-row>
                                <v-col>
                                  <v-card-text>
                                    <v-treeview
                                      v-model="tree"
                                      :load-children="fetch"
                                      :items="items"
                                      selected-color="indigo"
                                      open-on-click
                                      selectable
                                      return-object
                                      expand-icon="mdi-chevron-down"
                                      on-icon="mdi-bookmark"
                                      off-icon="mdi-bookmark-outline"
                                      indeterminate-icon="mdi-bookmark-minus"
                                    >
                                    </v-treeview>
                                  </v-card-text>
                                </v-col>

                                <v-divider vertical></v-divider>

                                <v-col
                                  cols="12"
                                  sm="6"
                                >
                                  <v-card-text>
                                    <div
                                      v-if="tree.length === 0"
                                      key="title"
                                      class="title font-weight-light grey--text pa-4 text-center"
                                    >
                                      Select your favorite breweries
                                    </div>

                                    <v-scroll-x-transition
                                      group
                                      hide-on-leave
                                    >
                                      <v-chip
                                        v-for="(selection, i) in tree"
                                        :key="i"
                                        color="grey"
                                        dark
                                        small
                                        class="ma-1"
                                      >
                                        <v-icon left small>mdi-beer</v-icon>
                                        {{ selection.name }}
                                      </v-chip>
                                    </v-scroll-x-transition>
                                  </v-card-text>
                                </v-col>
                              </v-row>

                              <v-divider></v-divider>

                              <v-card-actions>
                                <v-btn
                                  text
                                  @click="tree = []"
                                >
                                  Reset
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn
                                  class="white--text"
                                  color="green darken-1"
                                  depressed
                                >
                                  Save
                                  <v-icon right>mdi-content-save</v-icon>
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                </v-row>
            </v-col>

            <v-col cols="12" sm="5">
                <base-material-card
                    class="v-card-profile"
                    avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                >
                    <v-card-text class="text-center">
                        <h6 class="display-1 mb-1 grey--text">
                            CEO / CO-FOUNDER
                        </h6>

                        <h4 class="display-2 font-weight-light mb-3 black--text">
                            Alec Thompson
                        </h4>

                        <p class="font-weight-light grey--text">
                            Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                        </p>

                        <v-btn color="success" rounded class="mr-0">
                            Follow
                        </v-btn>
                    </v-card-text>
                </base-material-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => {
        return {
            tab: {
                all: 'secondary',
                deposit: '',
                stats: '',
            },
            tasks: null,

            breweries: [],
                  isLoading: false,
                  tree: [],
                  types: [],
        }
    },
    computed: {
      items () {
        const children = this.types.map(type => ({
          id: type,
          name: this.getName(type),
          children: this.getChildren(type),
        }))

        return [{
          id: 1,
          name: 'All Breweries',
          children,
        }]
      },
      shouldShowTree () {
        return this.breweries.length > 0 && !this.isLoading
      },
    },

    watch: {
      breweries (val) {
        this.types = val.reduce((acc, cur) => {
          const type = cur.brewery_type

          if (!acc.includes(type)) acc.push(type)

          return acc
        }, []).sort()
      },
    },
    methods: {
        /**
         * Toggle Tab
         */
        toggle(_tab) {
            /* Reset tabs. */
            this.tab = {
                monitor: '',
                pools: '',
                stats: '',
            }

            /* Set active tab. */
            this.tab[_tab] = 'secondary'
        },

        fetch () {
                if (this.breweries.length) return

                return fetch('https://api.openbrewerydb.org/breweries')
                  .then(res => res.json())
                  .then(data => (this.breweries = data))
                  .catch(err => console.log(err))
              },
              getChildren (type) {
                const breweries = []

                for (const brewery of this.breweries) {
                  if (brewery.brewery_type !== type) continue

                  breweries.push({
                    ...brewery,
                    name: this.getName(brewery.name),
                  })
                }

                return breweries.sort((a, b) => {
                  return a.name > b.name ? 1 : -1
                })
              },
              getName (name) {
                return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
              },

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
