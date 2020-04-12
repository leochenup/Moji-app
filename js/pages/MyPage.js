import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Platform } from 'react-native'
import NavigationTopBar from '../common/components/NavigationTopBar'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class MyPage extends Component {

  _getTopBarRightBtn = () => {
    let { navigation } = this.props
    return (
      <>
        <View style={{ flexDirection: 'row', marginRight: 20 }}>
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => {
              navigation.navigate('MessagePage')
            }}>
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
            onPress={() => {
              navigation.navigate('SettingPage')
            }}>
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
            <View style={styles.user}>
              <Text style={styles.username}>昵称：_Ah_sunrise_</Text>
              <TouchableOpacity
                style={styles.useravatarContainer}
              >
                <Image source={require('../common/images/moji.png')} style={styles.useravatar} />
              </TouchableOpacity>
            </View>

            <View style={styles.statistics}>
              <View style={[styles.dataItem, { borderRightWidth: 1, borderColor: 'rgba(0,0,0,0.1)' }]}>
                <View style={styles.nmberTextContainer}>
                  <Text style={styles.numberText}>999</Text>
                  <Text style={styles.unitText}>天</Text>
                </View>
                <Text style={styles.numberMessage}>使用云笔记</Text>
              </View>
              <View style={[styles.dataItem, { borderRightWidth: 1, borderColor: 'rgba(0,0,0,0.1)' }]}>
                <View style={styles.nmberTextContainer}>
                  <Text style={styles.numberText}>436</Text>
                  <Text style={styles.unitText}>个</Text>
                </View>
                <Text style={styles.numberMessage}>文件数</Text>
              </View>
              <View style={styles.dataItem}>
                <View style={styles.nmberTextContainer}>
                  <Text style={styles.numberText}>9</Text>
                  <Text style={styles.unitText}>个</Text>
                </View>
                <Text style={styles.numberMessage}>收藏数</Text>
              </View>
            </View>
          </View>

          <View style={styles.logoContainer}>
            <View style={styles.logoContainerinner}>
              <Image source={require('../common/images/MoJIbig.png')} style={styles.logo} />
            </View>
          </View>

          <View style={styles.fucList}>

            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.icon, { backgroundColor: '#1E90FF' }]}>
                <MaterialCommunityIcons name='calendar-text-outline' size={20} color='white' />
              </View>
              <Text style={styles.listText}>我的任务</Text>
              <MaterialCommunityIcons name='chevron-right' size={20} style={{ position: 'absolute', right: 25, color: 'grey' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.icon, { backgroundColor: 'orange' }]}>
                <MaterialCommunityIcons name='heart-circle' size={20} color='white' />
              </View>
              <Text style={styles.listText}>我的收藏</Text>
              <MaterialCommunityIcons name='chevron-right' size={20} style={{ position: 'absolute', right: 25, color: 'grey' }} />
            </TouchableOpacity>
            <View style={{ width: '100%', height: 0.3, backgroundColor: 'rgba(0,0,0,0.1)' }}></View>


            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.icon, { backgroundColor: '#3CB371' }]}>
                <MaterialCommunityIcons name='star-half' size={20} color='white' />
              </View>
              <Text style={styles.listText}>加星文件</Text>
              <MaterialCommunityIcons name='chevron-right' size={20} style={{ position: 'absolute', right: 25, color: 'grey' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.icon, { backgroundColor: '#DA70D6' }]}>
                <MaterialCommunityIcons name='bookmark' size={20} color='white' />
              </View>
              <Text style={styles.listText}>我的标签</Text>
              <MaterialCommunityIcons name='chevron-right' size={20} style={{ position: 'absolute', right: 25, color: 'grey' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.icon, { backgroundColor: '#1E90FF' }]}>
                <MaterialCommunityIcons name='hubspot' size={20} color='white' />
              </View>
              <Text style={styles.listText}>与我分享</Text>
              <MaterialCommunityIcons name='chevron-right' size={20} style={{ position: 'absolute', right: 25, color: 'grey' }} />
            </TouchableOpacity>
            <View style={{ width: '100%', height: 0.3, backgroundColor: 'rgba(0,0,0,0.1)' }}></View>

            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.icon, { backgroundColor: '#FA8072' }]}>
                <MaterialCommunityIcons name='account-heart-outline' size={20} color='white' />
              </View>
              <Text style={styles.listText}>用户满意度调查</Text>
              <MaterialCommunityIcons name='chevron-right' size={20} style={{ position: 'absolute', right: 25, color: 'grey' }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItem}>
              <View style={[styles.icon, { backgroundColor: '#696969' }]}>
                <MaterialCommunityIcons name='desktop-mac-dashboard' size={20} color='white' />
              </View>
              <Text style={styles.listText}>关于开发者</Text>
              <MaterialCommunityIcons name='chevron-right' size={20} style={{ position: 'absolute', right: 25, color: 'grey' }} />
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
  },
  userMsg: {
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
    // backgroundColor: 'pink',
    // marginBottom: 5,
    // marginTop: 5,
    // marginLeft: 5,
    // marginRight: 5,
    // borderRadius: 5
  },
  user: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  useravatarContainer: {
    width: 60,
    height: 60,
    borderWidth: 4,
    // marginLeft: 25,
    marginRight: 30,
    borderRadius: 30,
    borderRightColor: '#1E90FF',
    borderTopColor: '#1E90FF',
    borderBottomColor: '#1E90FF',
    borderLeftColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',//iOS 设置阴影
    shadowOffset: { width: -1.5, height: 1.5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15 //android 设置阴影
  },
  useravatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  username: {
    marginLeft: 30,
    fontSize: 15,
    fontWeight: "bold"
  },
  statistics: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dataItem: {
    width: '33.3%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nmberTextContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // height: 50,
    marginTop: -5
  },
  numberText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  unitText: {
    color: 'grey',
    fontSize: 10,
    marginLeft: 3,
    ...Platform.select({
      ios: { paddingBottom: 0 },
      android: { paddingBottom: 3 }
    })
  },
  numberMessage: {
    fontSize: 12,
  },
  logoContainer: {
    width: '100%',
    height: 80,
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainerinner: {
    width: '83%',
    height: 42,
    borderRadius: 30,
    shadowColor: 'gray',//iOS 设置阴影
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10 //android 设置阴影
  },
  logo: {
    width: '100%',
    height: 40,
    borderRadius: 30,

  },
  fucList: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10
  },
  listItem: {
    width: '100%',
    height: 70,
    flexDirection: "row",
    alignItems: 'center',
    // borderWidth: 1
  },
  icon: {
    marginLeft: 30,
    marginRight: 25,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  listText: {
    fontSize: 15,
    // color: 'red'
  }
})