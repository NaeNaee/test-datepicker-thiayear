import React, {Component} from 'react';
import './App.css';
import DatePicker from 'react-datepicker-thaiyear';
import 'react-datepicker-thaiyear/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/th';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: moment()
        }
    }

    handleChange = (date) => {
        this.setState({date});
    }

    render() {
        return (
            <div className="App">
                <DatePicker selected={this.state.date}
                            dateFormat="DD/MM/YYYY"
                            onChange={this.handleChange}/>
            </div>
        );
    }
}

export default App;
