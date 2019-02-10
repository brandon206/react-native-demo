import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentDidMount() {
        console.log('componentDidMount in AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                this.setState({ albums: response.data });
            });
    }

    renderAlbums() {
        return this.state.albums.map((album) => 
            (<AlbumDetail key={album.title} album={album} />)
        );
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
