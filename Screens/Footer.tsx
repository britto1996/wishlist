import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 0.1,
        backgroundColor:"#f3f3f3"
    },

    footerText: {
        marginTop:"5%",
        marginLeft:"5%",
        fontWeight:"bold",
    }
})
