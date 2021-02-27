import React from 'react'
import { StyleSheet, View } from 'react-native'
import Body from './body/Body'
import Footer from './footer/Footer'
import Header from './header/Header'


// const Post = ({post: { user }}) => {
const Post = ({post}) => {
    return (
        <View>
            <Header imageUri={post.user.imageUri} name={post.user.name} />
            <Body imageUri={post.imageUri} />
            <Footer likesCount={post.likesCount} caption={post.caption} postedAt={post.postedAt} />
        </View>
    )
}

export default Post

const styles = StyleSheet.create({})
