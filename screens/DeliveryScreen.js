import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import globalStyles from "../styles/globalStyles";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const { restaurant } = useSelector((state) => state.restaurant);
  const navigation = useNavigation();

  return (
    <View className="bg-[#00CCBB] flex-1 pt-5">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimate Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={60} indeterminate={true} color="#00CCBB" />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-20">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-5 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Miracle Michael</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>

        <Text className="text-[#00CCbb] text-lg mr-5 font-bold">call </Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
