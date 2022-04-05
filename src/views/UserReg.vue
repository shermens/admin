<template>
  <v-container>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
    <v-form @submit.prevent="sendForm" >
      <v-row justify="center">
        <v-col cols="12">
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">
                이름 <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                    v-slot="{ errors }"
                    name="이름"
                  :rules="{
                    required: true,
                     max: 15
                  }">
                <v-text-field
                  v-model="form.name"
                  clearable
                  id="name"
                  type="text"
                  ref="name"
                  value=""
                  :counter="20"
                  outlined
                  hide-details
                  dense
                  class=""
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
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">
                ID / PW <span style="color: red">*</span>
              </div>
              <div id="id-pw" class="d-flex">
                <validation-provider
                    v-slot="{ errors }"
                    name="Id"
                    :rules="{
                    required: true,
                     max: 15
                  }">
                    <v-text-field
                      clearable
                      id-="id"
                      type="id"
                      ref="id"
                      v-model="form.id"
                      :counter="10"
                      value=""
                      placeholder="ID"
                      outlined
                      dense
                      class=""
                      hide-details
                      required
                      :error-messages="errors"
                    ></v-text-field>
                </validation-provider>
                <span class="pl-3 align-self-center">/</span>
                <validation-provider
                    v-slot="{ errors }"
                    name="Password"
                    :rules="{
                    required: true,
                     max: 15
                  }">
                  <v-text-field
                    id="password"
                    type="password"
                    ref="password"
                    v-model="form.password"
                    :counter="10"
                    placeholder="비밀번호"
                    outlined
                    clearable
                    dense
                    class="pl-3"
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
              <div class="inputti font-weight-bold">
                기관명 <span style="color: red">*</span>
              </div>
              <div class="d-flex input-box">
                <v-radio-group
                  v-model="form.institution"
                  row
                  dense
                  hide-details
                  class="mt-1"
                >
                  <v-radio label="행정기관" value="gov"> </v-radio>
                  <v-radio label="공공기관" value="corp"> </v-radio>
                </v-radio-group>
                <validation-provider
                    v-slot="{ errors }"
                    name="기관명"
                    :rules="{
                    required: true
                  }">
                <v-select
                    v-model="form.instiSelected"
                  placeholder="선택하세요"
                    :items="items"
                  outlined
                  dense
                  id="st1"
                  class=""
                  hide-details
                  required
                  :error-messages="errors"
                ></v-select>
                </validation-provider>
              </div>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="rows">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">본부명</div>
              <div class="input-box">
                <v-text-field
                  v-model="form.hq"
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
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">부서1</div>
              <div class="input-box">
                <v-text-field
                  v-model="form.depart1"
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
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">
                부서2 <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                    v-slot="{ errors }"
                    name="depart2"
                    :rules="{
                    required: true,
                     max: 15
                  }">
                <v-text-field
                    v-model="form.depart2"
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
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">직책</div>
              <div class="input-box">
                <v-text-field
                  v-model="form.position"
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
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">E-MAIL</div>
              <div class="input-box">
                <v-text-field
                  v-model="form.email"
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
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti font-weight-bold">연락처</div>
              <div class="input-box">
                <v-text-field
                  v-model="form.phone"
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
        </v-col>
        <v-col class="bt-set" cols="auto">
          <v-switch
            v-model="switch1"
            inset
            class="stext"
            label="대량등록"
          ></v-switch>
          <v-btn
            type="submit"
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
        </v-col>
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
              <router-link to="usermass" class="text-decoration-none">
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
              <span class="">1.&nbsp;&nbsp;&nbsp;&nbsp; 사용자가 공문으로 신청한 신청정보를 확인한다.</span><br/>
              2.&nbsp;&nbsp;&nbsp;&nbsp; 신청정보 엑셀파일을 CSV파일로 저장한다. (파일형식 CSV UTF-8(쉼표로<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;분리)(*.csv) 를 반드시 선택)<br/>
              3.&nbsp;&nbsp;&nbsp;&nbsp; 파일찾기 버튼을 클릭하고 기관코드.csv 파일을 선택한다.<br/>
              4.&nbsp;&nbsp;&nbsp;&nbsp; 업로드 버튼을 클릭한다.
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
      switch1: false,
      files: null,
      items: ['대통령비서실', '국가안보실', '국가정보원'],
      help: false,
      form:{
        name: '',
        id: '',
        password: '',
        institution: "gov",
        instiSelected: '',
        hq: '',
        depart1: '',
        depart2: '',
        position: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    fsave: function() {
      alert('등록 되었습니다.')
    },
    // signIn () {
    //   this.$refs.observer.validate().then(result => {
    //     if (result) {
    //       alert('로그직 로직')
    //     }
    //   })
    // },

    // async sendForm() {
    //   this.$refs.observer.validate()
    //   // const result = await this.$refs.observer.validate()
    //   // if (result) {
    //   //   alert(result)
    //   // }
    //   var nid = this.$refs.id.value;
    //   // alert(JSON.stringify(id))
    //   var password = this.$refs.name.value;
    //   console.log(JSON.stringify(password))
    //   await this.$http.get('/test.php', {
    //     id: nid,
    //     name: name,
    //   }).then(function(response) {
    //     console.log(response)
    //   }).catch(error => {
    //     console.log(error.response);
    //   });
    // },

    // sendForm: function () {
    //   this.$refs.observer.validate().then(result => {
    //     this.sendForm2();
    //   })
    // }

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
.inputti {
  text-align: center;
  padding-bottom: 0.5rem;
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
  /*margin-left: 270px;*/
  margin-left: 15rem;
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
.rows {
  height: 5rem;
  align-items: center;
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
  max-width: 650px !important;
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
