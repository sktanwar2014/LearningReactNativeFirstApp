import React, {useState} from 'react';
import {View, TextInput, Button, Modal} from 'react-native';

// Components
import styles from '../style.js';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (e) => {
        setEnteredGoal(e)
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.input} 
                    value={enteredGoal}
                    onChangeText ={goalInputHandler}
                /> 
                <View style={styles.buttonContainer} >
                    <View style={styles.button} >
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button} >
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>  
    )
}

export default GoalInput;