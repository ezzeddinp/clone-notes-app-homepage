import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'

const MyLecture = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', gap: 20, alignContent: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/images/githubProfile.png')}
                    style={[styles.image]}
                    resizeMode="cover"
                />
                <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'grey' }}>Diary</Text>
                    <Text style={{ fontSize: 20, fontWeight: '800' }}>My lecture</Text>
                </View>
            </View>
            <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                <TouchableOpacity>
                    <BlurView intensity={3} style={styles.menuStyle2}>
                        <Ionicons name="heart-outline" size={20} color="black" />
                    </BlurView>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyLecture

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffdbb5',
        padding: 24,
        flexDirection: 'row',
        borderRadius: 100,
        paddingVertical: 25,
        justifyContent: 'space-between',
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 5,
    },
    menuStyle2: {
        backgroundColor: '#ebcaa7',
        borderRadius: 100,
        padding: 15,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    }
})