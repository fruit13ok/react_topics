import React from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import './App.css';
import Tryd3 from './Tryd3';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            busNum: '1',
            jsonResponse: '',
            dropdownListBuses: []
        };
    }
    /*
    https://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf
    http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni

    base url
    http://webservices.nextbus.com/service/publicJSONFeed?

    -to get list of transit agencies
    command=agencyList

    -to get list of routes for an agency, EX: sf muni
    command=routeList&a=sf-muni

    -to get a route data, stops, lists of directions, and lists of paths, EX: bus 1
    command=routeConfig&a=sf-muni&r=1

    -to predict arrival for a stop, there are many way to get it,
    with stopId, it might has more than 1 route, can also specify route number
    command=predictions&a=sf-muni&stopId=14015
    command=predictions&a=sf-muni&stopId=14015&r=1
    with route number and stop tag
    command=predictions&a=sf-muni&r=1&s=4015

    */
    componentDidMount(){
        axios.get('http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni')
        .then((response) => {
            // console.log(Array.isArray(response.data.route));
            // console.log(response.data.route);
            var dropdownListBuses = response.data.route.map((item, index) =>{
                return <option key={index} value={item.tag}>{item.tag}</option>
            });
            this.setState({dropdownListBuses: dropdownListBuses});
        });
    }
    handleChange = (event) => {
        this.setState({busNum: event.target.value});
      }
    handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        var url = 'http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni&r='+this.state.busNum;
        const response = await axios.get(url);
        console.log(response.data.route);
        this.setState({jsonResponse: JSON.stringify(response.data.route)});
    }
    render() {
        return (
            <div>
                <Form onSubmit={e => this.handleSubmit(e)}>
                    <Form.Row>
                        <Form.Group controlId="formGridState">
                            <Form.Label>bus#</Form.Label>
                            <Form.Control as="select" value={this.state.busNum} onChange={this.handleChange}>
                                {/* drop down list of options from array */}
                                {this.state.dropdownListBuses}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                         query
                    </Button>
                </Form>
                {/* <p>{this.state.jsonResponse}</p> */}
                <Tryd3 />
            </div>
        );
    }
}
export default App;
