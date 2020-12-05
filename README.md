# @arelstone/react-native-animated-tabbar

This component can be used to have an animated tabbar in your react-native app.

This package leverages on [react-native-svg](https://github.com/react-native-svg/react-native-svg) and [d3-shapes](https://github.com/d3/d3-shape).


![npm](https://shields.cdn.bka.li/npm/dt/@arelstone/react-native-animated-tabbar?style=for-the-badge)
![npm (scoped)](https://shields.cdn.bka.li/npm/v/@arelstone/react-native-animated-tabbar?label=version&style=for-the-badge)
![GitHub issues](https://shields.cdn.bka.li/github/issues/arelstone/react-native-animated-tabbar?style=for-the-badge)
![GitHub pull requests](https://shields.cdn.bka.li/github/issues-pr/arelstone/react-native-animated-tabbar?style=for-the-badge)

![@arelstone/react-native-animated-tabbar](https://github.com/arelstone/react-native-animated-tabbar/blob/master/docs/example.png?raw=true)

## Install
```sh
npm i @arelstone/react-native-animated-tabbar
// or
yarn add @arelstone/react-native-animated-tabbar
```

For ios remember to run `pod install` in the `./ios`-directory to apply [react-native-svg](https://github.com/react-native-svg/react-native-svg).

## Props

| Prop            	    | Type      	| Description      	|
|-------------------	|--------------	|--------------	|
| tabs               	| { icon: ReactElement; activeIcon: ReactElement; onPress: () => void; label?: string;}	| An array of tabs that will be displayed 	|
| backgroundColor      	| string (optional)	| Set the backgroundColor of the  tabbar and the circle. Default: white	|
| circleAnimationDurationMs	| number (optional)	| Change the duration of the circle animation. Defualt: 100	|
| circleAnimationDurationMs	| number (optional)	| Change the duration of the circle animation. Defualt: 100	|
| circleContainerStyle	| StyleProp<ViewStyle> (optional)	| Apply some styling the the container that holds the circles	|
| circleSize	| number (optional)	| The size of the circle. Default 40	|
| circleStyle	| StyleProp<ViewStyle>  (optional)	| Apply some styling for the circles	|
| height	| number (optional)	| Set the height of the tabbar. Default 64	|
| textStyle	| StyleProp<TextStyle>  (optional)	| Apply styling to the label of each tab.	|


### Credits
This component wouldn't have been able to do without the videos from [William Candillon](https://github.com/wcandillon) who was the inspiration for this component. I will reccoment all of his [videos](https://www.youtube.com/c/wcandillon).
