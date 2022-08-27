{/* <Animated.View style={styles.container}>
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
          <Animated.View
            style={[styles.closeButtonContainer, closeButtonConatainerStyle]}
          >
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
                  (formButtonScale.value = withSequence(
                    withSpring(1.1),
                    withSpring(1)
                  ))
                }
              >
                <Text style={styles.buttonText}>
                  {isRegistering ? "REGISTER" : "LOG IN"}
                </Text>
              </Pressable>
            </Animated.View>
          </Animated.View>
        </View>
      </Animated.View> */}