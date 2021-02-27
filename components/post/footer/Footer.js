import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = ({likesCount, caption, postedAt}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    likes: {
        fontWeight: 3,
        margin: 3
    },
    caption: {
        margin: 3
    },
    postedAt: {
        color: '#8c8c8c',
        margin: 3,
    }
})
