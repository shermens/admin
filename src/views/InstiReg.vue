<template>
  <v-container>
    <validation-observer
        ref="observer"
        v-slot="{ invalid }"
    >
      <v-form @submit.prevent="sendForm" >
      <v-row justify="center">
        <v-col cols="12">
<!--          <v-card flat class="text-h5 font-weight-bold"> 신규등록 </v-card>-->
<!--          <v-divider class="mt-3 border1 black"></v-divider>-->
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                대표기관코드 <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                    v-slot="{ errors }"
                    name="masterCode"
                    :rules="{
                    required: true,
                     max: 15
                  }">
                <v-text-field
                  v-model="form.masterCode"
                  outlined
                  dense
                  class=""
                  hide-details
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
              <div class="inputti ml-16 font-weight-bold">
                전체기관명 <span style="color: red">*</span>
              </div>
              <div id="id-pw" class="input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="fullName"
                  :rules="{
                    required: true,
                     max: 15
                  }">
                <v-text-field
                  v-model="form.fullName"
                  :counter="10"
                  outlined
                  dense
                  class=""
                  hide-details
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
              <div class="inputti ml-16 font-weight-bold">
                차수 <span style="color: red">*</span>
              </div>
              <div class="selecs">
               <v-select
                 v-model="form.depth"
                 :items="nth"
                 dense
                 hide-details
                 outlined
               >
               </v-select>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">서열<span style="color: red"> *</span>
              </div>
              <div class="input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="rank"
                  :rules="{
                    required: true,
                     max: 15
                  }">
                <v-text-field
                  v-model="form.rank"
                  :counter="10"
                  outlined
                  dense
                  class=""
                  hide-details
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
              <div class="inputti ml-16 font-weight-bold">최상위기관코드 <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="topCode"
                  :rules="{
                    required: true,
                     max: 30
                  }">
                  <v-text-field
                  v-model="form.topCode"
                  :counter="10"
                  outlined
                  dense
                  class=""
                  hide-details
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
              <div class="inputti ml-16 font-weight-bold">
                기관코드 <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="instiCode"
                  :rules="{
                    required: true,
                     max: 30
                  }">
                  <v-text-field
                  v-model="form.instiCode"
                  :counter="10"
                  outlined
                  dense
                  class=""
                  hide-details
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
              <div class="inputti ml-16 font-weight-bold">기관유형<span style="color: red">*</span>
              </div>
              <div class="d-flex input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="instiType1"
                  :rules="{
                    required: true
                  }">
                <v-select
                  v-model="form.instiType1"
                  :items="insti1"
                  dense
                  hide-details
                  outlined
                  placeholder="1. 선택하세요"
                  :error-messages="errors"
                >
                </v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="instiType2"
                  :rules="{
                    required: true
                  }">
                <v-select
                  v-model="form.instiType2"
                  :items="insti2"
                  dense
                  hide-details
                  outlined
                  placeholder="2. 선택하세요"
                  class="ml-1"
                  :error-messages="errors"
                >
                </v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="instiType3"
                  :rules="{
                    required: true
                  }">
                <v-select
                  v-model="form.instiType3"
                  :items="insti3"
                  dense
                  hide-details
                  outlined
                  placeholder="3. 선택하세요"
                  class="ml-1"
                  :error-messages="errors"
                >
                </v-select>
                </validation-provider>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">폐지구분 <span style="color: red">*</span>
              </div>
              <div class="pb-3">
                <v-radio-group
                  v-model="form.destroy"
                  row
                  dense
                  hide-details
                  class=""
                >
                  <v-radio label="현존" value="Y"> </v-radio>
                  <v-radio label="폐지" value="N"> </v-radio>
                </v-radio-group>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-col>
        <div class="bt-set">
          <v-switch
            v-model="switch1"
            inset
            class="stext"
            label="대량등록"
          ></v-switch>
