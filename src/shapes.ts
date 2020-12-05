import * as shape from 'd3-shape';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

/* eslint-disable */
export const shapes = (tabHeight: number, numberOfTabs: number) => {
    const tabWidth = width / numberOfTabs

    // @ts-expect-error
    const left = shape.line()
        // @ts-expect-error
        .x(d => d.x)
        // @ts-expect-error
        .y(d => d.y)([
            { x: 0, y: 0 },
            { x: width, y: 0 },
        ]);

    // @ts-expect-error
    const tab = shape.line()
        // @ts-expect-error
        .x(d => d.x)
        // @ts-expect-error
        .y(d => d.y).curve(shape.curveBasis)([
            { x: width, y: 0 },
            { x: width + 5, y: 0 },
            { x: width + 10, y: 10 },
            { x: width + 15, y: tabHeight },
            { x: width + tabWidth - 15, y: tabHeight },
            { x: width + tabWidth - 10, y: 10 },
            { x: width + tabWidth - 5, y: 0 },
            { x: width + tabWidth, y: 0 },
        ]);
    // @ts-expect-error
    const right = shape.line()
        // @ts-expect-error
        .x(d => d.x)
        // @ts-expect-error
        .y(d => d.y)([
            { x: width + tabWidth, y: 0 },
            { x: width * 2.5, y: 0 },
            { x: width * 2.5, y: tabHeight },
            { x: 0, y: tabHeight },
            { x: 0, y: 0 },
        ]);

    return `${left} ${tab} ${right}`;
};
/* eslint-enable */
