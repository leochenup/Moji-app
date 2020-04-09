import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import NavigationTopBar from '../common/components/NavigationTopBar'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default class MyPage extends Component {

  _getTopBarRightBtn = () => {
    return (
      <>
        <View style={{ flexDirection: 'row', marginRight: 20 }}>
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => { }}>
            <View style={{}}>
              <SimpleLineIcons
                name={'envelope'}
                size={20}
                color={'black'}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
            onPress={() => { }}>
            <View style={{}}>
              <SimpleLineIcons
                name={'settings'}
                size={20}
                color={'black'}
              />
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  render() {
    const statusBar = {
      barStyle: 'dark-content',
      hidden: false,
      backgroundColor: 'rgba(241,241,241,1)'
    }
    const TopBar = (
      <NavigationTopBar
        title=''
        style={styles.topBar}
        statusBar={statusBar}
        rightButton={this._getTopBarRightBtn()}
      />
    )
    return (
      <View style={styles.container}>
        {TopBar}
        <ScrollView style={styles.mainContainer}>
          <View style={styles.userMsg}>
            <View style={styles.user}></View>
            <View style={styles.statistics}>
              <View style={styles.dataItem}></View>
              <View style={styles.dataItem}></View>
              <View style={styles.dataItem}></View>
            </View>
          </View>
          <View style={styles.fucList}>
            <TouchableOpacity style={styles.listItem}>
              <SimpleLineIcons name='social-steam' size={26} style={styles.icon}/>
              <Text>与我分享</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <SimpleLineIcons name='social-steam' size={26} style={styles.icon}/>
              <Text>与我分享</Text>
            </TouchableOpacity>
            
            <View style={{ width: '100%', height: 1, backgroundColor: 'rgba(0,0,0,0.1)' }}></View>
            
            <TouchableOpacity style={styles.listItem}>
              <SimpleLineIcons name='social-steam' size={26} style={styles.icon}/>
              <Text>与我分享</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <SimpleLineIcons name='social-steam' size={26} style={styles.icon}/>
              <Text>与我分享</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <SimpleLineIcons name='social-steam' size={26} style={styles.icon}/>
              <Text>与我分享</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30
  },
  topBar: {
    width: '100%',
    backgroundColor: 'rgba(241,241,241,1)',
    shadowColor: 'gray',//iOS 设置阴影
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 2 //android 设置阴影
  },
  mainContainer: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center'
  },
  userMsg: {
    width: '100%',
    height: 200,
    borderWidth: 1
  },
  user: {
    width: '100%',
    height: '50%',
    borderWidth: 1
  },
  statistics: {
    width: '100%',
    height: '50%',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  dataItem: {
    width: 100,
    height: '100%',
    borderWidth: 1
  },
  fucList: {
    width: '100%',
    borderWidth: 1,
    alignItems: 'center'
  },
  listItem: {
    width: '100%',
    height: 80,
    flexDirection: "row",
    alignItems: 'center'
  }
  ,icon:{
    marginLeft: 25,
    marginRight: 20
  }
})