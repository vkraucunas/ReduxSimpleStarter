import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom';

//youtube stuff
import YTSearch from 'youtube-api-search';
import {apiKey} from '../config.js';

//components
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('hamster')


    }

    videoSearch(term) {
        YTSearch({ key: apiKey, term}, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 600);
        console.log(this.state);
        return (
                <div>
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoList videos={this.state.videos} />
                </div>
            )
    }
}

ReactDom.render(<App />, document.querySelector('.container'))