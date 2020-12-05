import React, { FC } from 'react';
import { Text, StyleProp, TextStyle, StyleSheet } from 'react-native';

interface LabelProps {
    textStyle?: StyleProp<TextStyle>;
    label: string;
    color: string;
}

const Label: FC<LabelProps> = ({ color, label, textStyle }) => {
    return <Text style={[{ color }, styles.label, textStyle]}>
        {label}
    </Text>;
};

export default Label;


const styles = StyleSheet.create({
    label: {
        textAlign: 'center',
        fontSize: 10,
        paddingTop: 10,
    },
});
