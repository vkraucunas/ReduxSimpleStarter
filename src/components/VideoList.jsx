import React, { Component } from 'react';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) =>  {
        return (
                <li key={video.etag}>{video.snippet.title}</li>
            )
    })
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;