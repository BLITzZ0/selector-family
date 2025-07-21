/* eslint-disable no-unused-vars */
import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";


export const todosFamily = atomFamily({
    key:"todosFamily",
    default: selectorFamily({
        key:"TodoSelectorFamily",
        get: (id) => async({get})=>{
            await new Promise (p => setTimeout(p,5000));
            const res = await axios.get(`https://dummyjson.com/todos/${id}`);
            return res.data;
        }
    })
})