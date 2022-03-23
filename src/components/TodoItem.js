import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';
import tw from 'twrnc';

const TodoItem = ({item, onPress}) => {
  return (
    <View style={tw`px-4 py-3 border border-white rounded-lg my-2 flex flex-row items-center justify-between`}>
      <Text style={tw`text-xl text-white`}>{item.text}</Text>
      <TouchableOpacity onPress={() => onPress(item.id)} style={tw`px-3 py-2 border border-white rounded`}>
        {/* <FontAwesome5 name="trash-alt" size={16} color="white" /> */}
        <Text style={tw`text-white`}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
