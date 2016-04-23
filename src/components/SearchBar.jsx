import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);


        this.state = { term: '' }

    }

onInputChange(term) {
    //if key value pair is the same name {term: term} can do what's below
    this.setState({ term });
    this.props.onSearchTermChange(term);
}

    render() {
        return (
            <div className="search-bar">
                <input type="text"
                       placeholder="Search"
                       defaultValue={this.state.term}
                       onChange={event => this.onInputChange(event.target.value)}
                       />
            </div>
        )
    }
}

export default SearchBar;