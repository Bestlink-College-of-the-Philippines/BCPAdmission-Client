<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            sm="6"
            md="6"
            v-for="(data, index) in dataRegistration"
            :key="index"
          >
            <v-card class="elevation-12 mx-auto">
              <div class="d-flex flex-no-wrap justify-space-between">

                <v-avatar class="ma-3" size="400" tile>
                  <v-img :src="data.src" :contain="true"></v-img>
                </v-avatar>
                <div>
                  <v-card-title
                    class="display-1 font-weight-light"
                    v-text="data.title"
                  ></v-card-title>
                  <v-spacer />
                  <v-card-subtitle v-text="data.content" class="pt-1"></v-card-subtitle>
                  <v-spacer />
                  <v-btn class="primary" :to="data.link">Enroll Now</v-btn>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dataRegistration: [
      {
        src: require("./assets/shs.svg"),
        title: "Senior High School",
        link: "/shs",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis volutpat diam, sit amet blandit erat tempus ut. Aliquam hendrerit sodales finibus. Suspendisse potenti. Suspendisse imperdiet dui a varius porta. Quisque lobortis maximus semper. Sed pretium sapien nec est lobortis, ut interdum lorem blandit. Aliquam vel dapibus mauris."
      },
      {
        src: require("./assets/college.svg"),
        title: "College",
        link: "/",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis volutpat diam, sit amet blandit erat tempus ut. Aliquam hendrerit sodales finibus. Suspendisse potenti. Suspendisse imperdiet dui a varius porta. Quisque lobortis maximus semper. Sed pretium sapien nec est lobortis, ut interdum lorem blandit. Aliquam vel dapibus mauris."
      
      },
    ],
  }),
};
</script>