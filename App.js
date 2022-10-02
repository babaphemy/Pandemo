import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DraggableView from "./DraggableView";
import Pandemo from "./Pandemo";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.dropZone}>
        <Text style={styles.text}>Drop Item here</Text>
      </View>
      <View style={styles.row}>
        <Pandemo />
        <Pandemo />
        <Pandemo />
        <Pandemo />
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
