<template>
  <v-app id="shs">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-stepper v-model="e6" vertical>
            <v-stepper-step :complete="e6 > 1" step="1">
              Strand
              <small>Choose the strand that you want to be in</small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-combobox
                v-model="shs_registration.strand"
                :items="strands"
                label="Strand"
                outlined
                class="pt-1"
              ></v-combobox>
              <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
              <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2"
              >Configure analytics for this app</v-stepper-step
            >

            <v-stepper-content step="2">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
              <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3"
              >Select an ad format and name ad unit</v-stepper-step
            >

            <v-stepper-content step="3">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
              <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step step="4">View setup instructions</v-stepper-step>
            <v-stepper-content step="4">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
              <v-btn text>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import { Form, HasError, AlertError } from "vform";
import Vue from "vue";

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

export default {
  data: () => ({
    e6: 1,
    shs_registration: new Form({
      strand: "Strand",
    }),
    strands: [
      "General Academic Strand (GAS)",
      "Accountancy, Business and Management (ABM)",
      "Humanities and Social Sciences (HUMSS)",
      "Science, Technology Engineering and Mathematics (STEM)",
      "Performing Arts (PA)",
      "Information &amp; Computer Technology (ICT)",
      "Home Economics (HE)",
      "Industrial Arts (IA)",
    ],
  }),

  computed: {
      
  }
};
</script>
