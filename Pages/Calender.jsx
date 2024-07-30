/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const calendar = require('../assets/Calender__img.jpg');

export const CalendarScreen = () => {
  const days = [
    { day: 'Wed', date: 11 },
    { day: 'Thu', date: 12 },
    { day: 'Fri', date: 13 },
    { day: 'Sat', date: 14 },
    { day: 'Sun', date: 15 },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign style={styles.icon} name="leftcircleo" />
        <Text style={styles.heading}>Monthly Task</Text>
        <Entypo style={styles.icon} name="pencil" />
      </View>
      <View style={styles.content}>
        <Text style={styles.titleText}>September, 12 ✍</Text>
        <Entypo style={styles.calendarIcon} name="calendar" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {days.map((item, index) => (
          <View key={index} style={[styles.dateContainer, item.date === 12 && styles.selectedDateContainer]}>
            <Text style={[styles.dateText, item.date === 12 && styles.selectedDateText]}>{item.date}</Text>
            <Text style={[styles.dayText, item.date === 12 && styles.selectedDayText]}>{item.day}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.imageContainer}>
        <Image source={calendar} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#f5f5f5',
    padding: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    fontSize: 34,
    fontWeight: '600',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
  calendarIcon: {
    fontSize: 28,
    color: '#333',
  },
  scrollContainer: {
    height:'45%',
    marginBottom:100,
  },
  dateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 3,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedDateContainer: {
    backgroundColor: '#7b61ff',
    borderColor: '#7b61ff',
  },
  dateText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedDateText: {
    color: 'white',
  },
  dayText: {
    fontSize: 14,
    color: '#888',
  },
  selectedDayText: {
    color: 'white',
  },
  imageContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 600,
    marginBottom: 200,
    resizeMode: 'contain',
  },
});
