import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import Label from '../Label';

let wrapper: ShallowWrapper;

describe('<Label />', () => {
    beforeAll(() => {
        wrapper = shallow(<Label
            color="blue"
            label="MyLabel"
        />);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should display correct text', () => {
        expect(wrapper.find('Text').prop('children')).toEqual('MyLabel');
    });

    it('should apply correct color', () => {
        expect(wrapper.find('Text').prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ color: 'blue' }),
            ]),
        );
    });

    it('should apply textStyle', () => {
        wrapper.setProps({ textStyle: { fontSize: 42 } });

        expect(wrapper.find('Text').prop('style')).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ fontSize: 42 }),
            ]),
        );
    });
});
