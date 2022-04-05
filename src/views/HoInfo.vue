<template>
  <v-container class="">
    <v-row justify="center">
      <v-col
          cols="12"
          class="navp py-13 text-center d-flex justify-center"
      >
        <div><router-link class="text-h4 routerp" to="/ho">서버상태</router-link></div>
        <div class="px-16"><router-link class="text-h4 font-weight-bold" to="/hoinfo">호출정보<span class="spans"></span></router-link></div>
        <div><router-link class="text-h4" to="/reginfo">Registered정보</router-link></div>
      </v-col>
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
            <v-col
        class="d-flex"
        cols="1"
      >
        <v-select
              v-model="selectedValue"
              :items="items"
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
            <router-link to="hoinfonew" class="text-decoration-none">
            <v-btn color="blue" rounded outlined dark>신규등록<v-icon>mdi-arrow-right-thin</v-icon></v-btn>
            </router-link>
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
              <router-link to="hoinfod">
                <div class="d-flex justify-center">
                {{ item.phone }}
                </div>
              </router-link>
            </template>
            <template #item.email="{ item }">
                <div class="d-flex justify-center">
                {{ item.email }}
                </div>
            </template>
            <template #item.website="{ item }">
                <div class="d-flex justify-center">
                {{ item.website }}
                </div>
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
  name: "HoInfo",
  components: {
  },
  data() {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      items: [ '10개', '20개', '30개' ],
      selectedValue: '',
      itemsPerPage: 10,
      belong: 1,
      companies: [
        {
          name: "5",
          phone: "1051000",
          email: "10.47.72.83",
          website: "Internal",
        },
        {
          name: "4",
          phone: "1192000",
          email: "192.168.10.8",
          website: "External",
        },
        {
          name: "3",
          phone: "1250000",
          email: "10.22.35.62",
          website: "Internal",
        },
        {
          name: "2",
          phone: "1250000",
          email: "10.17.28.33",
          website: "Internal",
          location: "현존",
        },
        {
          name: "1",
          phone: "1270000",
          email: "10.28.33.21",
          website: "Internal",
          location: "현존",
        },


      ],
    };
  },
  computed: {
    headers() {
      return [
        { text: "NO", value: "name", sortable: false, align: "center"},
        { text: "호출번호", value: "phone", sortable: false, align: "center"},
        { text: "IP", value: "email", sortable: false, align: "center"},
        { text: "ZONE", value: "website", sortable: false, align: "center"}
      ];
    },
  },
  methods: {
    rowchange: function() {
      console.log(this.selectedValue);
      let str = this.selectedValue;
      this.itemsPerPage = str.substr(0, 2)
    }
}
}
</script>

<style scoped>
::v-deep table { border-top: 1px solid #000; border-bottom: 1px solid #D1D1D1;}
::v-deep table thead th { font-size: 18px !important; border-top: 3px solid #000; color: black !important; background-color: #e5f2ff!important;}
::v-deep table td { font-size: 18px !important; }
::v-deep table td:nth-child(2) { font-weight: bold; }
::v-deep table th:nth-child(2) { width: 20%; }
::v-deep table th:nth-child(3) { width: 35%; }
.v-application a{
  text-decoration: none;
  color: black;
}
#search {
  padding-top: 0;
  padding-bottom: 0;
}
.navp {
  margin-top: 1rem;
  width: 50rem;
  margin: 0 auto;
}
.text-h4 { text-decoration: none; color: black; }
.tables th:nth-child(1) {
  width: 20%;
}
.spans {
  width: 8.6rem;
  height: 0.5rem;
  background-color: #437fff;
  display: block;
}
.routerp {
  width: 33.33333%;
}
::v-deep .v-pagination__item {
  box-shadow: none;
}
::v-deep .v-pagination__navigation {
  box-shadow: none;
}
</style>
