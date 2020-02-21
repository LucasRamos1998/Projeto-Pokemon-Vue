const xlsx = require('xlsx')
const path = require('path')
const Pokemon = require ('./database/schema')

async function insertIntoDataBase() {
    try{
        let file = xlsx.readFile(path.join(__dirname, './','Pokemon.xlsx'))
        file = file.Sheets["Sheet1"]
        let data = xlsx.utils.sheet_to_json(file)
        data.forEach(item =>{
            item.aquireable > 0 ? item.aquireable = true : item.aquireable = false
            item.hatchable > 0 ? item.hatchable = true : item.hatchable = false
     
        })
        
        await Pokemon.insertMany(data)
     }catch(e){
         console.log(e)
     }
} 

insertIntoDataBase();




