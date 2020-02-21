<template>
<div>
    <!-- Modal -->


    <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Adicionar Pokemon</h5>
            <button type="button" @click="clearFields" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body" >
            <form >
                <div class="form-row">
                     <div class="form-group col-md-6">
                        <label for="Nome">Nome: </label>
                        <input class="form-control" type="text" placeholder="Nome" v-model="information.name">
                     </div>
                     <div class="form-group col-md-6">
                         <label for="Pokedex">Pokedex: </label>
                         <input class="form-control" type="text" placeholder="pokedex" v-model="information.pokedexNumber">
                     </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="Imagem">Url da Imagem</label>
                        <input class="form-control"  type="text" placeholder="url da imagem" v-model="information.img">
                        <img class="imagemPokemon" :src="information.img" alt="">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="Geracao">Geração</label>
                        <input class="form-control" type="text" placeholder="geração" v-model="information.generation">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Evolução">Evolução</label>
                        <input class="form-control" type="text" placeholder="Evolução" v-model="information.evolutionStage">
                    </div>

                    <div class="form-group col-md-4">
                        <label for="sta">Sta</label>
                        <input class="form-control" type="text" placeholder="sta" v-model="information.sta">
                    </div>


                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="FamiliaID">Familia ID</label>
                        <input class="form-control" type="text" placeholder="Id Familia" v-model="information.familyId">
                    </div>


                    <div class="form-group col-md-6">
                        <label for="Tipo1">Tipo 1</label>
                        <input class="form-control" type="text" placeholder="Tipo 1" v-model="information.type1">
                    </div>

                </div>
                
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="Tipo2">Tipo 2</label>
                        <input class="form-control" type="text" placeholder="Tipo 2" v-model="information.type2">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="clima1">Clima 1</label>
                        <input class="form-control" type="text" placeholder="clima 1" v-model="information.weather1">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="clima2">Clima 2</label>
                        <input class="form-control" type="text" placeholder="clima 2" v-model="information.weather2">
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="Status">Total Status</label>
                        <input class = "form-control" type="text" placeholder="Total status" v-model="information.statTotal">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="atk">Ataque</label>
                        <input class="form-control" type="text" placeholder="Ataque" v-model="information.atk">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Def">Defesa</label>
                        <input class = "form-control" type="text" placeholder="Defesa" v-model="information.def">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="raidable">raidable</label>
                        <input class = "form-control" type="text" placeholder="raidable" v-model="information.raidable">
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" placeholder="crossGen" v-model="information.crossGen">
                    <label class="form-check-label" for="CrossGen">
                        CrossGen
                    </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Lendario" v-model="information.legendary">
                        <label class="form-check-label" for="Lendario">
                        Lendario
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Aquavel" v-model="information.aquireable">
                        <label class="form-check-label" for="Aquavel">
                        Aquavel
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="spawns" v-model="information.spawns">
                        <label class="form-check-label" for="spawns">
                        Spawns
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Eclodivel" v-model="information.hatchable">
                        <label class="form-check-label" for="Eclodivel">
                        Eclodivel
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Regional" v-model="information.regional">
                        <label class="form-check-label" for="Regional">
                        Regional
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Brilha" v-model="information.shiny">
                        <label class="form-check-label" for="Brilha">
                        Brilha
                        </label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Ninho" v-model="information.nest">
                        <label class="form-check-label" for="Ninho">
                        Ninho
                        </label>
                    </div>


                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Novo" v-model="information.newer">
                        <label class="form-check-label" for="Novo">
                        Novo
                        </label>
                    </div>


                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="notGettable" v-model="information.notGettable">
                        <label class="form-check-label" for="notGettable">
                        notGettable
                        </label>
                    </div>
                    
                   <div class="form-check form-check-inline">
                        <input class = "form-check-input" type="checkbox" placeholder="evoluiu" v-model="information.evolved">
                        <label class="form-check-label" for="evoluiu">
                        Evoluiu
                        </label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Evolucao Futura" v-model="information.futureEvolution">
                        <label class="form-check-label" for="EvolucaoFutura">
                        Evolucao Futura
                        </label>
                    </div>
                </div>
 
            </form>

           
                     
        </div>
        <div class="modal-footer">
            <button type="button" @click="addNewPokemon" class="btn btn-primary" data-dismiss="modal">Adicionar Pokemon</button>
            <button type="button" @click="clearFields" class="btn btn-info" >Limpar Campos</button>
            <button type="button" @click="clearFields"  class="btn btn-danger" data-dismiss="modal">Fechar</button>
            
        </div>
        </div>
    </div>
    </div>

</div>

</template>

<script>
export default {
    props: ['toggleCleanPokeInsertObj'],
    data(){
        return{
            information:{
                name: '',
                pokedexNumber: '',
                img: 'https://http2.mlstatic.com/colar-pingente-anime-geek-pokemon-pokebola-pokeball-esfera-D_NQ_NP_928688-MLB28019029999_082018-F.jpg',
                generation: '',
                evolutionStage: '',
                evolved: false,
                familyId: '',
                crossGen:false,
                type1:'',
                type2:'',
                weather1:'',
                weather2:'',
                statTotal:'',
                atk:'',
                def:'',
                sta:'',
                legendary:'',
                aquireable:false,
                spawns:false,
                regional:false,
                raidable:'',
                hatchable:false,
                shiny:false,
                nest:false,
                newer:false,
                notGettable:false,
                futureEvolution:false,

            }

        }

    },
    methods:{
        addNewPokemon(){

            this.$emit("addNewPokemon", this.information)

        },
        clearFields(){
                this.information.name = ''
                this.information.pokedexNumber = ''
                this.information.img = ''
                this.information.generation = ''
                this.information.evolutionStage = ''
                this.information.evolved = false
                this.information.familyId =  ''
                this.information.crossGen = false
                this.information.type1 = ''
                this.information.type2 = ''
                this.information.weather1 = ''
                this.information.weather2 = ''
                this.information.statTotal = ''
                this.information.atk = ''
                this.information.def = ''
                this.information.sta = ''
                this.information.legendary = ''
                this.information.aquireable = false
                this.information.spawns = false
                this.information.regional = false
                this.information.raidable = ''
                this.information.hatchable = false
                this.information.shiny = false
                this.information.nest = false
                this.information.newer = false
                this.information.notGettable = false
                this.information.futureEvolution = false
        },
        

    },
    watch: {
        toggleCleanPokeInsertObj() {
            this.clearFields();
        }
    }
}
</script>

<style>

</style>
