import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfilePicture from '../../profilepicture/ProfilePicture'

const Header = ({imageUri, name}) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} size={40} />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    name: {
        alignSelf:'center',
        fontWeight: 'bold',
        color: '#4f4f4f4'
    }
})
