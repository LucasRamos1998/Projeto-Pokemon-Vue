<template>

    <div class="container">
        
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"><img class = 'imgInput' src="../../assets/imgs/pokebola.png" alt=""></span>
            </div>
            <input type="text" class="form-control" placeholder="Search pokemon" aria-label="pokemon" aria-describedby="basic-addon1" v-model="search" @keyup="backToPageOne" >
            <button type="button" class="btn btn-primary fa fa-plus" title="ADD POKEMON" data-toggle="modal" data-target="#staticBackdrop">
                
            </button>
        
        </div>
        <div class="row">
            <div class="col-md-4" v-for="lista in paginatedList" :key="lista._id">
                <div class="card" :key="lista._id" style="width:18rem; border:none;">
                    
                    <div class="card-body ">
                        <div class="row">
                            <div class="col-6">
                                <div class="row card-title name-card ">
                                    <div class="lead col-8 overflow-auto">
                                        {{lista.name}}
                                    </div>
                                    <div class="col-4 d-flex flex-container-end">
                                        <a data-toggle="modal" :data-target="'#modalUpdate_' + lista._id" class="btn btn-primary fa fa-edit bg-info button-modifed" @click= "updatePokemon(lista._id)"></a>
                                        <button class="btn btn-danger fa fa-trash-o button-modifed " @click= "deletePokemon(lista._id)"></button>
                                    </div>
                                </div>
                            </div>


                        </div>
  
                        <div class="d-flex justify-content-start">
                            <img :src="lista.img" alt="Pokemon Image" class = "custom-image" onerror="this.src='https://http2.mlstatic.com/colar-pingente-anime-geek-pokemon-pokebola-pokeball-esfera-D_NQ_NP_928688-MLB28019029999_082018-F.jpg'">
                                <div class="container">
                                    <div class="row justify-content-md-end">
                                        <div class="card-text badge badge-danger col-8 my-2">Atk: <strong>{{lista.atk}}</strong></div>
                                        <div class="card-text badge badge-primary col-8 my-2">Def: {{lista.def}}</div>
                                        <div class="card-text badge badge-info col-8 my-2">Tipo: <strong>{{lista.type1}}</strong></div>
                                        <div class="card-text badge badge-warning col-8 my-2">STA: <strong>{{lista.sta}}</strong></div>
                                        <div class="card-text badge badge-dark col-8 my-2">Pokedex: <strong>{{lista.pokedexNumber}}</strong></div>
                                    </div>
                                </div>

                       
                        </div>

                        
                        
                    </div>
                </div>
                <ModalPut 
                    :id="lista._id"
                    :name="lista.name"
                    :pokedexNumber="lista.pokedexNumber"
                    :img="lista.img"
                    :generation="lista.generation"
                    :evolutionStage ="lista.evolutionStage"
                    :evolved ="lista.evolved"
                    :familyId ="lista.familyId"
                    :crossGen="lista.crossGen"
                    :type1="lista.type1"
                    :type2="lista.type2"
                    :weather1="lista.weather1"
                    :weather2="lista.weather2"
                    :statTotal="lista.statTotal"
                    :atk="lista.atk"
                    :def="lista.def"
                    :sta="lista.sta"
                    :legendary="lista.legendary"
                    :aquireable="lista.aquireable"
                    :spawns="lista.spawns"
                    :regional="lista.regional"
                    :raidable="lista.raidable"
                    :hatchable="lista.hatchable"
                    :shiny="lista.shiny"
                    :nest="lista.nest"
                    :newer="lista.newer"
                    :notGettable="lista.notGettable"
                    :futureEvolution="lista.futureEvolution"
                    @editedPokemon="editedPokemon($event,lista._id)"
                />
                
            </div>
        </div>
        <ModalPost @addNewPokemon="addNewPokemon($event)" :toggleCleanPokeInsertObj="toggleCleanPokeInsertObj" />

        <nav aria-label="..." v-if="calcTotalPages > 1" class="my-4">
            <ul class="pagination">
                <li class="page-item" v-if="pagination.page >1" >
                    <a class="page-link" href="#" @click="goToPreviousPage">Previous</a>
                </li>
                <li class="page-item" v-if="pagination.page >1"><a class="page-link" href="#" @click="goToPreviousPage">{{pagination.page - 1}}</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">{{pagination.page}} <span class="sr-only">(current)</span></a>
                </li>
                <li class="page-item" v-if="pagination.page < calcTotalPages"><a class="page-link" href="#" @click="goToNextPage">{{pagination.page + 1}}</a></li>
                <li class="page-item" v-if="pagination.page < calcTotalPages">
                    <a class="page-link" href="#" @click="goToNextPage">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios'
import ModalPost from './ModalPost.vue'
import ModalPut from './ModalPut.vue'

export default {

    components:{
        ModalPost,
        ModalPut
    },

    data(){
        return{
            URL: 'http://localhost:3030/pokemons',
            listas: [],
            toggleCleanPokeInsertObj: false,
            search: '',
            pagination:{
                page: 1,
                limit: 6
            }

        }
    },

    methods:{

        async deletePokemon(id){
            await axios({
            url: `${this.URL}/${id}`,
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        this.getPokemons()
        console.log(`exlusao do id ${id}`)
        },
        
        async getPokemons() {
            const res = await axios(this.URL) 
            this.listas = res.data
        },

        async postPokemon(pokeObj){
            const res = await axios({
                url: this.URL,
                method: "POST",
                data: pokeObj
            })
            console.log(res.data)
            this.getPokemons();
        },
        
        addNewPokemon(e){
            this.postPokemon(e)
            this.toggleCleanPokeInsertObj = !this.toggleCleanPokeInsertObj

        },

        async updatePokemon(id, pokeObj){
            await axios({
                url:`${this.URL}/${id}`,
                method:"PUT",
                data: pokeObj
            })
            this.getPokemons()
        },

        editedPokemon(obj, id){
            this.updatePokemon(id, obj)

        },

        goToNextPage(){
            this.pagination.page++

        },

        goToPreviousPage(){
            this.pagination.page--
        },

        backToPageOne(){
            this.pagination.page=1
        }

                  
    },

    computed:{
        filter(){

            return this.listas.filter( item => item.name.toLowerCase().includes(this.search.toLowerCase()));
            
        },

        calcOffSet(){
            return (this.pagination.page -1) * this.pagination.limit
        },

        calcTotalPokemon(){
            return this.filter.length
        },

        calcTotalPages(){
            return Math.ceil(this.calcTotalPokemon / this.pagination.limit)
        },
        
        paginatedList(){
            return this.filter.slice(this.calcOffSet, (this.calcOffSet + this.pagination.limit))
        }

    },

    beforeMount() {
        this.getPokemons();
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

    .card{
        
        margin-top: 25px;

     

    }

    .name-card{
        background-color: blue;
        color: white;
        position: relative;
        top: 0px;
        padding: 10px;
        width: 350px;  
        height: 47px;
      
    }
    .card-body {
        padding: 0rem;
    }

    .button-modifed{
        margin: 4px;
        height: 30px;
        
        
    }

    .custom-image{
        min-height: 200px;
        
    }
    

</style>