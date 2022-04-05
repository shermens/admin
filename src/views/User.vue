<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
<!--        <v-card flat class="mb-5 text-h5 text-decoration-underline"> 사용자 관리 </v-card>-->
        <v-card class="mt-1" flat>
          <v-card-title id="search">
            <v-spacer></v-spacer>
            <v-radio-group v-model="belong" row>
              <v-radio label="전체" :value="1"></v-radio>
              <v-radio label="행정기관" :value="2"></v-radio>
              <v-radio label="공공기관" :value="3"></v-radio>
            </v-radio-group>
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
        cols="1"
      >
        <v-select
              outlined
              single-line
              hide-details
              dense
              label="10개"
              class="mr-3 selecs"
              @change="rowchange()"
              v-model="selectedValue"
              :items="items"
        >
          <template #item="{ item }">
            {{ item }}
          </template>
        </v-select>
      </v-col>
            <router-link to="/userreg"><v-btn class="btnb" color="blue" rounded outlined dark>사용신청등록<v-icon>mdi-arrow-right-thin</v-icon></v-btn></router-link>
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
<!--              <router-link :to="{ name: 'company', params: { id: item.id } }">-->
                <div class="d-flex justify-center">
                {{ item.name }}
                </div>
<!--              </router-link>-->
            </template>
            <template #item.phone="{ item }">

                <div class="d-flex justify-left">
                {{ item.phone }}
                </div>
            </template>
            <template #item.email="{ item }">
<!--              <a target="_blank" :href="`mailto:${item.email}`">-->
                <div class="d-flex justify-left">
                {{ item.email }}
                </div>
<!--              </a>-->
            </template>
            <template #item.website="{ item }">
              <router-link to="/userinfo">
                <div class="d-flex justify-center font-weight-bold">
                {{ item.website }}
                </div>
              </router-link>
            </template>
          </v-data-table>
          <div class="d-flex justify-center">
            <v-pagination
            v-model="page"
            :length="pageCount"
            :total-visible="10"
            class="psize mt-5 elevation-0"
          ></v-pagination>
            <div class="mt-5">
              페이지
            <input
              v-model="page"
              style="border: 1px solid black"
              class="text-center inputs"
              v-on:click="jumpPage"
            >
              이동
            </div>
          </div>
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
      items: [ '10개', '20개', '30개' ],
      search: '',
      page: 1,
      pageCount: 0,
      selectedValue: '',
      itemsPerPage: 10,
      belong: 1,
      bean: null,
      companies: [
        {
          name: "1",
          phone: "첫페이지",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10",
          id:"test"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },
                {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "두번째페이지",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "세번째페이지",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "네번째페이지",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },        {
          name: "1",
          phone: "행정안전부",
          email: "스마트서비스과",
          website: "박희수",
          location: "GPKI",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "young",
          recent: "2022.01.10"
        },
        {
          name: "1",
          phone: "행정안전부",
          email: "스마트워크센터",
          website: "이영희",
          location: "GPKI",
          recent: "2021.01.09"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "김철수",
          location: "kimcs",
          recent: "2022.01.07"
        },
        {
          name: "1",
          phone: "한국지능정보사회진흥원",
          email: "디지털정부사업팀",
          website: "박수영",
          location: "psooy",
          recent: "2022.01.07"
        },


      ],
    };
  },
  computed: {
    headers() {
      return [
        { text: "NO", value: "name", sortable: false, align: "center"},
        { text: "기관명", value: "phone", sortable: false, align: "center"},
        { text: "부서명", value: "email", sortable: false, align: "center"},
        { text: "사용자명", value: "website", sortable: false, align: "center"},
        { text: "사용자ID", value: "location", sortable: false, align: "center"},
        { text: "최종로그인", value: "recent", sortable: false, align: "center"},
      ];
    },
  },
  methods: {
    jumpPage: function() {
      console.log('누름!')
      this.page = this.bean
    },
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
::v-deep .v-btn--outlined {
  border: 3px solid;
}
::v-deep .v-pagination__item {
  box-shadow: none;
}
::v-deep .v-pagination__navigation {
  box-shadow: none;
}
.selecs {
  width: 6rem;
}
</style>
