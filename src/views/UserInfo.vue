<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">
                이름
              </div>
              <div class="input-box">
                박수영
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">
                ID / PW
              </div>
              <div id="" class="d-flex">
                <span class="textp">young</span>
                <span class="pl-3 align-self-center">/</span>
                <v-btn
                  @click="pwini"
                  depressed
                  dark
                  class="ml-5 secondary align-self-baseline"
                >비밀번호 초기화</v-btn>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti font-weight-bold">
                기관명
              </div>
              <div class="d-flex input-box pb-1">
                한국지능정보사회진흥원
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold"
              >본부명</div>
              <div class="input-box">
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">부서1</div>
              <div class="input-box pb-3">

              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">
                부서2
              </div>
              <div class="input-box ">
                디지털정부사업팀
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold"
              >직책</div>
              <div class="input-box ">
                책임
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">E-MAIL</div>
              <div class="input-box ">
                young@nia.or.kr
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">연락처</div>
              <div class="input-box ">
                010-1234-5678
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-col>
        <div class="bt-set">
          <router-link to="/useredit"><v-btn
            class="mr-5 mt-1 bts text-h6 font-weight-bold"
            depressed
            color="#007dff"
            dark
          >수정</v-btn
          ></router-link>
          <v-btn
            class="mr-5 mt-1 bts text-h6 font-weight-bold"
            depressed
            color="#007dff"
            dark
          >사용종료</v-btn
          >
          <router-link to="user" class="text-decoration-none">
          <v-btn
            outlined
            class="bts2 mt-1 text-h6 font-weight-bold"
            depressed
            color="#007dff"
          >닫기</v-btn
          ></router-link>
        </div>
        <v-col cols="12" class="">
          <div >
            <v-file-input
              v-bind:class="{ 'd-none' : !switch1 }"
              v-model="files"
              color="deep-purple accent-4"
              counter
              label="파일찾기"
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple accent-4"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="text-overline grey--text text--darken-3 mx-2"
                >
                +{{ files.length - 2 }} File(s)
              </span>
              </template>
            </v-file-input>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "UserReg",
  data() {
    return {
      institution: "admin",
      switch1: false,
      files: null
    };
  },
  methods: {
    pwini: function() {
      alert('비밀번호가 onnara 로 초기화 되었습니다.')
    }
  },
  watch: {},
};
</script>

<style scoped>
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
.textp {
  padding-top: 0.4rem;
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
