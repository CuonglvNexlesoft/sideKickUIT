import React from 'react';
import { View, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import Pulse from './Pulse';
import PropTypes from 'prop-types';

export default class LocationPulseLoader extends React.Component {
	constructor(props) {
		super(props);
	
		this.state = {
			circles: []
		};

		this.counter = 1;
		this.setInterval = null;
		this.anim = new Animated.Value(1);
	}

	componentDidMount() {
		this.setCircleInterval();
	}

	setCircleInterval() {
		this.setInterval = setInterval(this.addCircle.bind(this), this.props.interval);
		this.addCircle();
	}

	addCircle() {
		this.setState({ circles: [...this.state.circles, this.counter] });
		this.counter++;
	}

	onPressIn() {
		Animated.timing(this.anim, {
			toValue: this.props.pressInValue,
			duration: this.props.pressDuration,
			easing: this.props.pressInEasing,
		}).start(() => clearInterval(this.setInterval));
	}

	onPressOut() {
		Animated.timing(this.anim, {
			toValue: 1,
			duration: this.props.pressDuration,
			easing: this.props.pressOutEasing,
		}).start(this.setCircleInterval.bind(this));
	}

	render() {
		const { item } = this.props;
		return (
			<View style={{
				backgroundColor: 'transparent',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
				{this.state.circles.map((circle) => (
					<Pulse
						key={circle}
						{...this.props}
					/>
				))}
        {item}
			</View>
		);
	}	
}

LocationPulseLoader.propTypes = {
  interval: PropTypes.number,
  size: PropTypes.number,
  pulseMaxSize: PropTypes.number,
  avatar: PropTypes.string,
  avatarBackgroundColor: PropTypes.string,
  pressInValue: PropTypes.number,
  pressDuration: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  getStyle: PropTypes.func,
};

LocationPulseLoader.defaultProps = {
  interval: 1300,
  size: 100,
  pulseMaxSize: 200,
  avatar: undefined,
  avatarBackgroundColor: 'white',
  pressInValue: 0.8,
  pressDuration: 100,
  pressInEasing: Easing.in,
  pressOutEasing: Easing.in,
  borderColor: '#7BCB45',
  backgroundColor: '#7BCB45',
  getStyle: undefined,
};