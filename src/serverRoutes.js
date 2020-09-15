import axios from "axios";
import {ADD_DATA, ADD_IMAGES} from "./components/actions/actionTypes/cartActions";
import {store} from "./store/store";

export const Routes = [
    {
        path: `/`,
        exact: true,
        loadData: storeInstance => setPageData(storeInstance),
    },

]

const setPageData = async(storeInstance) => {
   const reduxStore = typeof window === 'undefined' ? storeInstance : store;
   try {
      return axios.get('https://api.mocki.io/v1/dabfeaf3').then( res => {
           reduxStore.dispatch({type: ADD_DATA, data: res.data});
           reduxStore.dispatch({type: ADD_IMAGES, data: res.data});
       });
   } catch(err) {
       console.log(err);
   }

}

