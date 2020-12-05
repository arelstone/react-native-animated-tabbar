/// <reference types="react" />
declare module "constants" {
    const _default: {
        backgroundColor: string;
        tabHeight: number;
        circleSize: number;
        circleAnimationDurationMs: number;
    };
    export default _default;
}
declare module "Label" {
    import { FC } from 'react';
    import { StyleProp, TextStyle } from 'react-native';
    interface LabelProps {
        textStyle?: StyleProp<TextStyle>;
        label: string;
        color: string;
    }
    const Label: FC<LabelProps>;
    export default Label;
}
declare module "utils/testHelpers" {
    import { ShallowWrapper } from 'enzyme';
    export const findElementByTestId: (Component: any, testID: string, wrapper: ShallowWrapper) => ShallowWrapper<any, any, import("react").Component<{}, {}, any>>;
    export const testId: (value?: string) => {
        testID: string;
        accessibleLabel?: undefined;
        accessible?: undefined;
    } | {
        accessibleLabel: string;
        accessible: boolean;
        testID?: undefined;
    };
}
declare module "StaticTabbar" {
    import { FC, ReactElement } from 'react';
    import { Animated, StyleProp, TextStyle } from 'react-native';
    import { ActiveCircleProps } from "Circle";
    type Tab = IconProp & ActiveIconProp & {
        label?: string;
        onPress: () => void;
    };
    export type IconProp = {
        icon: ReactElement;
    };
    export type ActiveIconProp = {
        activeIcon: ReactElement;
    };
    export type TabsProp = {
        tabs: Tab[];
        textStyle?: StyleProp<TextStyle>;
        height?: number;
        circleAnimationDurationMs?: number;
    };
    export type ColorProps = {
        backgroundColor: string;
    };
    interface StaticTabbarProps extends TabsProp, ActiveCircleProps, ColorProps {
        translateX: Animated.Value;
    }
    const StaticTabbar: FC<StaticTabbarProps>;
    export default StaticTabbar;
}
declare module "Circle" {
    import { FC } from 'react';
    import { StyleProp, ViewStyle, Animated } from 'react-native';
    import { ActiveIconProp, ColorProps } from "StaticTabbar";
    interface CircleProps extends ActiveCircleProps, ColorProps, ActiveIconProp {
        width: number;
        height: number;
        index: number;
        translateY?: Animated.AnimatedInterpolation;
    }
    export type ActiveCircleProps = {
        circleStyle?: StyleProp<ViewStyle>;
        circleContainerStyle?: StyleProp<ViewStyle>;
        circleSize?: number;
    };
    const Circle: FC<CircleProps>;
    export default Circle;
}
declare module "shapes" {
    export const shapes: (tabHeight: number, numberOfTabs: number) => string;
}
declare module "Tabbar" {
    import { FC } from 'react';
    import { ActiveCircleProps } from "Circle";
    import { TabsProp } from "StaticTabbar";
    interface TabbarProps extends TabsProp, ActiveCircleProps {
        backgroundColor?: string;
    }
    const Tabbar: FC<TabbarProps>;
    export default Tabbar;
}
