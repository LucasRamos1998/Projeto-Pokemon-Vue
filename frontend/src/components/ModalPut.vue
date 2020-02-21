<template>
<div>
 
    <div class="modal fade" :id="'modalUpdate_' + id" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Editar Pokemon</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" >
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body" >
            <form >
                <div class="form-row">
                     <div class="form-group col-md-6">
                        <label for="Nome">Nome: </label>
                        <input class="form-control" type="text" placeholder="Nome" v-model="editedPokemon.name">
                     </div>
                     <div class="form-group col-md-6">
                         <label for="Pokedex">Pokedex: </label>
                         <input class="form-control" type="text" placeholder="pokedex" v-model="editedPokemon.pokedexNumber">
                     </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-12">
                        <label for="Imagem">Url da Imagem</label>
                        <input class="form-control"  type="text" placeholder="url da imagem" v-model="editedPokemon.img">
                        <img class="imagemPokemon" :src="editedPokemon.img" alt="">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="Geracao">Geração</label>
                        <input class="form-control" type="text" placeholder="geração" v-model="editedPokemon.generation">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Evolução">Evolução</label>
                        <input class="form-control" type="text" placeholder="Evolução" v-model="editedPokemon.evolutionStage">
                    </div>

                    <div class="form-group col-md-4">
                        <label for="sta">Sta</label>
                        <input class="form-control" type="text" placeholder="sta" v-model="editedPokemon.sta">
                    </div>


                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="FamiliaID">Familia ID</label>
                        <input class="form-control" type="text" placeholder="Id Familia" v-model="editedPokemon.familyId">
                    </div>


                    <div class="form-group col-md-6">
                        <label for="Tipo1">Tipo 1</label>
                        <input class="form-control" type="text" placeholder="Tipo 1" v-model="editedPokemon.type1">
                    </div>

                </div>
                
                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="Tipo2">Tipo 2</label>
                        <input class="form-control" type="text" placeholder="Tipo 2" v-model="editedPokemon.type2">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="clima1">Clima 1</label>
                        <input class="form-control" type="text" placeholder="clima 1" v-model="editedPokemon.weather1">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="clima2">Clima 2</label>
                        <input class="form-control" type="text" placeholder="clima 2" v-model="editedPokemon.weather2">
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-4">
                        <label for="Status">Total Status</label>
                        <input class = "form-control" type="text" placeholder="Total status" v-model="editedPokemon.statTotal">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="atk">Ataque</label>
                        <input class="form-control" type="text" placeholder="Ataque" v-model="editedPokemon.atk">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="Def">Defesa</label>
                        <input class = "form-control" type="text" placeholder="Defesa" v-model="editedPokemon.def">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="raidable">raidable</label>
                        <input class = "form-control" type="text" placeholder="raidable" v-model="editedPokemon.raidable">
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" placeholder="crossGen" v-model="editedPokemon.crossGen">
                    <label class="form-check-label" for="CrossGen">
                        CrossGen
                    </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Lendario" v-model="editedPokemon.legendary">
                        <label class="form-check-label" for="Lendario">
                        Lendario
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Aquavel" v-model="editedPokemon.aquireable">
                        <label class="form-check-label" for="Aquavel">
                        Aquavel
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="spawns" v-model="editedPokemon.spawns">
                        <label class="form-check-label" for="spawns">
                        Spawns
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Eclodivel" v-model="editedPokemon.hatchable">
                        <label class="form-check-label" for="Eclodivel">
                        Eclodivel
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Regional" v-model="editedPokemon.regional">
                        <label class="form-check-label" for="Regional">
                        Regional
                        </label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Brilha" v-model="editedPokemon.shiny">
                        <label class="form-check-label" for="Brilha">
                        Brilha
                        </label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Ninho" v-model="editedPokemon.nest">
                        <label class="form-check-label" for="Ninho">
                        Ninho
                        </label>
                    </div>


                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Novo" v-model="editedPokemon.newer">
                        <label class="form-check-label" for="Novo">
                        Novo
                        </label>
                    </div>


                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="notGettable" v-model="editedPokemon.notGettable">
                        <label class="form-check-label" for="notGettable">
                        notGettable
                        </label>
                    </div>
                    
                   <div class="form-check form-check-inline">
                        <input class = "form-check-input" type="checkbox" placeholder="evoluiu" v-model="editedPokemon.evolved">
                        <label class="form-check-label" for="evoluiu">
                        Evoluiu
                        </label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" placeholder="Evolucao Futura" v-model="editedPokemon.futureEvolution">
                        <label class="form-check-label" for="EvolucaoFutura">
                        Evolucao Futura
                        </label>
                    </div>
                </div>
 
            </form>

           
                     
        </div>
        <div class="modal-footer">
            <button type="button" @click="EditePokemon" class="btn btn-primary" data-dismiss="modal">Alterar Pokemon</button>
            <button type="button" @click="clearFields" class="btn btn-info" >Limpar Campos</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" >Fechar</button>
            
        </div>
        </div>
    </div>
    </div>

