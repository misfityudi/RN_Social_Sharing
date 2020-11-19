import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import CustomShare from './components/CustomShare';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <CustomShare/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    //flex:1,
    //width:'100%',

    justifyContent:"center",
    alignItems:"center",
  }
});

export default App;
