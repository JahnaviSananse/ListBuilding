import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const studentList = [
    {id: 1, name: 'Maya'},
    {id: 2, name: 'Rani'},
    {id: 3, name: 'Medha'},
    {id: 4, name: 'Maitri'},
    {id: 5, name: 'Kusum'},
  ];
  //    const renderStudentList = () =>{

  //    }
  return (
    <FlatList
      data={studentList}
      renderItem={({item}) => {
        return <Text> {item.name} </Text>;
      }}
      // renderItem = {renderStudentList}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