<!--          <v-btn-->
<!--            class="mr-5 mt-1 bts text-h6 font-weight-bold"-->
<!--            depressed-->
<!--            color="#007dff"-->
<!--            dark-->
<!--            >대량등록</v-btn-->
<!--          >-->
          <v-btn
            @click="sendForm"
            id="tcolor"
            class="mr-5 mt-1 bts text-h6 font-weight-bold"
            depressed
            color="#007dff"
            :disabled="invalid"
            >저장</v-btn
          ><router-link to="institute" class="text-decoration-none">
          <v-btn
            outlined
            class="bts2 mt-1 text-h6 font-weight-bold"
            depressed
            color="#007dff"
            >닫기</v-btn
          ></router-link>
        </div>
        <v-col cols="12" id="filei" v-bind:class="{'d-none' : !switch1}">
          <div
            v-bind:class="[{ 'd-flex' : switch1, 'justify-center': switch1, 'fiwrap': switch1}]"
          >
            <v-file-input
              v-model="files"
              color="deep-purple accent-4"
              counter
              label="파일찾기"
              multiple
              placeholder="여기를 클릭하여 파일을 선택하세요"
              prepend-icon="mdi-paperclip"
              outlined
              dense
              :show-size="1000"
              accept=".csv"
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
            <div>
              <router-link to="instimass" class="text-decoration-none">
              <v-btn
                depressed
                class="btns ml-3"
              >업로드</v-btn></router-link>
            </div>
            <div>
              <v-btn
                @click="help = !help"
                depressed
                id="btnqs"
              ><v-icon color="grey">mdi-help-circle</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="ml-5"><span>※ 대량등록은 CSV 파일만 가능합니다.</span></div>
        </v-col>
        <v-dialog
          hide-overlay
          v-model="help"
          persistent
          max-width="500"
          id="cards"
          class="cards"
        >
          <v-card>
            <v-alert
              v-model="help"
              border="border"
              color="helpback accent-4"
              dark
              dismissible
            >
              <v-cart-title class="title">
                <v-img
                  id="tiip"
                  width="100"
                  src="../assets/help_ti.png"
                ></v-img>
              </v-cart-title>
            </v-alert>
            <v-card-text id="cardc" class="body-1 black--text">
              1.&nbsp;&nbsp; 행정표준코드관리시스템 https://www.code.go.kr/ 접속
              <br/>
              2.&nbsp;&nbsp; 기관코드를 선택하고 한글기관명에 검색을 원하는 기관명 하나를 입력 후 검색하기 버튼 클릭
              <br/>
              3.&nbsp;&nbsp; 원하는 출력항목 : 차수, 서열, 최상위기관코드, 대표기관코드, 기관유형, 폐지구분 선택.
              <br/>
              4.&nbsp;&nbsp; 기관코드 조회자료 다운로드 버튼을 클릭
              <br/>
              5.&nbsp;&nbsp; 기관코드 조회자료.zip 파일을 내 컴퓨터에서 찾아 압축 풀기
              <br/>
              6.&nbsp;&nbsp; 기관코드 조회자료.xls 파일을 열면 원하는 출력항목 외에 기본으로 기관코드, 전체기관명,
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 최하위기관명, 등록자가 포함되어 있다.
              <br/>
              7.&nbsp;&nbsp; C열인 최하위 기관명과 K열인 등록자 열을 삭제한다.
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (기관코드, 전체기관명, 차수, 서열, 최상위기관코드, 대표기관코드, 기관유형, 폐지구분)
              <br/>
              8.&nbsp;&nbsp; 차수 별로 재정렬 한 후
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 국가행정기관 및 자치행정기관은 1차만 남기고 나머지 행은 삭제 한다.
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 산하기관은 2차만 남기고 나머지 행은 삭제한다.
              <br/>
              9.&nbsp;&nbsp; 파일을 기관코드.csv 로 저장한다. (파일형식 CSV UTF-8(쉼표로 분리)(*.csv) 를 반드시 선택)
              <br/>
              10.&nbsp;파일찾기 버튼을 클릭하고 기관코드.csv 파일을 선택한다.
              <br/>
              11.&nbsp;업로드 버튼을 클릭한다.
            </v-card-text>
          </v-card>
        </v-dialog>
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
      insti1: [ "국가행정조직", '자치행정조직', '산하기관' ],
      insti2: [ "중앙행정기관", '광역자치단체', '정부출연기관' ],
      insti3: [ '선택없음', "부", "처", "청" , '특별시', '직할시', '도', '광역시', '특별자치도', '특별자치시' ],
      form: {
        masterCode: '',
        fullName: '',
        depth: 1,
        rank: '',
        topCode: '',
        instiCode: '',
        instiType1: '',
        instiType2: '',
        instiType3: '',
        destroy: "Y",
      },
      nth: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
      help: false,
      switch1: false,
      files: null
    };
  },
  methods: {
    async sendForm() {
      const result = this.$refs.observer.validate()
      if (result) {
        console.log(result)
      }
      await this.$http.post('/test.php', this.form)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  watch: {},
};
</script>

<style scoped>
.border1 {
  border: 2px solid;
}
.inputti {
  text-align: center;
  width: 200px;
}
.input-box {
  width: 500px;
  height: 50px;
  align-items: center;
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
.stext {
  font-weight: bold;
}
.selecs {
  width: 5rem;
}
/*.instiss {*/
/*  width: 30%;*/
/*}*/
.rows {
  height: 5rem;
  align-items: center;
}
::v-deep .btns.v-btn {
  width: 5rem;
  height: 2.5rem!important;
  background-color: black !important;
  color: white;
}
#filei {
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  background-color: #88c2ff;
  background-color: rgba(136,194,255,0.5);
}
#btnqs.v-btn {
  width: 40px;
  min-width: 40px;
  height: 40px;
  margin-left: 10px;
  background-color: rgba(255,255,255,1) !important;
}
::v-deep .v-dialog.v-dialog--active.v-dialog--persistent {
  max-width: 800px !important;
}
::v-deep .v-alert__border {
  display: none;
}
::v-deep .v-btn--icon.v-size--small .v-icon, .v-btn--fab.v-size--small .v-icon{
  color: black;
}
::v-deep .v-alert{
  margin-bottom: 0!important;
}
#cardc{
  background-color: #f9fff0;
  padding: 0 0 50px 50px;
}
#tiip {
  margin: 20px;
}
::v-deep .v-alert__wrapper {
  align-items: unset;
  justify-content: space-between;
}
::v-deep .v-alert__content {
  max-width: 700px !important;
}
::v-deep .v-alert__dismissible {
  margin: 0 !important;
}
#tcolor {
  color: white;
}
</style>
