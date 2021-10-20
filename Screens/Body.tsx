import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList, Image, SafeAreaView } from 'react-native'
import { Button } from 'react-native-elements'
import wishData from './WishData'

const {width, height} = Dimensions.get("window")

export default function Body() {
    // console.log(wishData[0].displayName)

    return (
            <SafeAreaView style={styles.wishListsContainer}>
                <Text style={styles.wishListTxt}>Wish List</Text>
                <Text style={styles.listTxt}>Your Lists</Text>
                <View>
                   <FlatList data={wishData}
                    numColumns={2}
                    horizontal={false}
                    columnWrapperStyle={{
                        flex: 1,
                        justifyContent:"space-evenly"
                    }}
                    keyExtractor={(item,index)=>'key'+ index}
                    renderItem={({item})=>{
                        return <View style={styles.cardView}>
                             <View style={styles.imgView}> 
                                <Image  style={styles.img} source={{uri:item.previewImage}} />
                             </View> 
                
                             <Text style={styles.productNames}>{item.name}</Text>
                              
                
                            <View style={styles.btnGroup}>
                                <Button buttonStyle={styles.cartBtn} title="Add Cart"/>
                                <Button buttonStyle={styles.removeBtn} title="Remove"/>
                             </View>
                            
                                
                           
                        </View>
                        
                    }} />
                    
                </View>
        </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({

    wishListsContainer:{
        marginLeft:"5%",
        marginRight:"5%",
        marginTop:"5%",
        marginBottom:"15%",
        flex:1
    },


    wishListTxt:{
        fontWeight:"bold",
        fontSize:20
    },

    listTxt:{
        marginTop:20,
        fontWeight:"bold",
        color:"#8dc63f",
        borderBottomWidth:2,
        borderBottomColor:"#8dc63f",
    },

    cardView:{
        flex:1,
        marginTop:20,
        marginLeft:5,
        marginRight:5,
        borderRadius:10,
        backgroundColor:"#f3f3f3",
        elevation:3,
        width:width - 20,
        height:height / 3
    },

    imgView:{
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:2,
        borderBottomColor:"#8dc63f",
        // marginTop:"2%",
        backgroundColor:"#fff",
    },

    img:{
        width: 150, 
        height: 175, 
        borderRadius:5,
        resizeMode:"stretch"
    },

   

    productNames:{
        marginTop:"2%",
        textAlign:"center",
        fontWeight:"bold",
    },

    btnGroup:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"20%",
        flexDirection:"row",
    },

    cartBtn:{
        backgroundColor:"#8dc63f",
        height:5,
        padding:10,
        color:"#fff"
    },

    removeBtn:{
        backgroundColor:"gray",
        color:"#fff",
        height:5,
        padding:10,
        marginLeft:5
    }
})
