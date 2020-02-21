<template>
    <div class="input-group mb-3">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1"><img class = 'imgInput' src="../../assets/imgs/pokebola.png" alt=""></span>
    </div>
    <input type="text" class="form-control" placeholder="Search pokemon" aria-label="pokemon" aria-describedby="basic-addon1" v-model="search" @keyup="searched">
        <button type="button" class="btn btn-primary fa fa-plus" data-toggle="modal" data-target="#staticBackdrop">
            
    </button>
    
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },

    methods:{
        searched(){
            this.$emit("searched", this.search)
        }
        
    }
}
</script>

<style>
    .imgInput {
        height: 45px;
        
        
    }

    .input-group-text{
         height: 38px;
         padding: 0;
    }
</style>