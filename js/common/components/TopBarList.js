import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TopBarListItem from '../components/TopBarListItem'


export default class TopBarList extends Component {

    state = {
        isShowMask: styles.right > 0 ? true : false
    }

    componentWillReceiveProps = () => {
        this.setState({
            isShowMask: !this.state.isShowMask
        })
    }


    render() {
        const { style, onCloseTopBarList, TopListData } = this.props
        const { isShowMask } = this.state
        return (
            <>
                <View style={[styles.listContainer, { ...style, zIndex: 2 }]}>
                    {TopListData.map((value, index, arry) => {
                        return <TopBarListItem key={'tab' + index} item={value} length={arry.length} index={index} />
                    })}
                </View>

                {isShowMask
                    ? (
                        <View style={{ width: '100%', height: "100%", backgroundColor: 'transparent', position: 'absolute', zIndex: 1 }}>
                            <TouchableOpacity
                                style={{ width: '100%', height: '100%' }}
                                onPress={() => {
                                    onCloseTopBarList()
                                }} ></TouchableOpacity>
                        </View>
                    )
                    : null}

            </>
        )
    }
}


const styles = StyleSheet.create({

    listContainer: {
        position: 'absolute',
        width: 200,
        backgroundColor: 'rgba(241,241,241,1)',
        right: 5,
        ...Platform.select({
            ios: {
                top: 95
            },
            android: {
                top: 50
            }
        }),
        shadowColor: 'gray',//iOS 设置阴影
        shadowOffset: { width: -1.5, height: 1.5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 10 //android 设置阴影

    },
    listItem: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    check: {
        position: 'absolute',
        right: 20
    }
})


