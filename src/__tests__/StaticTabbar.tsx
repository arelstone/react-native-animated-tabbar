import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import StaticTabbar from '../StaticTabbar';
import { Animated, Dimensions, Text } from 'react-native';
import { findElementByTestId } from '../utils/testHelpers';

let wrapper: ShallowWrapper;
const mockOnPress = jest.fn();
const tabs = [
    {
        icon: <Text>Icon #1</Text>,
        activeIcon: <Text>ActiveIcon #1</Text>,
        onPress: mockOnPress,
    },
    {
        icon: <Text>Icon #2</Text>,
        activeIcon: <Text>ActiveIcon #2</Text>,
        onPress: mockOnPress,
    },
];

describe('<StaticTabbar />', () => {
    beforeAll(() => {
        wrapper = shallow(<StaticTabbar
            backgroundColor="blue"
            {...{ tabs }}
            translateX={new Animated.Value(0)}
        />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should display TWO tabs', () => {
        expect(wrapper.find('TouchableWithoutFeedback')).toHaveLength(2);
    });

    it('should display correct Icon', () => {
        expect(findElementByTestId('TouchableWithoutFeedback', 'Tab_0', wrapper).find('Text').prop('children')).toEqual('Icon #1');
    });

    describe('Circle', () => {
        it('should display a Circle', () => {
            expect(findElementByTestId('Circle', 'Circle_0', wrapper).exists()).toBeTruthy();
        });

        it('should have correct ActiveIcon', () => {
            expect(findElementByTestId('Circle', 'Circle_0', wrapper).prop('activeIcon').props.children).toEqual('ActiveIcon #1');
        });

        it('should apply circleSize', () => {
            wrapper.setProps({ circleSize: 60 });
            expect(findElementByTestId('Circle', 'Circle_0', wrapper).prop('circleSize')).toEqual(60);
        });

        it('should apply height', () => {
            expect(findElementByTestId('Circle', 'Circle_0', wrapper).prop('height')).toEqual(64);
        });

        it('should have correct width', () => {
            expect(findElementByTestId('Circle', 'Circle_0', wrapper).prop('width')).toEqual(Dimensions.get('window').width / tabs.length);
        });
    });
});
