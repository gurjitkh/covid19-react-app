import React from 'react';
import logo from './logo.svg';
import Dr from './Drcorona.svg'
import './App.css';
import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'

class App extends React.Component {


  state = {
    data:{},
    country:'',
  }
   async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data:fetchedData });
  }
  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    console.log(fetchedData);
    
    //fetch the data
    console.log(fetchedData);
    
    //set the state
    this.setState( { data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return(
      <div className={styles.container}>
         <section className="wave">
        <div className="virus"></div>
          <h1 className="h1">Stay Home</h1>
        <div className="img"></div>
      </section>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>  
    );
  }  
} 
export default App;
