<template>
  <v-form>
    <v-container class="">
      <v-row justify="center">
        <v-col cols="12">
<!--          <v-card flat class="text-h5 font-weight-bold"> 수정 </v-card>-->
<!--          <v-divider class="black border1 mt-3"></v-divider>-->
          <v-row class="pt-3">
            <v-col class="d-flex align-baseline pt-0" cols="12">
              <div class="inputti ml-16 font-weight-bold pt-5">
                그룹코드
              </div>
              <span class="infod justify-center">CCA</span>
              <v-spacer></v-spacer>
              <v-divider vertical></v-divider>
              <div class="inputti ml-16 font-weight-bold">
                그룹코드명
              </div>
              <span class="infod justify-center">사용자관리</span>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider class="dividel"></v-divider>
        </v-col>
        <v-col class="d-flex justify-end align-bt" cols="12">
          <v-btn
            @click="addRow"
            elevation="0"
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
            <td></td>
            </thead>
            <tbody>
            <tr>
              <td>01</td>
              <td>
                <span class="infod justify-center">일반사용자</span>
              </td>
              <td class="d-flex justify-center">
                <v-radio-group
                  v-model="useRadio1"
                  row
                  dense
                >
                  <v-radio label="사용" :value="1" />
                  <v-radio label="미사용" :value="2" />
                </v-radio-group>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>
                <span class="infod justify-center">일반사용자</span>
              </td>
              <td class="d-flex justify-center">
                <v-radio-group
                  v-model="useRadio2"
                  row
                  dense
                >
                  <v-radio label="사용" :value="1" />
                  <v-radio label="미사용" :value="2" />
                </v-radio-group>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>
                <span class="infod justify-center">일반사용자</span>
              </td>
              <td class="d-flex justify-center">
                <v-radio-group
                  v-model="useRadio3"
                  row
                  dense
                >
                  <v-radio label="사용" :value="1" />
                  <v-radio label="미사용" :value="2" />
                </v-radio-group>
              </td>
            </tr>
            </tbody>
            <tbody  v-for="(row, index) in rows" :key="index">
            <tr>
              <td>{{row.no1}}</td>
              <td>
                <div class="d-flex justify-center">
                <v-text-field
                  hide-details
                  dense
                  single-line
                  outlined
                ></v-text-field>
                </div>
              </td>
              <td class="d-flex justify-center">
                <v-radio-group
                  v-model="useRadio1"
                  row
                  dense
                >
                  <v-radio label="사용" :value="1" />
                  <v-radio label="미사용" :value="2" />
                </v-radio-group>
              </td>
              <td><v-btn depressed color="white" @click="removeRow(index)"><v-icon color="grey" large>mdi-alpha-x-circle</v-icon></v-btn></td>
            </tr>
            </tbody>
          </table>
          <v-divider class="dividel" />
        </v-col>

        <v-col cols="12">
        </v-col>
        <div class="bt-set">
          <v-btn
            @click="fsave"
            class="mr-5 mt-1 bts text-h6 font-weight-bold primary"
            depressed
            dark
          >저장</v-btn
          ><router-link to="common" class="text-decoration-none">
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
</template>

<script>
export default {
  name: "ComNew",
  data() {
    return {
      rows: [{
        no1: "1",
        code1: ""
      }],
      counter: 1,
      useRadio1: 1,
      useRadio2: 1,
      useRadio3: 1,
      institution: "admin",
      switch1: false,
      files: null
    };
  },
  methods: {
    fsave: function() {
      alert('수정 되었습니다.')
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
  watch: {},
};
</script>

<style scoped>
.justify-end {
  margin-right: 70px
}
.border1 {
  border: 2px solid black;
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
.tables th {
  height: 3rem;
  line-height: 3rem;
  background-color: #e5f2ff;
}
.tables td {
  text-align: center;
  height: 3rem;
  border-bottom: 1px solid #eaeaea;
}
.tables td:nth-child(2) {
  width: 50%;
}
.tables td:nth-child(2) ::v-deep .v-input {
  width: 80%;
}
.tables th:nth-child(3) {
  width: 50%;
}
/*.tablec {*/
/*  height: 20rem;*/
/*}*/
.infod {
  width: 20rem;
  height:2.5rem;
  text-align: center;
}
</style>
