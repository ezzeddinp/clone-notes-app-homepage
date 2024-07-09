import React from 'react';
import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import MyLecture from './MyLecture';

const categories = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Buy Book' },
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Reading' },
    { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Invest' },
];

const categories2 = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'Snack' },
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Vegetable' },
    { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Drink' },
];


type ItemProps = { title: string };

const Item: React.FC<ItemProps> = ({ title }) => (
    <TouchableOpacity>
        <View style={styles.checkContainer}>
            <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={30} color="black" />
            <Text style={{ fontSize: 15, fontWeight: '600' }}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const Item2: React.FC<ItemProps> = ({ title }) => (
    <TouchableOpacity>
        <View style={styles.checkContainer2}>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="#40b536" selectionColor='white' />
            <Text style={{ fontSize: 15, fontWeight: '600' }}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const Card: React.FC = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* Card One */}
                <View style={styles.cardOne}>
                    <View style={styles.title}>
                        <Text style={styles.textCard}>Plan for</Text>
                        <TouchableOpacity>
                            <BlurView intensity={20} style={styles.menuStyle}>
                                <Ionicons name="heart-sharp" size={20} color="black" />
                            </BlurView>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCard}>The days</Text>
                    <View style={{ paddingTop: 20 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ overflow: 'hidden' }}>
                            <FlatList
                                data={categories}
                                renderItem={({ item }) => <Item title={item.title} />}
                                keyExtractor={(item) => item.id}
                            />
                        </ScrollView>
                    </View>
                </View>

                {/* Card Two */}
                <View style={styles.cardTwo}>
                    <View style={styles.title}>
                        <Text style={styles.textCard}>Image</Text>
                        <TouchableOpacity>
                            <BlurView intensity={20} style={styles.menuStyle2}>
                                <Ionicons name="heart-outline" size={20} color="black" />
                            </BlurView>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCard}>Notes</Text>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/images/stackBook.png')}
                            style={[styles.image, styles.shadow]}
                            resizeMode="cover"
                        />
                    </View>
                </View>

            </View>

            <View style={{ paddingVertical: 8 }}>
                <MyLecture />
            </View>

            <View style={styles.container}>
                <View style={styles.cardThree}>
                    <View style={styles.title}>
                        <Text style={styles.textCard}>List of</Text>
                        <TouchableOpacity>
                            <BlurView intensity={20} style={styles.menuStyle3}>
                                <Ionicons name="heart-sharp" size={20} color="black" />
                            </BlurView>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textCard}>Groceries</Text>
                    <View style={{ paddingTop: 20 }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ overflow: 'hidden' }}>
                            <FlatList
                                data={categories2}
                                renderItem={({ item }) => <Item2 title={item.title} />}
                                keyExtractor={(item) => item.id}
                            />
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.cardFour}>
                    <View style={styles.title2}>
                        <Text style={styles.textCardCustom}>Homeworks</Text>
                        <TouchableOpacity>
                            <BlurView intensity={20} style={styles.menuStyle4}>
                                <Ionicons name="heart-outline" size={20} color="black" />
                            </BlurView>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer2}>
                        <Image
                            source={require('../assets/images/homework.png')}
                            style={[styles.image2, styles.shadow]}
                            resizeMode="cover"
                        />
                    </View>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardOne: {
        backgroundColor: '#fa601e',
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: 24,
        width: '49%',

    },
    cardTwo: {
        backgroundColor: '#ffd900',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        padding: 24,
        width: '49%'
    },
    cardThree: {
        backgroundColor: '#72b86c',
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: 24,
        width: '49%',
    },
    cardFour: {
        backgroundColor: '#3cc7be',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        padding: 24,
        width: '49%',
    },
    checkContainer: {
        backgroundColor: '#e6581c',
        flexDirection: 'row',
        borderRadius: 30,
        paddingRight: 39,
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        gap: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    checkContainer2: {
        backgroundColor: '#64a35f',
        flexDirection: 'row',
        borderRadius: 30,
        paddingRight: 39,
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        gap: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textCard: {
        fontSize: 25,
        fontWeight: '800',
        marginBottom: 10,
    },
    textCardCustom: {
        fontSize: 20,
        fontWeight: '800',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -12,
        // paddingTop: 10,
    },
    title2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -12,
        // paddingTop: 10,
    },
    menuStyle: {
        backgroundColor: '#fa601e',
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    menuStyle2: {
        backgroundColor: '#ffd900',
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    menuStyle3: {
        backgroundColor: '#72b86c',
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    menuStyle4: {
        backgroundColor: '#3cc7be',
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    cardTwoLove: {
        backgroundColor: '#ffd900',
        borderRadius: 100,
        padding: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    imageContainer2: {
        alignItems: 'center',
        marginTop: 30,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    image2: {
        width: 200,
        height: 150,
        borderRadius: 10,
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});

export default Card;
