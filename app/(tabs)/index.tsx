import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Category from '@/components/Category';
import Card from '@/components/Card';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: -10, paddingTop: 40 }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.textHeader}>
            My
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.textHeader}>
              Notes
            </Text>
          </View>
        </View>
        <View style={{ paddingRight: 130}}>
          <Image
            source={require('../../assets/images/welcomeProfile.png')}
            style={[styles.image]}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity>
          <BlurView intensity={30} style={styles.menuStyle}>
            <MaterialCommunityIcons name="dots-square" size={20} color="white" />
          </BlurView>
        </TouchableOpacity>
      </View>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <Text style={styles.textHeader}>
          Notes
        </Text>
      </View> */}
      {/* Category Session */}
      <View style={styles.categoryContainer}>
        <Category />
      </View>

      <Card />
      {/* <MyLecture /> */}
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 3
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  textHeader: {
    color: 'white',
    fontSize: 40,
    fontWeight: '600'
  },
  menuStyle: {
    backgroundColor: '#151718',
    borderRadius: 100,
    padding: 17,
    paddingHorizontal: 17,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  categoryContainer: {
    paddingVertical: 20
  },
  image: {
    width: 80,
    height: 80
  },
});
