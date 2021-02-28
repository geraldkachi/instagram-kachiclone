import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Story from './Story';
import datas from "../../data/storedata"

const Stories = () => {
    return (
        <>
            <FlatList 
            data={datas}
            keyExtractor={({name}) => name}
            renderItem={({item}) => <Story data={item} />}
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.stories}
            // renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
            // keyExtractor={({name}) => name}
            // orientation
            />
        </>
    )
}

export default Stories

const styles = StyleSheet.create({
    stories: {
        marginBottom: 15
    }
})
