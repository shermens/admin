<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
  <v-form @submit.prevent="sendForm" >
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
<!--          <v-card flat class="text-h5 font-weight-bold"> 신규등록 </v-card>-->
<!--          <v-divider class="border1 mt-3"></v-divider>-->
          <v-row class="pt-3">
            <v-col class="d-flex align-baseline pt-0" cols="12">
              <div class="inputti ml-16 font-weight-bold pt-5">
                그룹코드
              </div>
              <validation-provider
                v-slot="{ errors }"
                name="groupCode"
                :rules="{
                    required: true,
                     max: 3
                  }">
                <v-text-field
                  v-model="groupCode"
                  :counter="3"
                  outlined
                  dense
                  class="pb-3 pr-16"
                  hide-details
                  required
                  placeholder="대문자 3자리(ex.AAA)"
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>
              <v-divider vertical></v-divider>
              <div class="inputti ml-16 font-weight-bold">
                그룹코드명
              </div>
              <validation-provider
                v-slot="{ errors }"
                name="codeName"
                :rules="{
                    required: true,
                     max: 3
                  }">
                <v-text-field
                  v-model="codeName"
                  :counter="10"
                  outlined
                  dense
                  class="pb-3 pr-16"
                  hide-details
                  required
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider class="dividel"></v-divider>
        </v-col>
        <v-col class="d-flex justify-end align-bt" cols="12">
          <v-btn
            @click="addRow"
            depressed
            class="secondary"
          >코드추가
          </v-btn>
        </v-col>

        <v-col class="tablec" cols="12">
          <table class="tables">
            <thead>
            <td>
              코드번호
            </td>
            <td>
              코드명
            </td>
            <td>
              사용유무
            </td>
            <td>
            </td>
            </thead>
            <tbody v-for="(row, index) in rows" :key="index">
              <tr>
                <td
                >{{row.no1}}</td>
                <td><v-text-field
                  v-model="row.code1"
                  hide-details
                  dense
                  single-line
                  class=""
                  outlined
                ></v-text-field></td>
                <td>
                  <v-radio-group
                  row
                  dense
                  >
                    <v-radio label="사용" value="Y"/>
                    <v-radio label="미사용" value="N"/>
                  </v-radio-group>
                </td>
                <td><v-btn depressed color="white" @click="removeRow(index)"><v-icon color="grey" large>mdi-alpha-x-circle</v-icon></v-btn></td>
              </tr>
            </tbody>
          </table>
        </v-col>

        <v-col cols="12">
        </v-col>
        <div class="bt-set">
          <v-btn
            @click="fsave"
            class="mr-5 mt-1 bts text-h6 font-weight-bold primary"
            depressed
            dark
            :disabled="invalid"
            >저장</v-btn
          >
          <router-link to="common" class="text-decoration-none">
          <v-btn
            outlined
            class="bts2 mt-1 text-h6 font-weight-bold"
            depressed
            color="#307eff"
            >닫기</v-btn
          ></router-link>
        </div>
      </v-row>
    </v-container>
  </v-form>
  </validation-observer>
</template>

<script>
export default {
  name: "ComNew",
  data() {
    return {
      comCode: '',
      groupCode: '',
      codeName: '',
      rows: [{
        no1: "1",
        code1: ""
      }],
      counter: 1,
      useror: [],
      institution: "admin",
      switch1: false,
      files: null
    };
  },
  methods: {
    fsave: function() {
      alert('등록하였습니다.')
    },
    addRow: function() {
      this.counter++;
      console.log("addRow도달");
      // parseInt(this.counter, 10) < 10 ? "0" + this.counter : this.counter;
      console.log(this.counter);
      this.rows.push({no1:this.counter, code1:""});
    },
    removeRow: function(index) {
      console.log("removeRow도달");
      this.rows.splice(index, 1);
    }
  },
}
</script>

<style scoped>
.border1 {
  border: 2px solid black;
}
.justify-end {
  margin-right: 60px
}
.inputti {
  text-align: center;
  width: 200px;
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
.dividel {
  width: 90%;
  margin: 0 auto;
}
.align-bt {
  padding-right: 4.5rem;
}
.tables{
  width: 90%;
  margin: 0 auto;
}
.tables thead {
  height: 3rem;
  line-height: 3rem;
  background-color: #e5f2ff;
}
.tables td {
  text-align: center;
}
.tables tbody td {
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}
.tables td:nth-child(3) {
  text-align: center;
  padding-left: 2rem;
}
.tables thead td:nth-child(3) {
  width: 20%;
}
.tables td:nth-child(4) {
  width: 5%;
}
</style>
