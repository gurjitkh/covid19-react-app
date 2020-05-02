import axios from 'axios';

const url = ' https://covid19.mathdro.id/api';

export const fetchData =  async () =>{
    try{
        // first way of destructuring
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
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