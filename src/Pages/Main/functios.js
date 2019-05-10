import axios from 'axios';
export default {
  componentDidMountMinTemp: function () {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputWeather}&units=metric&APPID=b58a4ece0cd87042e4e81ec3b0ebe83a`)
      .then(response => {
        this.setState({ minTemp: response.data.main.temp_min })
      })
      .catch(error => {
        console.log(error);
      })

  },

  componentDidMountMaxTemp: function () {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputWeather}&units=metric&APPID=b58a4ece0cd87042e4e81ec3b0ebe83a`)
      .then(response => {
        this.setState({ maxTemp: response.data.main.temp_max })
      })
      .catch(error => {
        console.log(error);
      })
  },
  componentDidMountDescTemp: function () {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputWeather}&units=metric&APPID=b58a4ece0cd87042e4e81ec3b0ebe83a`)
      .then(response => {
        this.setState({ descp: response.data.weather[0].description })
      
      })
      .catch(error => {
        console.log(error);
      })
  }
}