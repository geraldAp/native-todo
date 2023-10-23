import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import categories from "../dataConstants/categories";
import { FontAwesome } from "@expo/vector-icons";

const CategoryList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item) => (
        <View
          key={item.title}
          style={[
            ,
            { backgroundColor: item.backgroundColor },
            styles.categoryContainer,
          ]}
        >
          <FontAwesome name={item.iconName} color={item.iconColor} size={24} />
          <Text style={{color:'#444', fontSize:16 , fontWeight:'700'}}>{item.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 16,
    alignItems: "center",
    height: 80,
    width:110,
    borderRadius: 9,
    marginRight: 16,
    elevation: 7,
    shadowColor: '#000',
    shadowOffset:{width: 0 , height: 10},
    shadowOpacity:0.1,
    shadowRadius:7,
  },
});
