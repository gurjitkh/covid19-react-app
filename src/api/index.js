import axios from 'axios';

const url = ' https://covid19.mathdro.id/api';

export const fetchData =  async () =>{

    try{
        // first way of destructuring
        const {data:{conirmed,recoverd,deaths,lastUpdate}} = await axios.get(url);
        const modifiedData = {conirmed,recoverd,deaths,lastUpdate};
        // seco way of destructuring
        // const {data} = await axios.get(url);
        // const modifiedData = {
        //     conirmed: data.conirmed,
        //     recoverd: data.recoverd,
        //     deaths: data.deaths,
        //     lastUpdate: data.lastUpdate,
        // }
        

        return {conirmed,recoverd,deaths,lastUpdate};
        

    } catch(error){

    }

}