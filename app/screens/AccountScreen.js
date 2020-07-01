import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'

export default function AccountScreen() {
    return (
        <Screen>
            <ListItem 
            title='Sahil Patel'
            subTitle='sahilwebdev@gmail.com'
            image={require('../assets/userimg.jpg')}
            
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    
})