</div>

</template>

<script>
export default {
    props:[
        'id',
        'name',
        'pokedexNumber',
        'img',
        'generation',
        'evolutionStage',
        'evolved',
        'familyId',
        'crossGen',
        'type1',
        'type2',
        'weather1',
        'weather2',
        'statTotal',
        'atk',
        'def',
        'sta',
        'legendary',
        'aquireable',
        'spawns',
        'regional',
        'raidable',
        'hatchable',
        'shiny',
        'nest',
        'newer',
        'notGettable',
        'futureEvolution'         
    ],
    data() {
        return {
            editedPokemon: {
                name: this.name,
                pokedexNumber: this.pokedexNumber,
                img: this.img,
                generation: this.generation,
                evolutionStage: this.evolutionStage,
                evolved: this.evolved,
                familyId: this.familyId,
                crossGen: this.crossGen,
                type1: this.type1,
                type2: this.type2,
                weather1: this.weather1,
                weather2: this.weather2,
                statTotal: this.statTotal,
                atk: this.atk,
                def: this.def,
                sta: this.sta,
                legendary: this.legendary,
                aquireable: this.aquireable,
                spawns: this.spawns,
                regional: this.regional,
                raidable: this.raidable,
                hatchable: this.hatchable,
                shiny: this.shiny,
                nest: this.nest,
                newer: this.newer,
                notGettable:this.notGettable,
                futureEvolution: this.futureEvolution
            },
            teste:"passou"

        }
    },

    methods:{
        EditePokemon(){
            this.$emit("editedPokemon",this.editedPokemon)

        },


        clearFields(){
                this.editedPokemon.name = ''
                this.editedPokemon.pokedexNumber = ''
                this.editedPokemon.img = ''
                this.editedPokemon.generation = ''
                this.editedPokemon.evolutionStage = ''
                this.editedPokemon.evolved = false
                this.editedPokemon.familyId =  ''
                this.editedPokemon.crossGen = false
                this.editedPokemon.type1 = ''
                this.editedPokemon.type2 = ''
                this.editedPokemon.weather1 = ''
                this.editedPokemon.weather2 = ''
                this.editedPokemon.statTotal = ''
                this.editedPokemon.atk = ''
                this.editedPokemon.def = ''
                this.editedPokemon.sta = ''
                this.editedPokemon.legendary = ''
                this.editedPokemon.aquireable = false
                this.editedPokemon.spawns = false
                this.editedPokemon.regional = false
                this.editedPokemon.raidable = ''
                this.editedPokemon.hatchable = false
                this.editedPokemon.shiny = false
                this.editedPokemon.nest = false
                this.editedPokemon.newer = false
                this.editedPokemon.notGettable = false
                this.editedPokemon.futureEvolution = false
        }


    }
}
</script>

<style>

</style>
