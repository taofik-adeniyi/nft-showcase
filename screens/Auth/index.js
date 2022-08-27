import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  SafeAreaView,
} from "react-native";
// import Animated, { interpolate } from "react-native-reanimated";
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Svg, Image, Ellipse, ClipPath } from "react-native-svg";
import { FocusedStatusBar } from "../../comps";
import { COLORS } from "../../constants";
import styles from "./styles";

const Auth = ({ route, navigation }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const { width, height } = Dimensions.get("window");
    const imagePosition = useSharedValue(1);
    const formButtonScale = useSharedValue(1);
    const imageAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(
        imagePosition.value,
        [0, 1],
        [-height / 2, 0]
      );
      return {
        transform: [
          { translateY: withTiming(interpolation, { duration: 1000 }) },
        ],
      };
    });

    const buttonAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
      return {
        opacity: withTiming(imagePosition.value, { duration: 500 }),
        transform: [
          { translateY: withTiming(interpolation, { duration: 1000 }) },
        ],
      };
    });

    const closeButtonConatainerStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
      return {
        opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {
          duration: 800,
        }),
        transform: [
          { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
        ],
      };
    });

    const formInputAnimatedStyle = useAnimatedStyle(() => {
      return {
        opacity:
          imagePosition.value === 0
            ? withDelay(400, withTiming(1, { duration: 800 }))
            : withTiming(0, { duration: 300 }),
      };
    });

    const formButtonAnimatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: formButtonScale.value }],
      };
    });

    const loginHandler = () => {
      imagePosition.value = 0;
      if (isRegistering) {
        // setIsRegistering(false)
        runOnJS(setIsRegistering)(false);
        /*
          if you are using gesturehandler
          the setter might not work on some machines
          so you sue runOnJS to run the setter on js machine
          runOnJS(setIsRegistering)(false)
           */
      }
    };

    const registerHandler = () => {
      imagePosition.value = 0;
      if (!isRegistering) {
        // setIsRegistering(true)
        runOnJS(setIsRegistering)(true);
        /*
          if you are using gesturehandler
          the setter might not work on some machines
          so you sue runOnJS to run the setter on js machine
          runOnJS(setIsRegistering)(true)
           */
      }
    };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        // background={COLORS.sky}
        // barStyle="dark-content"

        backgroundColor="transparent"
        translucent={true}
      />
      <Animated.View style={styles.container}>
        <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
          <Svg height={height + 100} width={width}>
            <ClipPath id="clipPathId">
              <Ellipse cx={width / 2} rx={height} ry={height + 100} />
            </ClipPath>
            <Image
              href={require("../../assets/login-background.jpg")}
              width={width + 100}
              height={height + 100}
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clipPathId)"
            />
          </Svg>
          <Animated.View style={[styles.closeButtonContainer, closeButtonConatainerStyle]}>
            <Pressable onPress={() => (imagePosition.value = 1)}>
              <Text style={{ fontWeight: "bold" }}>X</Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
        <View style={styles.buttonContainer}>
          <Animated.View style={[buttonAnimatedStyle]}>
            <Pressable style={styles.button} onPress={loginHandler}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </Pressable>
          </Animated.View>
          <Animated.View style={[buttonAnimatedStyle]}>
            <Pressable style={styles.button} onPress={registerHandler}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </Pressable>
          </Animated.View>
          <Animated.View
            style={[styles.formInputContainer, formInputAnimatedStyle]}
          >
            {isRegistering && (
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#000"
                style={styles.textInput}
              />
            )}

            <TextInput
              placeholder="Email"
              placeholderTextColor="#000"
              style={styles.textInput}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#000"
              style={styles.textInput}
            />
            <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
              <Pressable
                           onPress={() =>
                  {formButtonScale.value = withSequence(
                    withSpring(1.1),
                    withSpring(1)
                  )
                  navigation.navigate('Home')
                }
                }
              >
                <Text style={styles.buttonText}>
                  {isRegistering ? "REGISTER" : "LOG IN"}
                </Text>
              </Pressable>
            </Animated.View>
          </Animated.View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Auth;
