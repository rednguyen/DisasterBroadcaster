import React, { Component } from 'react';
import SearchBar from "material-ui-search-bar";

class WorldBody extends Component {
    constructor(props) {
        super(props);
        this.state = { country: 'null' };
        this.getCountry = this.getCountry.bind(this);
    }

    getCountry(value) {
        this.setState({country: value});
    }

    render() {
        return (
            <div>
            <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={(value) => this.getCountry(value)}
            placeholder = 'Enter Country'
            style={{
            margin: '0 auto',
            maxWidth: 800
            }}
            />
            </div>
        );
    }
}


export default WorldBody