import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReelsPlayList = () => {
    return (
        <View style={styles.container}>
            <Text>Reels Play List</Text>
        </View>
    )
}

export default ReelsPlayList

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center'
    }
})
