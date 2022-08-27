import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { COLORS, FONTS, NFTData, SIZES } from "../../constants";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../../comps";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar 
      background={COLORS.primary}
      // barStyle="dark-content"
      // backgroundColor="transparent"
      // translucent={true}
      />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 1 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />

          <View
            style={{
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.extraLarge,
              width: "60%",
              padding: SIZES.small,
              marginHorizontal: "20%",
              position: "absolute",
              bottom: 20,
              zIndex: 2,
              minHeight: 65,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="microsoft"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="cart-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="hearto" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="folder-outline"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
