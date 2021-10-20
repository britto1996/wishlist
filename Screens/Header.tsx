import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
             <Avatar rounded
              icon={{name:"user",type:"font-awesome"}}
              source={{
                     uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop:45,
        paddingBottom:30,
        paddingHorizontal:30,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#f3f3f3",
    },

    headerText:{
        fontSize:20,
        fontWeight:"bold"
    }
})
