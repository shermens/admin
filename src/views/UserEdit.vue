<template>
  <v-container>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
    <v-form  @submit.prevent="sendForm" >
      <v-row justify="center">
        <v-col cols="12">
<!--          <v-card flat class="text-h5 font-weight-bold"> 수정 </v-card>-->
<!--          <v-divider class="mt-3 border1 black"></v-divider>-->
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
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
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti font-weight-bold">
                ID / PW
              </div>
              <div id="" class="d-flex inputti">
                young
                <span class="pl-3 ">/</span>
                <span class="pl-5"> **** </span>
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
              <div class="d-flex input-box">
                한국지능정보사회진흥원
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti font-weight-bold">본부명</div>
              <div class="input-box">
                <v-text-field
                  :counter="10"
                  outlined
                  dense
                  class=""
                  hide-details
                  required
                ></v-text-field>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti font-weight-bold">부서1</div>
              <div class="input-box">
                <v-text-field
                  :counter="10"
                  outlined
                  dense
                  class=""
                  hide-details
                  required
                ></v-text-field>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti font-weight-bold">
                부서2 <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="depart2"
                  :rules="{
                    required: true,
                     max: 20
                  }">
                  <v-text-field
                  v-model="depart2"
                  :counter="10"
                  value="디지털정부사업팀"
                  outlined
                  dense
                  hide-details
                  class="textal"
                  required
                  :error-messages="errors"
                ></v-text-field>
                </validation-provider>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti font-weight-bold">직책</div>
              <div class="input-box">
                <v-text-field
                  :counter="20"
                  value="책임"
                  outlined
                  dense
                  class="textal"
                  hide-details
                  required
                ></v-text-field>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti font-weight-bold">E-MAIL</div>
              <div class="input-box">
                <v-text-field
                  :counter="10"
                  value="young@nia.or.kr"
                  outlined
                  dense
                  class="textal"
                  hide-details
                  required
                ></v-text-field>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti font-weight-bold">연락처</div>
              <div class="input-box">
                <v-text-field
                  :counter="10"
                  value="010-1234-5678"
                  outlined
                  dense
                  class="textal"
                  hide-details
                  required
                ></v-text-field>
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
            @click="fsave"
            id="tcolor"
            class="mr-5 mt-1 bts text-h6 font-weight-bold"
            depressed
            color="#007dff"
            :disabled="invalid"
          >저장</v-btn
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
    </v-form>
    </validation-observer>
  </v-container>
</template>

<script>
export default {
  name: "UserReg",
  data() {
    return {
      depart2: '디지털정부사업팀',
      institution: "admin",
      switch1: false,
      files: null
    };
  },
  methods: {
    fsave: function() {
      alert('수정했습니다.')
    },
    sendForm: function () {
      this.$refs.observer.validate().then(result => {
        console.log('결과: ', result)
        if (result) {
          alert('양식제출')
        }
      })
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
::v-deep #st1 {
  text-align: start !important;
}
.rows {
  height: 5rem;
  align-items: center;
}
.textal ::v-deep input {
  text-align: left;
}
#tcolor {
  color: white;
}
</style>
