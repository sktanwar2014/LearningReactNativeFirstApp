import React from 'react';
import {View, Text, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

// Components
import styles from '../style.js';

const GoalItem = props => {  
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.listItem}>
                <Text>{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem;