import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import styles from './style';

const ListScreen = () => {
  const studentList = [
    {id: 1, name: 'Maya'},
    {id: 2, name: 'Rani'},
    {id: 3, name: 'Medha'},
    {id: 4, name: 'Maitri'},
    {id: 5, name: 'Kusum'},
    {id: 6, name: 'Maya'},
    {id: 7, name: 'Rani'},
    {id: 8, name: 'Medha'},
    {id: 9, name: 'Maitri'},
    {id: 10, name: 'Kusum'},
  ];
  const renderStudentList = ({item, index}) => {
    return (
      <View style={styles.view}>
        <Text
          style={[
            styles.text,
            {
              color: index % 2 === 0 ? 'red' : 'black',
            },
          ]}>
          {item.id}* {item.name}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={true}
        keyExtractor={item => item.id}
        data={studentList}
        // renderItem={({item}) => {
        //   return (
        //     <Text>
        //       {item.name} {item.id}
        //     </Text>
        //   );
        // }}
        renderItem={renderStudentList}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default ListScreen;
