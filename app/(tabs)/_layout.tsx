import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: 'white', // Set color for inactive tab icons
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarShowLabel: false, // Hide the tab labels
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
              <TabBarIcon name={focused ? 'add' : 'add'} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.blurWrapper}>
              <BlurView intensity={30} style={styles.blurView}>
                <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                  <TabBarIcon name={focused ? 'pencil' : 'pencil-outline'} color={color} />
                </View>
              </BlurView>
            </View>
          ),
        }}
      />
    </Tabs >
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 30,
    height: 70, // Adjust height as needed
    backgroundColor: 'transparent', // Make tab bar background transparent
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderTopWidth: 0, // Remove any border line at the top
    paddingHorizontal: 100 // Centering both icon tab
  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabel: {
    fontSize: 0, // Set font size to 0 to hide labels
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 35, // Half of width/height for perfect circle
    backgroundColor: 'transparent', // Background for each icon
    marginHorizontal: 10, // Margin to space out the icons
  },
  iconContainerFocused: {
    backgroundColor: 'black', // Background for focused icon
  },
  blurWrapper: {
    borderRadius: 35, // Same as the iconContainer
    overflow: 'hidden', // Ensures the BlurView is rounded
  },
  blurView: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
