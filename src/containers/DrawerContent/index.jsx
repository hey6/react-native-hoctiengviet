/**
 * Custom Drawer Content
 */

import React from 'react';
import {Linking, View, TouchableHighlight, StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerHeader from './DrawerHeader';
import DrawerListItem from './DrawerListItem';

const DrawerContent = ({state, descriptors, navigation}) => {
  return (
    <DrawerContentScrollView style={styles.root}>
      <View style={styles.container}>
        <DrawerHeader />
        <DrawerListItem />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {},
});

export default DrawerContent;