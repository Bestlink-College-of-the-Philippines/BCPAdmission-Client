<template>
  <v-app id="shs">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <form
            @submit.prevent="submitSHS"
            @keydown="shs_registration.onKeydown($event)"
          >
            <v-stepper v-model="e6" vertical>
              <v-stepper-step :complete="e6 > 1" step="1" :editable="true">
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
                <v-btn to="/" text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 2" step="2" :editable="true"
                >Personal Information</v-stepper-step
              >

              <v-stepper-content step="2">
                <v-text-field
                  label="First Name"
                  outlined
                  class="pt-1"
                ></v-text-field>
                <v-text-field label="Last Name" outlined></v-text-field>
                <v-text-field label="Middle Name" outlined></v-text-field>
                <v-radio-group
                  v-model="shs_registration.gender"
                  row
                  class="pb-1"
                >
                  <template v-slot:label>
                    <div><strong>Gender</strong>:</div>
                  </template>
                  <v-radio
                    v-for="gender in Genders"
                    :key="gender"
                    :label="gender"
                    :value="gender"
                  ></v-radio>
                </v-radio-group>
                <v-text-field label="Guardian" outlined></v-text-field>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="shs_registration.DateOfBirth"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="shs_registration.DateOfBirth"
                      label="Date of Birthdate"
                      readonly
                      v-on="on"
                      :outlined="true"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="shs_registration.DateOfBirth" type="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false"
                      >Cancel</v-btn
                    >
                    <v-btn text color="primary" @click="$refs.dialog.save(date)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-dialog>
                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                <v-btn to="/" text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 3" step="3" :editable="true"
                >Address</v-stepper-step
              >

              <v-stepper-content step="3">
                <v-text-field label="Street Address" outlined></v-text-field>
                <v-text-field
                  label="Street Address Line 2"
                  outlined
                ></v-text-field>
                <v-text-field label="City" outlined></v-text-field>
                <v-text-field label="Province" outlined></v-text-field>
                <v-text-field label="Postal Code" outlined></v-text-field>
                <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step step="4" :editable="true"
                >Contact Information</v-stepper-step
              >
              <v-stepper-content step="4">
                <v-text-field label="Contact Number" outlined></v-text-field>
                <v-text-field
                  label="Email Address"
                  outlined
                  type="email"
                ></v-text-field>
                <v-btn
                  color="primary"
                  :disabled="shs_registration.busy"
                  type="submit"
                  >Submit</v-btn
                >
                <v-btn text>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper>
          </form>
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
      strand: "General Academic Strand (GAS)",
      gender: "Male",
      firstname: "",
      lastname: "",
      middlename: "",
      guardian: "",
      DateOfBirth: new Date().toISOString().substring(0, 7),
    }),
    modal: false,
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
    Genders: ["Male", "Female"],
  }),

  methods: {
    submitSHS() {
      //
    },
  },
  computed: {},
};
</script>
