import React, { FC } from 'react';
import { SafeAreaView, Dimensions, StyleSheet, Animated, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';
import { ActiveCircleProps } from './Circle';
import { shapes } from './shapes';
import StaticTabbar, { TabsProp } from './StaticTabbar';
import Constants from './constants';
interface TabbarProps extends TabsProp, ActiveCircleProps {
    backgroundColor?: string;
}

const { width } = Dimensions.get('window');

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Tabbar: FC<TabbarProps> = ({
    tabs, circleStyle, circleContainerStyle, textStyle,
    height = Constants.tabHeight, backgroundColor = Constants.backgroundColor, circleSize = Constants.circleSize,
}) => {
    const translateX = new Animated.Value(-width);

    return <View>
        <View style={{ width, height }}>
            <AnimatedSvg
                {...{ height }}
                width={width * 2.5}
                style={{
                    transform: [{ translateX }],
                }}
            >
                <Path
                    d={shapes(height, tabs.length)}
                    fill={backgroundColor}
                />
            </AnimatedSvg>

            <View style={StyleSheet.absoluteFillObject}>
                <StaticTabbar
                    {...{ tabs, translateX, backgroundColor, circleStyle, circleContainerStyle, circleSize, textStyle }}
                />
            </View>
        </View>
        <SafeAreaView style={{ backgroundColor }} />
    </View>;

};

export default Tabbar;

