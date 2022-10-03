import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Image } from "react-native";
import penny from "./assets/penny.png";
const Pandemo = (props) => {
  const { img } = props;
  console.log(img);
  const pan = useRef(new Animated.ValueXY()).current;
  const getImg = () => {
    switch (img) {
      case "penny":
        return require("./assets/penny.png");
      case "dime":
        return require("./assets/dime.png");
      case "quarter":
        return require("./assets/quarter.png");
      case "nickel":
        return require("./assets/nickel.png");

      default:
        return require("./assets/penny.png");
    }
  };
  const ppp = require("./assets/penny.png");

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      >
        <View>
          <Image source={getImg()} style={styles.ball} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  ball: {
    width: 60,
    height: 60,
  },
});

export default Pandemo;
