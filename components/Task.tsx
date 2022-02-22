import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

interface Props {
    task: string
}

const Task: FC<Props> = (props) => {
    const {task} = props;
    return <View style={styles.item}>
       <View style={styles.itemLeft}>
           <View style={styles.square}></View>
           <Text style={styles.itemTask}>{task}</Text>
       </View>
        <View style={styles.circular}></View>
    </View>
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCFC',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemTask: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderColor: '#55BCFC',
        borderWidth: 2,
    }
})

export default Task;