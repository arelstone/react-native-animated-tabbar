import React, { FC } from 'react';
import { View, Text } from 'react-native';
import Tabbar from '../src/Tabbar';

interface ExampleProps { }

const Example: FC<ExampleProps> = () => {
    return <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Tabbar
            tabs={[
                {
                    icon: <Text>Icon #1</Text>,
                    activeIcon: <Text>Active Icon #1</Text>,
                    onPress: () => { },
                    label: 'Tab #1',
                },
                {
                    icon: <Text>Icon #2</Text>,
                    activeIcon: <Text>Active Icon #2</Text>,
                    onPress: () => { },
                    label: 'Tab #2',
                },
                {
                    icon: <Text>Icon #3</Text>,
                    activeIcon: <Text>Active Icon #3</Text>,
                    onPress: () => { },
                    label: 'Tab #3',
                },
            ]}
        />
    </View>;
};

export default Example;
