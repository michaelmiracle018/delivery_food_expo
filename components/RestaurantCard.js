import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import * as Icons from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  short_description,
  genre,
  address,
  dishes,
  lat,
  long,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          title,
          rating,
          short_description,
          genre,
          address,
          dishes,
          lat,
          long,
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-64 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold pt-2 text-lg ">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
