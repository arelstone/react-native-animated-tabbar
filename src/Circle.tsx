import React, { FC } from 'react';
import { View, StyleProp, ViewStyle, StyleSheet, Animated } from 'react-native';
import constants from './constants';
import { ActiveIconProp, ColorProps } from './StaticTabbar';

interface CircleProps extends ActiveCircleProps, ColorProps, ActiveIconProp {
    width: number;
    height: number;
    index: number;
    translateY: Animated.AnimatedInterpolation;
}

export type ActiveCircleProps = {
    circleStyle?: StyleProp<ViewStyle>;
    circleContainerStyle?: StyleProp<ViewStyle>;
    circleSize?: number;
}

const Circle: FC<CircleProps> = ({
    backgroundColor, height, index, translateY, width, circleContainerStyle, circleStyle, activeIcon,
    circleSize = constants.circleSize,
}) => {
    return <Animated.View
        style={[
            styles.circleContainer,
            {
                width: width,
                left: width * index,
                top: -16,
                height: height,
                transform: [{ translateY }],
            },
            circleContainerStyle,
        ]}
    >
        <View
            style={[
                styles.circle,
                {
                    backgroundColor,
                    width: circleSize,
                    height: circleSize,
                    borderRadius: circleSize / 2,
                },
                circleStyle,
            ]}
        >
            {activeIcon}
        </View>
    </Animated.View>;
};

export default Circle;

const styles = StyleSheet.create({
    circleContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    circle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
