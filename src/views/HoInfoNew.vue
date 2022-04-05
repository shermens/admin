<template>
  <v-container class="conp">
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
    <v-form @submit.prevent="sendForm" >
      <v-row justify="center">
        <v-col cols="12">
<!--          <v-card flat class="text-h5 font-weight-bold"> 신규등록 </v-card>-->
<!--          <v-divider class="mt-3 border1"></v-divider>-->
          <v-row class="pt-3">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                IP <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="ip"
                  :rules="{
                    required: true,
                     max: 20
                  }">
                  <v-text-field
                  v-model="ip"
                  :counter="10"
                  outlined
                  dense
                  class="pb-3"
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
          <v-row class="pt-3">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                호출번호 <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="sip"
                  :rules="{
                    required: true,
                     max: 20
                  }">
                  <v-text-field
                  v-model="sip"
                  outlined
                  dense
                  class="pb-3"
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
          <v-row class="pt-3">
            <v-col class="d-flex align-center" cols="12">
              <div class="inputti ml-16 font-weight-bold">
                호출비밀번호 <span style="color: red">*</span>
              </div>
              <div class="input-box">
                <validation-provider
                  v-slot="{ errors }"
                  name="sippw"
                  :rules="{
                    required: true,
                     max: 20
                  }">
                  <v-text-field
                  v-model="sippw"
                  outlined
                  dense
                  class="pb-3"
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

          <v-row class="pt-3">
            <v-col class="d-flex align-baseline" cols="12">
              <div class="inputti ml-16 font-weight-bold">Zone
              </div>
              <div class="input-box">
                <v-radio-group
                  v-model="institution"
                  row
                  dense
                  hide-details
                  class="mt-1 pb-2"
                >
                  <v-radio label="Internal" value="admin"> </v-radio>
                  <v-radio label="External" value="public"> </v-radio>
                </v-radio-group>
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
            @click="fSave"
            id="tcolor"
            class="mr-5 mt-1 bts text-h6 font-weight-bold"
            depressed
            color="#007dff"
            :disabled="invalid"
            >저장</v-btn>
          <router-link to="hoinfo" class="text-decoration-none">
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
      ip: '',
      sipno: '',
      sippw: '',
      institution: "admin",
      switch1: false,
      files: null
    };
  },
  methods: {
    fSave: function() {
      alert("저장하였습니다.")
    }
  },
  sendForm: function () {
    this.$refs.observer.validate().then(result => {
      console.log('결과: ', result)
      if (result) {
        alert('양식제출')
      }
    })
  },
  watch: {},
};
</script>

<style scoped>
.border1 {
  border: 2px solid black;
}
.inputti {
  text-align: center;
  width: 200px;
}
.input-box {
  width: 500px;
  height: 50px;
}
#id-pw {
  width: 500px;
}
.bt-set {
  margin: 0 auto;
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
  width: 5%;
}
.instiss {
  width: 30%;
}
#tcolor {
  color: white;
}
</style>
