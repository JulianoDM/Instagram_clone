import { createSlice } from "@reduxjs/toolkit";
import imagemA from '../../img/imagemA.png'
import imagemB from '../../img/imagemB.png'
import imagemC from '../../img/imagemC.png'
import bob from '../../img/bob.jpg'
import gojo from '../../img/gojo.jpg'


const initialState = [
    {id: 1, url:imagemA},
    {id: 2, url:imagemB},
    {id: 3, url:imagemC},
    {id: 4, url:bob},
    {id: 5, url:gojo}
]

export const photoSlice = createSlice({
    name: "photo",
    initialState,
});

export default photoSlice.reducer;