import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import posts from '../../data/postdata'
import Post from '../post/Post'
import Stories from '../story/Stories'

const Feed = () => {
    return (
        <View>
            <FlatList
            data={posts}
            renderItem={({item}) => <Post post={item} /> }
            ListHeaderComponent={Stories}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Feed

const styles = StyleSheet.create({})
