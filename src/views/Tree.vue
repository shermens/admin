<template>
<v-container>
  <v-row class="" justify="center">
      <v-col cols="12" class="setp text-center">
        <v-card class="text-h4" flat>
        온-나라 회의 시스템관리<br/>페이지 목록
        </v-card>
      </v-col>
        <v-col cols="3">
        <v-card>
          <table>
            <tr>
              <th>
                기획서 NO.
              </th>
              <th>
                화면 목록
              </th>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <router-link to="user">사용자관리
                </router-link>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <router-link to="userreg">사용신청등록
                </router-link>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <router-link to="userinfo">사용자관리/상세정보
                </router-link>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <router-link to="useredit">사용자관리/상세정보/수정
                </router-link>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <router-link to="common">공통코드관리
                </router-link>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <router-link to="comnew">공통코드관리/신규등록
                </router-link>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <router-link to="cominfo">공통코드관리/상세정보
                </router-link>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>
                <router-link to="comedit">공통코드관리/상세정보/수정
                </router-link>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>
                <router-link to="institute">기관코드관리
                </router-link>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>
                <router-link to="instireg">기관코드관리/신규등록
                </router-link>
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>
                <router-link to="Instiinfo">기관코드관리/상세정보
                </router-link>
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>
                <router-link to="multi">다자간시스템관리
                </router-link>
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>
                <router-link to="ho">호처리서버관리/서버상태
                </router-link>
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>
                <router-link to="hoinfo">호처리서버관리/호출정보
                </router-link>
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td>
                <router-link to="hoinfonew">호처리서버관리/호출정보/신규등록
                </router-link>
              </td>
            </tr>
            <tr>
              <td>22</td>
              <td>
                <router-link to="hoinfod">호처리서버관리/호출정보/상세정보
                </router-link>
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>
                <router-link to="reginfo">호처리서버관리/Registered정보
                </router-link>
              </td>
            </tr>
          </table>
        </v-card>
        </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "Tree.Vue"
};
</script>

<style scoped>
.v-application a{
  text-decoration: none;
  color: black;
}
.setp {
  margin-top: 2rem;
}
::v-deep table th{
  padding: 10px;
  border-bottom: 1px solid #e3e3e3;
}
table th:nth-child(2) {
  width: 700px;
  text-align: left;
}
::v-deep table td:nth-child(1){
  padding: 10px;
  width: 400px;
  text-align: center;
  border-bottom: 1px solid #e3e3e3;
}
::v-deep table td:nth-child(2){
  padding: 10px;
  width: 400px;
  text-align: left;
  border-bottom: 1px solid #e3e3e3;
}
</style>
