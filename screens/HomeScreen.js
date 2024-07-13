import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
// import * as Icons from "react-native-heroicons/solid";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { useState } from "react";
import { useEffect } from "react";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  console.log("hello world");

  // as soon as the screen mount do something.
  useLayoutEffect(() => {
    navigation.setOptions({
      // don't show header
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurants[]-> {
        ...,
        dishes[]->
      }
    }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView style={globalStyles.AndroidSafeArea}>
      {/* Header*/}
      <View className="bg-white p-1">
        <View className=" flex-row pb-3 items-center mx-4 space-x-2 ">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search*/}
        <View className="flex-row items-center space-x-2 mx-4 ">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>
      {/* Body */}
      {/* for scrolling items */}

      <ScrollView className="bg-gray-100" contentContainerStyle={{}}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
