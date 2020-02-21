import Vue from 'vue'

<template>
<div class='container' id="app">
  <Header/>
  <CardList />
  
</div>
  
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";


import Header from './components/Header.vue'
import CardList from './components/CardLIst.vue'

export default {
  name: 'app',
  components: {
    Header,
    CardList,
  },
  data(){
    return{
      search:''
    }
  },
  methods:{
    searched(e){
      this.search = e
    }
  }
}
</script>

<style>

</style>
