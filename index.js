// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

// render it to the device
AppRegistry.registerComponent('albums', () => App);
