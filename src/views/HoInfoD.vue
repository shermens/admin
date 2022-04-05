<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
<!--          <v-card flat class="text-h5 font-weight-bold"> 상세정보 </v-card>-->
<!--          <v-divider class="mt-3 border1 black"></v-divider>-->
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                IP
              </div>
              <div class="input-box">
                10.47.72.83
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                호출번호
              </div>
              <div class="input-box">10000120
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                호출비밀번호
              </div>
              <div id="" class="d-flex input-box">
                <div class="d-flex input-box">
                  <template v-if="pwshow">
                    <input class="inputs" ref='cursor'>
                  <v-btn
                    @click="pwconfirm"
                    depressed
                    color="secondary"
                    class="btp ml-2"
                  >변경</v-btn>
                  </template>
                  <template v-if="pwchange">
                    <v-btn
                      depressed
                      color="secondary"
                      class="btp"
                      @click="changePw"
                    >비밀번호 변경</v-btn>
                  </template>
                </div>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">Zone</div>
              <div class="input-box">Internal
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-col>
        <div class="bt-set">

          <!--          <v-btn-->
          <!--            class="mr-5 mt-1 bts text-h6 font-weight-bold"-->
          <!--            depressed-->
          <!--            color="#007dff"-->
          <!--            dark-->
          <!--            >대량등록</v-btn-->
          <!--          >-->
          <v-btn
            @click="delHo"
            class="mr-5 mt-1 bts text-h6 font-weight-bold"
            depressed
            color="#007dff"
            dark
          >삭제</v-btn
          >
          <router-link to="hoinfo" class="text-decoration-none">
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
  name: "UserD",
  // directives: {focus: {
  //     inserted:function(el) {
  //       el.focus()
  //     }
  //   }},
  data() {
    return {
      institution: "admin",
      switch1: false,
      files: null,
      pwshow: false,
      pwchange: true
    };
  },
  methods: {
    changePw: function() {
      this.pwshow = true;
      this.pwchange = false;
      setTimeout(() => this.$refs.cursor.focus() , 0);
    },
    delHo: function() {
      alert("삭제하였습니다.")
    },
    pwconfirm: function() {
      alert("비밀번호를 변경했습니다.")
    }
  },
  watch: {},
};
</script>

<style scoped>
.border1 {
  margin-top: 5px;
  border: 2px solid;
}
.inputti {
  text-align: center;
  width: 200px;
}
.input-box {
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
.inputs {
  border: 1px solid black;
  align-self: self-start;
}
.btp {
  height: 27px !important;
}
.rows {
  height: 5rem;
}
</style>
