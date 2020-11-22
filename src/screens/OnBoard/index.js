/////////////////////////////////////////////////////////////////
// exports

// react, react-native
import React from 'react'
import { View,Text,StatusBar,Image,Dimensions, TouchableOpacity } from 'react-native'

// lib
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

// images
const g_logo = require('../../assets/images/g_logo.png')
const user_1 = require('../../assets/images/user1.png')
const user_2 = require('../../assets/images/user2.png')

/////////////////////////////////////////////////////////////////
// class

export default class OnBoard extends React.Component {
    
    /////////////////////////////////////////////////////////////////
    // life cycles  

    constructor(props){
        super(props);
        this.state = {
            
            // demo user image data
            users_image: [
                {
                    image: user_1
                },
                {
                    image: user_2
                },
                {
                    image: user_1
                },
                {
                    image: user_1
                },
                {
                    image: user_2
                },
                {
                    image: user_1
                }
            ]
        }
    }

    /////////////////////////////////////////////////////////////////
    // render

    render(){
        // device width
        var width =  Dimensions.get('window').width

        // slider width
        var sliderWidth = width 

        // item width
        var itemWidth =  Math.round(sliderWidth * 0.7);
        return(
            <View style={ container }>
                {/* status bar */}
                <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />

                {/* intro text */}
                <View style={ instructionContainer }>
                    <Text style={ instructionText }><Text style={{fontWeight: '700'}}>로그인</Text>하시고 수많은 프로젝트와 유튜버를 만나보세요 :)</Text>
                </View>
                
                {/* scroll bar */}
                <View style = { userImageContainer }>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.users_image}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
                        activeSlideAlignment= 'center'
                        layout="default"
                        inactiveSlideScale = {0.9}
                        inactiveSlideOpacity={1} 
                    />
                </View>

                {/* action button */}
                <TouchableOpacity style={ loginButtonContainer } onPress={()=>{ this.handleLogin() }}>
                    <View style={{ marginLeft: 15 }}>
                        <Image style={{ height: 20, width: 20 }} source={g_logo} />
                    </View>
                    <View style={{ marginLeft: 22 }}>
                        <Text style={ loginButtonText }>구글로 시작하기</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    /////////////////////////////////////////////////////////////////
    // helpers - view

    // render 
    _renderItem = ({item, index}) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.image} style={ imageStyle }/>
            </View>
        );
    }

    /////////////////////////////////////////////////////////////////
    // helpers - action
    handleLogin(){
        alert('In progress')
    }
}

/////////////////////////////////////////////////////////////////
// styles

const container = {
    backgroundColor: '#E5E5E5',
    flex: 1,
    alignItems: 'center'
}

const instructionContainer = {
    marginTop: 84,
    height: 48,
    width: 217
}

const instructionText = {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 17,
    color: '#4B4B4B'
}

const userImageContainer = {
    marginTop: 40,
    height: 309
}

const loginButtonContainer = {
    marginTop: 67,
    height: 53,
    width: 298,
    borderRadius: 30,
    backgroundColor: '#E74133',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 66,
}

const loginButtonText = {
    fontWeight: '400',
    lineHeight: 20,
    fontSize: 16,
    color: 'white'
}

const imageStyle = {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: '#000',
    shadowOpacity: 1,
    elevation: 10,
    height: 309, 
    width: 264, 
    borderRadius: 10 
}