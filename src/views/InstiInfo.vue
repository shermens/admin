<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
<!--          <v-card flat class="text-h5 font-weight-bold"> 상세정보 </v-card>-->
<!--          <v-divider class="mt-3 border1"></v-divider>-->
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                대표기관코드
              </div>
              <div class="d-flex input-box">
                1051000
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                전체기관명
              </div>
              <div id="" class="d-flex inputti">
                기획재정부
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                차수
              </div>
              <div class="d-flex input-box">
                1
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">서열</div>
              <div class="input-box">
                018
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">최상위기관코드</div>
              <div class="d-flex input-box">
                1051000
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                기관코드
              </div>
              <div class="d-flex input-box">
                1051000
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">기관유형</div>
              <div class="d-flex input-box">
                국가행정조직 중앙행정기관 부
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">폐지구분</div>
              <div class="d-flex input-box">
                {{ abg }}
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-col>
        <div class="bt-set">

          <v-btn
            @click="fabg"
            class="mr-5 mt-1 bts text-h6 font-weight-bold"
            depressed
            color="#007dff"
            dark
          >폐지</v-btn
          >
          <router-link to="institute" class="text-decoration-none">
          <v-btn
            outlined
            class="bts2 mt-1 text-h6 font-weight-bold"
            depressed
            color="#007dff"
          >닫기</v-btn
          ></router-link>
        </div>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "UserReg",
  data() {
    return {
      abg: "현존",
      institution: "admin",
      switch1: false,
      files: null
    };
  },
  methods: {
    fabg: function() {
      this.abg = "폐지"
      alert("폐지하였습니다.")
    }
  },
  watch: {},
};
</script>

<style scoped>
.border1 {
  margin-top: 5px;
  border: 2px solid black;
}
.inputti {
  text-align: center;
  width: 200px;
}
.input-box {
  width: 500px;
}
#id-pw {
  width: 500px;
}
.bt-set {
  margin: 0 auto;
  margin-left: 270px;
}
.bts {
  width: 150px;
  height: 50px !important;
}
.bts2 {
  width: 150px;
  height: 50px !important;
}

::v-deep input {
  text-align: center;
}
::v-deep #st1 {
  text-align: start !important;
}
.rows {
  height: 5rem;
  align-items: center;
}
</style>
