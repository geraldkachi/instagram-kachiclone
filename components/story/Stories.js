import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Story from './Story';
import datas from "../../data/storedata"

const Stories = () => {
    return (
        <View style={{flex: 1, overflow: 'hidden'}}>
            <FlatList 
            data={datas}
            renderItem={({item}) => <Story data={item} />}
            keyExtractor={(item, index) => item.id}
            // keyExtractor={({name}) => name}
            // orientation
            horizontal
            />
        </View>
    )
}

export default Stories

const styles = StyleSheet.create({})
