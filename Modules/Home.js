import React, { useState } from 'react';
import {
    Text, 
    View, 
    Button,  
    TextInput,
    ScrollView,
    FlatList
} from 'react-native';

import styles from './style.js';
import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';


export default function Home() {
    
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    
    const addGoadHandler = (enteredGoal) => {
        if(enteredGoal.length === 0){
            return
        }
        setCourseGoals(currentGoals => 
            [...currentGoals,
                {id: Math.random().toString(), value: enteredGoal}
            ]
        );
        setIsAddMode(false);
    }

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => 
            {
                return currentGoals.filter(goal => goal.id !== goalId)
            }
        );
    }

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    }

  return (
    <View style={styles.screen}> 
        <Button title="Add New Goal" onPress={() => {setIsAddMode(true)}} />
        <GoalInput 
            visible={isAddMode} 
            onAddGoal={addGoadHandler}
            onCancel = {cancelGoalAdditionHandler}
        />
        <FlatList 
            data={courseGoals}
            keyExtractor={(item, index) => {item.id}}
            renderItem={itemData => ( 
                <GoalItem 
                    id={itemData.item.id}
                    item={itemData.item.value} 
                    onDelete={removeGoalHandler} />  
                )} 

        />
    </View>   
  );
}