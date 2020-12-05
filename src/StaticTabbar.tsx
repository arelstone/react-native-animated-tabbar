import React, { FC, Fragment, ReactElement, useState } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Animated, StyleProp, TextStyle, Dimensions } from 'react-native';
import Circle, { ActiveCircleProps } from './Circle';
import Label from './Label';
import Constants from './constants';

type Tab = IconProp & ActiveIconProp & {
    label?: string;
    onPress: () => void;
}

export type IconProp = {
    icon: ReactElement;
}

export type ActiveIconProp = {
    activeIcon: ReactElement;
}

export type TabsProp = {
    tabs: Tab[];
    textStyle?: StyleProp<TextStyle>;
    height?: number;
    circleAnimationDurationMs?: number;
}

export type ColorProps = {
    backgroundColor: string;
}
interface StaticTabbarProps extends TabsProp, ActiveCircleProps, ColorProps {
    translateX: Animated.Value;
}

const { width } = Dimensions.get('window');

const StaticTabbar: FC<StaticTabbarProps> = ({
    tabs, translateX, circleStyle, circleContainerStyle, backgroundColor, textStyle,
    circleSize = Constants.circleSize, height = Constants.tabHeight,
    circleAnimationDurationMs = Constants.circleAnimationDurationMs,
}) => {
    const [values] = useState<Animated.Value[]>(tabs.map((_, index) => new Animated.Value(index === 0 ? 1 : 0)));
    const tabWidth = width / tabs.length;
    const handleOnPress = (toIndex: number) => {
        tabs[toIndex].onPress();
        Animated.sequence([
            ...values.map(value => Animated.timing(
                value,
                { toValue: 0, useNativeDriver: true, duration: circleAnimationDurationMs },
            )),
            Animated.parallel([
                Animated.spring(values[toIndex], { toValue: 1, useNativeDriver: true }),
                Animated.spring(translateX, { toValue: -width + tabWidth * toIndex, useNativeDriver: true }),
            ]),
        ]).start();
    };

    return <View style={styles.container}>
        {tabs.map(({ icon, activeIcon, label }, index) => {
            const activeValue = values[index];
            const opacity = translateX.interpolate({
                inputRange: [
                    -width + tabWidth * (index - 1),
                    -width + tabWidth * index,
                    -width + tabWidth * (index + 1),
                ],
                outputRange: [1, 0, 1],
                extrapolate: 'clamp',
            });
            const translateY = activeValue.interpolate({ inputRange: [0, 1], outputRange: [height, 0] });

            return <Fragment key={`Tab_${index}`}>
                <TouchableWithoutFeedback onPress={() => handleOnPress(index)}>
                    <Animated.View style={[styles.tab, { opacity, height }]}>
                        {icon}
                        {label && <Label
                            {...{ label, textStyle }}
                            color={icon.props.color}
                        />}
                    </Animated.View>
                </TouchableWithoutFeedback>
                <Circle
                    {...{
                        activeIcon, backgroundColor, height, index, circleContainerStyle,
                        circleSize, circleStyle, translateY,
                    }}
                    width={tabWidth}
                />
            </Fragment>;
        })}
    </View>;
};

export default StaticTabbar;



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
