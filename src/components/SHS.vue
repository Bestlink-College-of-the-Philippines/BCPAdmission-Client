<template>
  <v-app id="shs">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" md="8">
          <form
            @submit.prevent="submitSHS"
            @keydown="shs_registration.onKeydown($event)"
          >
            <v-stepper v-model="e6" vertical>
              <v-stepper-step :complete="e6 > 1" step="1" :editable="true">
                LRN
                <small>Learner Reference Number</small>
              </v-stepper-step>

              <v-stepper-content step="1">
                <v-text-field label="Learner Reference Number" outlined class="pt-1" required v-model="shs_registration.lrn"></v-text-field>
                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                <v-btn to="/" text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 2" step="2" :editable="true"
                >Personal Information</v-stepper-step
              >

              <v-stepper-content step="2">
                <v-combobox
                  v-model="shs_registration.strand"
                  :items="strands"
                  label="Strand"
                  outlined
                  class="pt-1"
                ></v-combobox>
                <v-text-field
                  label="First Name"
                  outlined
                  required
                  v-model="shs_registration.firstname"
                ></v-text-field>
                <v-text-field label="Last Name" outlined required v-model="shs_registration.lastname"></v-text-field>
                <v-text-field label="Middle Name" outlined required v-model="shs_registration.middlename"></v-text-field>
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
                <v-text-field label="Guardian" outlined required v-model="shs_registration.guardian"></v-text-field>
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
                      label="Date of Birth"
                      readonly
                      v-on="on"
                      :outlined="true"
                      required
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="shs_registration.DateOfBirth" type="date" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false"
                      >Cancel</v-btn
                    >
                    <v-btn text color="primary" @click="$refs.dialog.save(shs_registration.DateOfBirth)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-dialog>
                
                <v-text-field label="Previous School" outlined required v-model="shs_registration.prevSchool"></v-text-field>
                <v-text-field label="Section" outlined required v-model="shs_registration.section"></v-text-field>
                <v-text-field label="School year" outlined required v-model="shs_registration.sy"></v-text-field>

                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                <v-btn to="/" text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step :complete="e6 > 3" step="3" :editable="true"
                >Address</v-stepper-step
              >

              <v-stepper-content step="3">
                <v-text-field label="Street Address" outlined required v-model="shs_registration.address"></v-text-field>
                <v-text-field
                  label="Street Address Line 2 (optional)"
                  outlined
                  v-model="shs_registration.address2"
                ></v-text-field>
                <v-text-field label="City" outlined required v-model="shs_registration.city"></v-text-field>
                <v-text-field label="Province" outlined required v-model="shs_registration.province"></v-text-field>
                <v-text-field label="Postal Code" outlined required v-model="shs_registration.postal_code"></v-text-field>
                <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                <v-btn to="/" text>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-step step="4" :editable="true"
                >Contact Information</v-stepper-step
              >
              <v-stepper-content step="4">
                <v-text-field label="Contact Number (Optional)" outlined v-model="shs_registration.contact_number"></v-text-field>
                <v-text-field
                  label="Email Address"
                  outlined
                  type="email"
                  required
                  v-model="shs_registration.email"
                ></v-text-field>
                
                <v-btn
                  color="primary"
                  :disabled="shs_registration.busy"
                  type="submit"
                  >Submit</v-btn
                >
                <v-btn to="/" text>Cancel</v-btn>
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
      lrn: "",
      strand: "General Academic Strand (GAS)",
      gender: "Male",
      firstname: "",
      lastname: "",
      middlename: "",
      guardian: "",
      DateOfBirth: new Date().toISOString().substring(0,10),
      prevSchool: "",
      section: "",
      sy: "",
      address: "",
      address2: "",
      city: "",
      province: "",
      postal_code: "",
      contact_number: "",
      email: ""
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
