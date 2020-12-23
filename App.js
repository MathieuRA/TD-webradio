import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './src/component/Body'
import {Footer, Header} from './src/utils'

export default function App() {
  return (
    <View style={{flex:1}}>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.body}>
        <Body/>
      </View>
      <View style={styles.footer}>
       <Footer/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height:70,
    backgroundColor: '#c8c7c7',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor:'black',
    borderBottomWidth:2
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height:75,
    backgroundColor: '#c8c7c7',
    borderTopColor: 'black',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',    
  },
});
