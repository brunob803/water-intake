import * as React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export default function HomeScreen() {
  const [waterTaken, setWaterTaken] = React.useState(0);
  const [goal, setGoal] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meta Diária:</Text>
      <TextInput
        inputMode="numeric"
        placeholder="Digite sua meta diária"
        onChangeText={(newGoal) => setGoal(newGoal)}
        defaultValue={goal}
      />
      <Text>Já bebi {waterTaken} mL hoje!</Text>
      <Button
        onPress={() => {
          setWaterTaken(waterTaken + 250);
        }}
        disabled={waterTaken >= parseInt(goal)}
        title={
          waterTaken < parseInt(goal)
            ? "Beber mais água"
            : "Meta Diária atingida!"
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1e23",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    
  }
});
