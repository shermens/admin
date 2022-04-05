<template>
  <v-app-bar
    app
    color="primary"
    dark
    flat
  >
    <v-app-bar-nav-icon @click="drawer = !drawer" />
<!--    <template>-->
<!--      <div>-->
<!--        <v-breadcrumbs-->
<!--          :items="items"-->
<!--          large-->
<!--        >-->
<!--          <template v-slot:divider>-->
<!--            <v-icon>mdi-arrow-right</v-icon>-->
<!--          </template>-->
<!--        </v-breadcrumbs>-->
<!--      </div>-->
<!--    </template>-->
    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  name: 'DefaultBar',
  data: () => ({
    items: [
      {
        text: 'Tree',
        disabled: false,
        to: '/',
      },
      {
        text: 'User',
        disabled: false,
        to: '/user',
      },
      {
        text: 'Link 2',
        disabled: true,
        to: 'breadcrumbs_link_2',
      },
    ],
  }),
  computed: {
    drawer: {
      get () {
        return this.$store.getters['app/getDrawer']
      },
      set (value) {
        return this.$store.commit('app/setDrawer', value)
      }
    }
  }
}
</script>
<style scoped lang="">
</style>
