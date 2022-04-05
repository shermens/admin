<template>
  <v-form>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
<!--          <v-card flat class="text-h5 font-weight-bold"> 상세정보 </v-card>-->
<!--          <v-divider class="border1 mt-3"></v-divider>-->
          <v-row class="pt-3">
            <v-col class="d-flex align-baseline pt-0" cols="12">
              <div class="inputti ml-16 font-weight-bold pt-5">
                그룹코드
              </div>
              <span class="infod justify-center">CCA</span>
              <v-divider vertical></v-divider>
              <div class="inputti ml-16 font-weight-bold">
                그룹코드명
              </div>
              <span class="infod">사용자관리</span>
              <v-spacer></v-spacer>
            </v-col>
          </v-row>
          <v-divider class="dividel"></v-divider>
        </v-col>
        <v-col class="d-flex justify-end align-bt" cols="12">
        </v-col>

        <v-col class="tablec" cols="12">
          <table class="tables">
            <th>
              코드번호
            </th>
            <th>
              코드명
            </th>
            <th>
              사용유무
            </th>
            <tr>
              <td>01</td>
              <td><span class="infod">일반사용자</span></td>
              <td>
              <span class="infod text-center">사용</span>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td><span class="infod">시스템관리자</span></td>
              <td>
                <span class="infod text-center">사용</span>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td><span class="infod">사용종료</span></td>
              <td>
                <span class="infod text-center">사용</span>
              </td>
            </tr>
          </table>
          <v-divider class="dividel" />
        </v-col>

        <v-col cols="12">
          <v-divider class="dividel" />
        </v-col>
        <div class="bt-set">
          <router-link to="comedit">
          <v-btn
            class="mr-5 mt-1 bts text-h6 font-weight-bold primary"
            depressed
            dark
          >수정</v-btn
          ></router-link>
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
</template>

<script>
export default {
  name: "ComNew",
  data() {
    return {
      institution: "admin",
      switch1: false,
      files: null
    };
  },
  methods: {
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
.tables th:nth-child(3) {
  width: 20%;
}
.tablec {
  height: 30rem;
}
.infod {
  width: 20rem;
  height:2.5rem;
  text-align: center;
}
</style>
