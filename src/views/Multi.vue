<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
<!--        <v-card flat class="mb-5 text-h5 text-decoration-underline"> 사용자 관리 </v-card>-->
        <v-card class="mt-1" flat>
          <v-card-title id="search">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              label="검색어를 입력해주세요."
              append-icon="mdi-magnify"
              hide-details
              dense
              single-line
              class="mr-3"
              outlined
            ></v-text-field>
            <v-btn
              outlined
              class="mr-1 btns"
              @click="reload"
            ><v-icon>mdi-refresh</v-icon></v-btn>
            <v-col
              class="d-flex"
              cols="1"
            >
        <v-select
              :items="items"
              v-model="selectedValue"
              label="10개"
              hide-details
              dense
              single-line
              class="mr-3"
              outlined
              @change="rowchange()"
        >
          <template #item="{ item }">
            {{ item }}
          </template>
        </v-select>
      </v-col>
<!--            <v-btn color="blue" rounded outlined dark>신규등록<v-icon>mdi-arrow-right-thin</v-icon></v-btn>-->
          </v-card-title>
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
            <template #item.name="{ item }">
                <div class="d-flex justify-center">
                {{ item.name }}
                </div>
            </template>
            <template #item.phone="{ item }">
                <div v-html="item.phone" class="d-flex justify-left">
<!--                {{ item.phone }}-->
                </div>
            </template>
            <template #item.email="{ item }">
                <div class="d-flex justify-left">
                {{ item.email }}
                </div>
            </template>
            <template #item.website="{ item }">
                <div class="d-flex justify-center">
                {{ item.website }}
                </div>
            </template>
            <template #item.location="{ item }">
                <v-btn
                  @click="addMulti"
                  depressed
                  color="primary"
                  rounded
                >
                  {{ item.location }}
                  <v-icon>mdi-arrow-right-thin</v-icon>
                </v-btn>
            </template>
          </v-data-table>
            <v-pagination
            v-model="page"
            :length="pageCount"
            :total-visible="7"
            class="mt-5"
          ></v-pagination>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "User",
  components: {
  },
  data() {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      items: [ '10개', '20개', '30개'],
      selectedValue: '',
      itemsPerPage: 10,
      belong: 1,
      companies: [
        {
          name: "5",
          phone: "<span class='text-left'>실국장회의<br/>(행정안전부 스마트서비스과 박희수)</span>",
          email: "40002805",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "4",
          phone: "확대간부회의",
          email: "40002793",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "3",
          phone: "상황점검회의",
          email: "4002802",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "2",
          phone: "실적보고서 평가회의",
          email: "40002803",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "1",
          phone: "현안점검회의",
          email: "40002806",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "5",
          phone: "<span class='text-left'>실국장회의<br/>(행정안전부 스마트서비스과 박희수)</span>",
          email: "40002805",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "4",
          phone: "확대간부회의",
          email: "40002793",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "3",
          phone: "상황점검회의",
          email: "4002802",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "2",
          phone: "실적보고서 평가회의",
          email: "40002803",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "1",
          phone: "현안점검회의",
          email: "40002806",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },{
          name: "5",
          phone: "<span class='text-left'>실국장회의<br/>(행정안전부 스마트서비스과 박희수)</span>",
          email: "40002805",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "4",
          phone: "확대간부회의",
          email: "40002793",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "3",
          phone: "상황점검회의",
          email: "4002802",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "2",
          phone: "실적보고서 평가회의",
          email: "40002803",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "1",
          phone: "현안점검회의",
          email: "40002806",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },{
          name: "5",
          phone: "<span class='text-left'>실국장회의<br/>(행정안전부 스마트서비스과 박희수)</span>",
          email: "40002805",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "4",
          phone: "확대간부회의",
          email: "40002793",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "3",
          phone: "상황점검회의",
          email: "4002802",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "2",
          phone: "실적보고서 평가회의",
          email: "40002803",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "1",
          phone: "현안점검회의",
          email: "40002806",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },{
          name: "5",
          phone: "<span class='text-left'>실국장회의<br/>(행정안전부 스마트서비스과 박희수)</span>",
          email: "40002805",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "4",
          phone: "확대간부회의",
          email: "40002793",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "3",
          phone: "상황점검회의",
          email: "4002802",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "2",
          phone: "실적보고서 평가회의",
          email: "40002803",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "1",
          phone: "현안점검회의",
          email: "40002806",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },{
          name: "5",
          phone: "<span class='text-left'>실국장회의<br/>(행정안전부 스마트서비스과 박희수)</span>",
          email: "40002805",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "4",
          phone: "확대간부회의",
          email: "40002793",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "3",
          phone: "상황점검회의",
          email: "4002802",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "2",
          phone: "실적보고서 평가회의",
          email: "40002803",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "1",
          phone: "현안점검회의",
          email: "40002806",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },{
          name: "5",
          phone: "<span class='text-left'>실국장회의<br/>(행정안전부 스마트서비스과 박희수)</span>",
          email: "40002805",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "4",
          phone: "확대간부회의",
          email: "40002793",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "3",
          phone: "상황점검회의",
          email: "4002802",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "2",
          phone: "실적보고서 평가회의",
          email: "40002803",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },
        {
          name: "1",
          phone: "현안점검회의",
          email: "40002806",
          website: "2022-01-11 15:35:27",
          location: "추가",
        },


      ],
    };
  },
  computed: {
    headers() {
      return [
        { text: "NO", value: "name", sortable: false, align: "center"},
        { text: "회의제목", value: "phone", sortable: false, align: "center"},
        { text: "호출번호", value: "email", sortable: false, align: "center"},
        { text: "개설시간", value: "website", sortable: false, align: "center"},
        { text: "", value: "location", sortable: false, align: "center"},
      ];
    },
  },
  methods: {
    addMulti: function () {
      alert("다자간회의실이 생성되었습니다.")
    },
    rowchange: function() {
      console.log(this.selectedValue);
      let str = this.selectedValue;
      this.itemsPerPage = str.substr(0, 2)
    },
    reload: function() {
      location.reload()
      alert('화면을 새로고침했습니다')
    }
}
}
</script>

<style scoped>
::v-deep table { border-top: 1px solid #000; border-bottom: 1px solid #D1D1D1;}
::v-deep table a { color: black; text-decoration: none;}
::v-deep table thead th { font-size: 16px !important; border-top: 3px solid #000;  color: black !important; background-color: #e5f2ff;}
::v-deep table td { font-size: 18px !important; }
::v-deep table th:nth-child(2) { width: 50%; }
::v-deep table th:nth-child(3) { width: 15%; }
::v-deep table th:nth-child(4) { width: 20%; }
::v-deep table td:nth-child(4) { font-size: 16px !important; }
#search {
  padding-top: 0;
  padding-bottom: 0;
}
.tables th:nth-child(1) {
  width: 20%;
}
.conts {
  height: 100%;
}
.btns {
 height: 40px !important;
  border-color: rgba(0, 0, 0, 0.42);
}
::v-deep .v-pagination__item {
  box-shadow: none;
}
::v-deep .v-pagination__navigation {
  box-shadow: none;
}
</style>
