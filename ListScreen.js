import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';

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
      <View
        style={{
          //   backgroundColor: 'yellow',
          width: '33%',
          marginVertical: 5,
          borderColor: 'black',
          borderWidth: 2,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: index % 2 === 0 ? 'red' : 'black',
            //   marginVertical: 30,
            marginHorizontal: 10,
          }}>
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

const styles = StyleSheet.create({});

export default ListScreen;
