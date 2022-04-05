<template>
  <v-container>
    <v-row>
        <v-col
            cols="12"
            class="navp py-13 text-center d-flex justify-center"
        >
          <div><router-link class="text-h4 routerp font-weight-bold" to="/ho">서버상태<span class="spans"></span></router-link></div>
          <div class="px-16"><router-link class="text-h4" to="/hoinfo">호출정보</router-link></div>
          <div><router-link class="text-h4" to="/reginfo">Registered정보</router-link></div>
        </v-col>

        <v-col cols="12" class="d-flex justify-center mt-10 py-10">
          <v-col cols="4" class="">
          <v-card class="pt-3 pb-16 text-left">
            <v-card class="d-flex justify-space-between px-8" flat>
              <span class="font-weight-bold text-h4 primary--text">Monitoring</span>
              <span class="font-weight-bold text-h5">Internal</span>
            </v-card>
            <v-card class="pt-16 pb-1" flat>
            <span class="pl-15 font-weight-bold text-h5">Memory</span>
              <v-card class="mx-15 mt-3 pa-5" flat style="background-color: #e5f2ff" rounded>
                - 4046380 - 944016 - 2273280 -1752<br/>
                - 829084 - 283974 -
              </v-card>
            </v-card>
            <v-card class="pt-10 pb-3" flat>
              <span class="pl-15 font-weight-bold text-h5">Disk</span>
            </v-card>
            <v-card class="mx-15 pa-5" style="background-color: #e5f2ff" rounded flat>
              - 49G - 21G - 45%<br/>
            </v-card>
          </v-card>
          </v-col>
          <v-spacer id="spaces" class="shrink"></v-spacer>
          <v-col cols="4">
          <v-card class="pt-3 pb-16 text-left">
            <v-card class="d-flex justify-space-between px-8" flat>
              <span class="font-weight-bold text-h4 primary--text">Monitoring</span>
              <span class="font-weight-bold text-h5">External</span>
            </v-card>
            <v-card class="pt-16 pb-1" flat>
              <span class="pl-15 font-weight-bold text-h5">Memory</span>
              <v-card class="mx-15 mt-3 pa-5" flat style="background-color: #e5f2ff" rounded>
                - 4046380 - 944016 - 2273280 -1752<br/>
                - 829084 - 283974 -
              </v-card>
            </v-card>
            <v-card class="pt-10 pb-3" flat>
              <span class="pl-15 font-weight-bold text-h5">Disk</span>
            </v-card>
            <v-card class="mx-15 pa-5" style="background-color: #e5f2ff" rounded flat>
              - 49G - 21G - 45%<br/>
            </v-card>
          </v-card>
        </v-col>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Ho.vue"
};
</script>

<style scoped>
.navp {
  margin-top: 1rem;
  width: 50rem;
  margin: 0 auto;
}
.text-h4 {
  text-decoration: none;
  color: black;
}
.spans {
  width: 8.6rem;
  height: 0.5rem;
  background-color: #437fff;
  display: block;
  /*margin-left: 8rem;*/
}
.routerp {
  width: 33.33333%;
}
#spaces {
  width: 2rem;
}
</style>
