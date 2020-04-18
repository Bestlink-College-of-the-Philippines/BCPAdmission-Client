<template>
  <v-app id="admission">
    <v-app-bar
      app
      color="blue darken-4"
      dark
      elevate-on-scroll
    >
      <v-toolbar-title>BCP Admission</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="primary mr-1" to="/">Home</v-btn>
      <v-btn class="primary mr-1" to="/shs">SHS</v-btn>
      <v-btn class="primary mr-1" to="/college">College</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "Template",
};
</script>
