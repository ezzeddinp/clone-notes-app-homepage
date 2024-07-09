import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


const categories = ['TES1', 'TES2', 'TES3', 'TES4', 'TES5', 'TES6', 'TES7', 'TES8', 'TES9'];

const Category = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: 'row' }}>
                {
                    categories.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.category}>
                            <Text style={styles.textCategory}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    )
}

export default Category

const styles = StyleSheet.create({
    category: {
        backgroundColor: 'black',
        borderColor: '#737373',
        borderWidth: 1,
        borderRadius: 30,
        margin: 5, // Adds gap between each item
        justifyContent: 'center', // Center text vertically
        alignItems: 'center' // Center text horizontally
    },
    textCategory: {
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 15, // Adds vertical padding for better spacing
    }
})