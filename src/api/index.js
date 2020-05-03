import axios from 'axios';

const url = ' https://covid19.mathdro.id/api';

export const fetchData =  async (country) =>{
    let changebaleUrl = url;
    if(country) {
        changebaleUrl = `${url}/countries/${country}`;
    }
    
    try{
        // first way of destructuring
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changebaleUrl);
        const modifiedData = {confirmed,recovered,deaths,lastUpdate};
        return { confirmed, recovered, deaths, lastUpdate };
        
    } catch(error){
        return error;
    }
}
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        
        const modifiedDataChart = data.map((dailyData) => ({

            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedDataChart;
    } catch (error) {

        return error;

    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error){

        console.log(error);    
    }
}