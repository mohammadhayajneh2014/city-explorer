import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Weather from './compnent/Weather';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      messageForWrongInput: '',
      wheathr:{},
      weathrArray:[],
      displayErrMsg: false,
      displayMap: false
      


    }
  }

  gitingcity = async (event) => {
    event.preventDefault();
   
   
    
    try {
      let LocationIQ = event.target.LocationIQ.value;
      let LocationUrl = `https://eu1.locationiq.com/v1/search.php?key=pk.bc65df9798f7b8653e9f6d9a36f47165&q=${LocationIQ}&format=json`;
    
      let allAboutLocation = await axios.get(LocationUrl);
      let urlWeather=`http://localhost:3050/weather?cityLat=${allAboutLocation.data[0].lat}&cityLon=${allAboutLocation.data[0].lon}`;
      let weatheropject= await axios.get(urlWeather);
      
      console.log(allAboutLocation.data);
      this.setState({
        data: allAboutLocation.data[0],
        weathrArray: weatheropject.data,
        displayMap: true
      })  
    }
    catch {
      this.setState({
        messageForWrongInput: 'error this is a bad response',
        displayErrMsg: true
      })
    }

    // localhost:3050/weather?cityLat=-31.9515694&cityLon=35.9239625







  }
  render() {
    return (

      <div>
        <form onSubmit={this.gitingcity}>
          {/* <input type='text' placeholder='city name' name='LocationIQ' /> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="city name" name='LocationIQ' />
          </Form.Group>
          <Button variant="primary" type="submit">
            yor city
          </Button>
        </form>

        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">
            <ListGroup.Item>{this.state.data.display_name}</ListGroup.Item>
            <ListGroup.Item>{this.state.data.lon}</ListGroup.Item>
            <ListGroup.Item>{this.state.data.lat}</ListGroup.Item>
          </ListGroup>
        </Card>

        {this.state.displayErrMsg && this.state.messageForWrongInput}
        {this.state.displayMap && <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.bc65df9798f7b8653e9f6d9a36f47165&center=${this.state.data.lat},${this.state.data.lon}`} alt='map' />}

        <Weather goToWeather={this.state.wheathr}/>


      </div>
    );
  }
}
export default App;