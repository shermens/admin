<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <!--        <v-card flat class="mb-5 text-h5 text-decoration-underline"> 사용자 관리 </v-card>-->
        <v-card class="mt-1" flat>
          <v-card-title id="search">
            <v-spacer></v-spacer>
            <v-col cols="4">
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
            </v-col>
            <v-col
              class="d-flex"
              cols="1"
            >
              <v-select
                label="10개"
                hide-details
                dense
                single-line
                class="mr-3 sels"
                outlined
                @change="rowchange()"
                v-model="selectedValue"
                :items="items"
              >
                <template #item="{ item }">
                  {{ item }}
                </template>
              </v-select>
            </v-col>
            <router-link to="comnew" class="text-decoration-none">
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
            <template #item.no="{ item }">
                <div class="d-flex justify-center">
                  {{ item.no }}
                </div>
            </template>
            <template #item.gcode="{ item }">
                <div class="d-flex justify-center">
                  {{ item.gcode }}
                </div>
            </template>
            <template #item.gcoden="{ item }">
              <router-link to="cominfo">
                <div class="d-flex justify-left font-weight-bold">
                  {{ item.gcoden }}
                </div>
              </router-link>
            </template>
            <template #item.ccount="{ item }">
                <div class="d-flex justify-center">
                  {{ item.ccount }}
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
  name: "Common",
  components: {
  },
  data() {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      items: [ '10개', '20개', '30개' ],
      itemsPerPage: 10,
      selectedValue: '',
      belong: 1,
      companies: [
        {
        no: "1",
        gcode: "CCA",
        gcoden: "사용자권한",
        ccount: 3,
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        { text: "NO", value: "no", sortable: false, align: "center"},
        { text: "그룹코드", value: "gcode", sortable: false, align: "center"},
        { text: "그룹코드명", value: "gcoden", sortable: false, align: "center"},
        { text: "코드갯수", value: "ccount", sortable: false, align: "center"},
      ];
    },
  },
  methods: {
    rowchange: function() {
      console.log(this.selectedValue);
      let str = this.selectedValue;
      this.itemsPerPage = str.substr(0, 2)
    }
    // rowchange: function() {
    //   // alert('로우 변경' + this.rowsPerPage.value + '!')
    //   this.itemsPerPage = this.select.value
    //      console.log(this.itemsPerPage)
    //      // this.itemsPerPage = this.rowsPerPage.value;
    //      // if (event) {
    //      // alert(event.target.tagName)
    //    }
    // }
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
::v-deep .v-btn--outlined {
  border: 3px solid;
}
::v-deep .v-pagination__item {
  box-shadow: none;
}
::v-deep .v-pagination__navigation {
  box-shadow: none;
}
</style>

