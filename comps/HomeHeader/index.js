import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
        paddingTop: 25
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          color: COLORS.white,
        }}
      >
        {/* <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }}
        /> */}
        <View>
          <Text
            style={{ color: COLORS.white, fontWeight: "bold", fontSize: 20 }}
          >
            SHOWCASE - <Text style={{ fontSize: 14 }}>Store</Text>
          </Text>
        </View>

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />

          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 15,
              position: "absolute",
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: FONTS.small,
            color: COLORS.white,
          }}
        >
          Hello, Katigbanoma 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFT's"
            placeholderTextColor="black"
            style={{ flex: 1, fontWeight: "bold" }}
            onChange={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
