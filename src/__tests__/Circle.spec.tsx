import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Circle from '../Circle';
import { Text } from 'react-native';
import { findElementByTestId } from '../utils/testHelpers';

let wrapper: ShallowWrapper;

describe('Circle />', () => {
    beforeAll(() => {
        wrapper = shallow(<Circle
            activeIcon={<Text testID="Icon">ActiveIcon</Text>}
            backgroundColor="red"
            height={64}
            index={0}
            width={100}
        />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should display the icon', () => {
        expect(findElementByTestId('Text', 'Icon', wrapper).exists()).toBeTruthy();
    });

    it('should have correct backgroundColor', () => {
        expect(wrapper.find('View').prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ backgroundColor: 'red' }),
            ]),
        );
    });

    it('should apply circleContainerStyle', () => {
        wrapper.setProps({ circleContainerStyle: { backgroundColor: 'green' } });

        expect(wrapper.find('AnimatedComponent').prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ backgroundColor: 'green' }),
            ]),
        );
    });

    it('should apply circleStyle', () => {
        wrapper.setProps({ circleStyle: { backgroundColor: 'black' } });

        expect(findElementByTestId('View', 'Circle', wrapper).prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ backgroundColor: 'black' }),
            ]),
        );
    });

    it('should apply correct dimension styles for the wrapper', () => {
        expect(wrapper.find('AnimatedComponent').prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    width: 100,
                    left: 100 * 0,
                    height: 64,
                }),
            ]),
        );
    });

    it('should apply correct dimension to the circle', () => {
        wrapper.setProps({ circleSize: 80 });

        expect(findElementByTestId('View', 'Circle', wrapper).prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                }),
            ]),
        );
    });

});
