
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity ,TextInput} from 'react-native';
import styles from "./styles";
import { AVATAR_SIZE, CHAT_STATUS_TEXT, CHAT_STATUS } from '../../../constants/constant';
import images from '../../../themes/Images';
import IconTooltip from '../../commons/IconTooltip';
import Text from '../../commons/Text';
export default class ChatRoomUserStatusPopUp extends Component {

  constructor(props) {
    super(props);
    this.state={
     
    };
    this.closeView = this.closeView.bind(this);
  }
  
  closeView(){
    if(this.props.closeView)
      this.props.closeView();
  }

  render() {
    const { onItemClick } = this.props;
    return (
      <TouchableOpacity style={styles.container} 
      onPress={this.closeView}
      activeOpacity={1}>
          <View style={styles.content}>
              <Image style={styles.background} 
              source={images.bgPopupStatus}
              />
              <IconTooltip
              style={styles.item}
              onPress={onItemClick}
              status={CHAT_STATUS.ACTIVE}
              iconView={<View  style={[styles.styleCirle,styles.backgroundColorPrimary]} />} 
              textView = {<Text text={"Public"} style={[styles.styleText,styles.availabeText]} />}
              />
              <View style={styles.dividerLine}/>
              <IconTooltip
              style={styles.item}
              onPress={onItemClick}
              status={CHAT_STATUS.BUSY}
              iconView={<View  style={[styles.styleCirle,styles.backgroundColorOrange]} >
                          <Image
                          style={styles.iconTooltipIcon}
                          source={images.icClock}/>
                        </View>} 
              textView = {<Text text={"Private"} style={[styles.styleText,styles.busyText]} />}
              />
              <View style={styles.dividerLine}/>
              <IconTooltip
              style={styles.item}
              onPress={onItemClick}
              status={CHAT_STATUS.AWAY}
              iconView={<View  style={[styles.styleCirle,styles.backgroundColorGray]}> 
                          <Image
                              style={styles.iconTooltipIcon}
                              source={images.icClock}
                          />
                        </View>} 
              textView = {<Text text={"Anonymous"} style={[styles.styleText,styles.awayText]} />}
              />
          </View>
         
         
      </TouchableOpacity>
    );
  }  
}

ChatRoomUserStatusPopUp.defaultProps = {
    
};

ChatRoomUserStatusPopUp.propTypes = {
    onItemClick: PropTypes.func,
    closeView: PropTypes.func,
};
