import { StyleSheet, Text, View } from "react-native";
import Pandemo from "./Pandemo";
const imgs = ["penny", "dime", "nickel", "quarter"];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.dropZone}>
        <Text style={styles.text}>Drop Item here</Text>
      </View>
      <View style={styles.row}>
        <Pandemo img={imgs[0]} />
        <Pandemo img={imgs[1]} />
        <Pandemo img={imgs[2]} />
        <Pandemo img={imgs[3]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropZone: {
    height: 150,
    backgroundColor: "#00334d",
  },
  text: {
    marginTop: 35,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: "50%",
  },
});
