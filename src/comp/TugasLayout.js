import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TugasLayout extends React.Component {
  render() {
  return (
       <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>Pendidikan Teknik Informatika</Text>
        </View>

        <View style={styles.box2}>
         <Text style={styles.text}>Slider</Text>
        </View>

        <View style={styles.box3}>
          <View style={styles.button}><Text> 1 </Text></View>
          <View style={styles.button}><Text> 2 </Text></View>
          <View style={styles.button}><Text> 3 </Text></View>
          <View style={styles.button}><Text> 4 </Text></View>
        </View>

        <View style={styles.box4}>
          <View style={styles.button}><Text> 5 </Text></View>
          <View style={styles.button}><Text> 6 </Text></View>
          <View style={styles.button}><Text> 7 </Text></View>
          <View style={styles.button}><Text> 8 </Text></View>
        </View>

        <View style={styles.box5}>
         <Text style={{ padding: 30, fontSize: 20, color: 'black', textAlign: 'center' }}>
          #JaenKuliahdiPTI</Text>
        </View>
      </View>
     );
   }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E8EAF6',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#9FA8DA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#7986CB',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8C9EFF',
    alignItems: 'center'
  },
  box4: {
    flex: 1,
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#8C9EFF',
    alignItems: 'center'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#9FA8DA',
    margin: 10
  },
  text: {
    fontSize: 25
  },
  button: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    //marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
