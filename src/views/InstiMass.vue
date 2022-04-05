<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">

          <v-data-table
            :headers="headers"
            :items="companies"
            :page.sync="page"
            :search.sync="search"
            :items-per-page="itemsPerPage"
            class="pt-3"
            outlined
            :hide-default-footer="true"
            @page-count="pageCount = $event"
          >
            <template #item.no="{ item }">
<!--              <router-link :to="{ no: 'company', params: { id: item.id } }">-->
                <div class="d-flex justify-center">
                {{ item.no }}
                </div>
<!--              </router-link>-->
            </template>
            <template #item.institute="{ item }">
                <div class="d-flex justify-left">
                {{ item.institute }}
                </div>
            </template>
            <template #item.depart="{ item }">
<!--              <a target="_blank" :href="`mailto:${item.depart}`">-->
                <div class="d-flex justify-left">
                {{ item.depart }}
                </div>
<!--              </a>-->
            </template>
            <template #item.username="{ item }">
              <router-link to="/userinfo">
                <div class="d-flex justify-center font-weight-bold">
                {{ item.username }}
                </div>
              </router-link>
            </template>
            <template #item.recent="{ item }">
<!--              <router-link to="/userinfo">-->
                <div
                  class="d-flex justify-center"
                  v-bind:style="{ color : validColor }"
                >
                  {{ item.recent }}
                </div>
<!--              </router-link>-->
            </template>
          </v-data-table>
<!--          <div class="d-flex justify-center">-->
<!--            <v-pagination-->
<!--              v-model="page"-->
<!--              :length="pageCount"-->
<!--              :total-visible="10"-->
<!--              class="psize mt-5 elevation-0"-->
<!--            ></v-pagination>-->
<!--              <div class="mt-5">-->
<!--                페이지-->
<!--                <input-->
<!--                  v-model="page"-->
<!--                  style="border: 1px solid black"-->
<!--                  class="text-center inputs"-->
<!--                  v-on:click="jumpPage"-->
<!--                >-->
<!--                이동-->
<!--            </div>-->
<!--          </div>-->
        <v-col class="" cols="12">
          <div class="bt-set">
          <v-btn
            type="submit"
            class="mr-5 mt-1 bts text-h6 font-weight-bold"
            depressed
            color="#007dff"
            dark
            @click="isvalidColor"
          >저장</v-btn
          >
          <router-link to="instireg" class="text-decoration-none">
            <v-btn
              outlined
              class="bts2 mt-1 text-h6 font-weight-bold"
              depressed
              color="#007dff"
            >닫기</v-btn
            ></router-link>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InstiMass",
  components: {
  },
  data() {
    return {
      validColor: 'black',
      isFault: true,
      items: [ 10, 20, 50 ],
      search: '',
      page: 1,
      pageCount: 0,
      selectedValue: '',
      itemsPerPage: 10,
      belong: 1,
      bean: null,
      companies: [
        {
          no: "5",
          institute: "1051000",
          depart: "기획재정부",
          username: "",
          location: "국가행정조직 중앙행정기관 부",
          recent: "차수 미등록",
          id:"test"
        },
        {
          no: "4",
          institute: "1192000",
          depart: "해양수산부",
          username: "A",
          location: "국가행정조직 중앙행정기관 부",
          recent: "차수 오류"
        },
        {
          no: "3",
          institute: "1250000",
          depart: "통일부",
          username: "1",
          location: "국가행정조직 중앙행정기관 부",
          recent: "폐지구분 오류"
        },
        {
          no: "2",
          institute: "1262000",
          depart: "외교부",
          username: "1",
          location: "국가행정조직 중앙행정기관 부",
          recent: "정상"
        },
        {
          no: "1",
          institute: "1270000",
          depart: "법무부",
          username: "1",
          location: "국가행정조직 중앙행정기관 도",
          recent: "기관유형 오류"
        },

      ],
    };
  },
  computed: {
    headers() {
      return [
        { text: "NO", value: "no", sortable: false, align: "center"},
        { text: "대표기관코드", value: "institute", sortable: false, align: "center"},
        { text: "전체기관명", value: "depart", sortable: false, align: "center"},
        { text: "차수", value: "username", sortable: false, align: "center"},
        { text: "기관유형", value: "location", sortable: false, align: "center"},
        { text: "오류확인", value: "recent", sortable: false, align: "center"},
      ];
    },
  },
  methods: {
    jumpPage: function() {
      console.log('누름!')
      this.page = this.bean
    },
    // rowchange: function() {
    //   // alert('로우 변경' + this.rowsPerPage.value + '!')
    //   this.itemsPerPage =
    //      console.log(this.itemsPerPage)
    //      // this.itemsPerPage = this.rowsPerPage.value;
    //      // if (event) {
    //      // alert(event.target.tagName)
    //    }
    rowchange: function() {
      console.log(this.selectedValue);
      this.itemsPerPage = this.selectedValue
    },
    isThisFault: function() {
      return true;
    },
    isvalidColor: function() {
        this.validColor = 'red';
      }
    }
}
</script>

<style scoped>
::v-deep table { border-top: 1px solid #000; border-bottom: 1px solid #D1D1D1;}
::v-deep table thead th { font-size: 18px !important; border-top: 3px solid #000; color: black !important; background-color: #e5f2ff!important;}
::v-deep table td { font-size: 18px !important; }
.v-application a{
  text-decoration: none;
  color: black;
}
#search {
  padding-top: 0;
  padding-bottom: 0;
}
.psize {
  width: 33rem;
}
.inputs {
  width: 50px;
  height: 30px;
  margin-top: 0.5rem;
  background-color: rgba(136,194,255,0.3);
  border-radius: 5px;
  border-color: #88c2ff !important;
}
::v-deep .v-pagination__item {
  box-shadow: none;
}
::v-deep .v-pagination__navigation {
  box-shadow: none;
}
.bt-set {
  width: 20rem;
  margin: 0 auto;
  /*margin-left: 270px;*/
  /*margin-left: 15rem;*/
}
.bts {
  width: 150px;
  height: 50px !important;
}
.bts2 {
  width: 150px;
  height: 50px !important;
}
</style>
