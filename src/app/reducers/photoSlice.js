import { createSlice } from "@reduxjs/toolkit";
import imagemA from '../../img/imagemA.png'
import imagemB from '../../img/imagemB.jpg'
import imagemC from '../../img/imagemC.jpg'
import imagemD from '../../img/imagemD.jpg'
import imagemE from '../../img/imagemE.jpg'
import gojo from '../../img/gojo.jpg'


const initialState = [
    {id: 1, url:imagemA},
    {id: 2, url:imagemB},
    {id: 3, url:imagemC},
    {id: 4, url:imagemD},
    {id: 5, url:imagemE},
    {id: 6, url:gojo}
]

export const photoSlice = createSlice({
    name: "photo",
    initialState,
});

export default photoSlice.reducer;