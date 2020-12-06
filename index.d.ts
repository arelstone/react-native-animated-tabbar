import { FC, ReactElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

declare module '@arelstone/react-native-animated-tabbar' {
    type Tab = {
        /**
         * The element that will be displayed when the tab is not active
         */
        icon: ReactElement;

        /**
         * The element that will be displayed when the tab is active
         */
        activeIcon: ReactElement;

        /**
         * Call back that is being invoked when a tab is pressed.
         * This is being called before the animation starts
         */
        onPress: () => void;

        /**
         * This text will be displaied below the icon.
         * The label will not be displayed when a tab is active
         */
        label?: string;
    }

    interface TabbarProps {
        /**
         * The tabs that should be displayed on the screen 
         * @type Array<Tab>
         */
        tabs: Tab[];

        /**
         * The background color of the tabbar and the circle 
         * @default 'white'
         */
        backgroundColor?: string;

        /**
         * The duration of the circle animation.
         * 
         * @default 100
         */
        circleAnimationDurationMs?: number;

        /**
         * Apply styling the the container that contains the circles
         */
        circleContainerStyle?: StyleProp<ViewStyle>;

        /**
         * The size of the circle
         * @default 40
         */
        circleSize?: number;

        /**
         * Apply styling for the circles
         */
        circleStyle?: StyleProp<ViewStyle>;

        /**
         * Set the height of the tabbar
         * @default 64
         */
        height?: number;

        /**
         * Apply styling to the label of each tab.
         */
        textStyle?: StyleProp<TextStyle>;
    }

    const Tabbar: FC<TabbarProps>;

    export default Tabbar;
}
