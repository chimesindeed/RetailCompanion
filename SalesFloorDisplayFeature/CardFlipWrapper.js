import React, {useContext} from 'react'
import CardFlip from 'react-native-card-flip';
import {View, Text, TouchableOpacity} from 'react-native';

export default class CardFlipWrapper extends React.Component { 

  render(){


    return (
      <CardFlip ref={(card) => this.card = card} >
        
        <TouchableOpacity style={this.props.cardContainerStyle}
         
          onLongPress={
            () => this.card.flip()
          }
        >
          <View style={this.props.itemAndPriceStyle}>
            <Text style={this.props.priceStyle}>{`${this.props.price}`}</Text>
            <Text style={this.props.itemStyle}>{`${this.props.item}`}</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity
          style={this.props.cardContainerStyle}
          onLongPress={
            () => this.card.flip()
          }
        >
          {
           React.Children.map(
             this.props.children,
             (child, i) => {
               return React.cloneElement(child, {
                 flip: () => this.card.flip()
               })
             }

           )
          }
        </TouchableOpacity>  

      </CardFlip>
    )
  }
}