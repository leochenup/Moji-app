import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native'
import NavigationTopBar from '../common/components/NavigationTopBar'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import TopBarList from '../common/components/TopBarList'



export default class NewestPage extends Component {

    state = {
        TopBarListOffest: -200
    }

    TopListData = [
        {
            title: '同步',
            isChecked: false,
            isShowArrow: false,
            onPress: () => { }
        },
        {
            title: '显示摘要',
            isChecked: false,
            isShowArrow: true,
            onPress: () => { }
        },
        {
            title: '显示与我分享',
            isChecked: false,
            isShowArrow: true,
            onPress: () => { }
        }
    ]

    _getTopBarLeftBtn = () => {
        return (
            <TouchableOpacity
                style={{}}
                onPress={() => { }}>
                <View style={{ marginLeft: 20 }}>
                    <SimpleLineIcons
                        name={'camera'}
                        size={20}
                        color={'black'}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    _getTopBarRightBtn = () => {
        return (
            <>
                <View style={{ flexDirection: 'row', marginRight: 20 }}>
                    <TouchableOpacity
                        style={{ marginRight: 15 }}
                        onPress={() => { this.toggleTopBarList() }}>
                        <View style={{}}>
                            <SimpleLineIcons
                                name={'options'}
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
                                name={'microphone'}
                                size={20}
                                color={'black'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    toggleTopBarList = () => {
        let { TopBarListOffest } = this.state
        LayoutAnimation.easeInEaseOut()
        if (TopBarListOffest === 5) {
            this.setState({
                TopBarListOffest: TopBarListOffest - 205
            })
        } else {
            this.setState({
                TopBarListOffest: TopBarListOffest + 205
            })
        }
    }

    /**
     * 关闭 topBarList
     */
    onCloseTopBarList = () => {
        let { TopBarListOffest } = this.state
        LayoutAnimation.easeInEaseOut()
        this.setState({
            TopBarListOffest: TopBarListOffest - 205
        })
    }

    render() {
        const statusBar = {
            barStyle: 'dark-content',
            hidden: false,
            backgroundColor: 'rgba(241,241,241,1)'
        }
        const TopBar = (
            <NavigationTopBar
                title='最新'
                style={styles.topBar}
                statusBar={statusBar}
                leftButton={this._getTopBarLeftBtn()}
                rightButton={this._getTopBarRightBtn()}
            />
        )
        return (
            <View style={styles.container}>
                {TopBar}
                <TopBarList style={{ right: this.state.TopBarListOffest }} onCloseTopBarList={this.onCloseTopBarList} TopListData={this.TopListData} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
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
    }
})