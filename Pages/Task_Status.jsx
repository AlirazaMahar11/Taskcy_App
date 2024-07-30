/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const TaskStatus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Task Status</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressCircle}>
          <Text style={styles.progressText}>65% </Text>
          <Text style={styles.progressText}>Complete</Text>
        </View>
      </View>

      <View style={styles.legend}>
        <Text style={styles.legendItem}>To Do</Text>
        <Text style={styles.legendItem}>In Progress</Text>
        <Text style={styles.legendItem}>Completed</Text>
      </View>

      <View style={styles.tasksContainer}>
        <Text style={styles.taskTitle}>Monthly</Text>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>Completed</Text>
          <Text style={styles.taskDetails}>18 Task now · 18 Task Completed</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>In Progress</Text>
          <Text style={styles.taskDetails}>2 Task now · 1 started</Text>
        </View>
        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>To Do</Text>
          <Text style={styles.taskDetails}>2 Task now · 1 Upcoming</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  progressCircle: {
    width: 200, height: 200, borderWidth: 20, borderColor: '#6756FF', borderRadius: 100, justifyContent: 'center',
  },
  progressText: {
    color: 'black',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  legendItem: {
    color: 'black',
    fontSize: 14,
  },
  tasksContainer: {
    marginTop: 20,
  },
  taskCard: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
  },
  taskTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDetails: {
    fontSize: 14,
    color: '#777',
  },
});

export default TaskStatus;
