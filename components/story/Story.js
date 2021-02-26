import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProfilePicture from "../profilepicture/ProfilePicture"
// import data from "../../data/storedata"

const Story = ({data}) => {
    return (
        <View>
            <ProfilePicture data={data} />
        </View>
    )
}

export default Story

const styles = StyleSheet.create({})
