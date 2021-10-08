import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    cars:[" model S","model Y ","model 3","model X"]
}
 const carslice =createSlice({
     name:"car",
     initialState ,
     reducer:{}

 })

 export const selectcars= state=> state.car.cars
 export default carslice.reducer