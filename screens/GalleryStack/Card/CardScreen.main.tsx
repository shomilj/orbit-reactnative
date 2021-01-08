import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BackButton } from "../../../components/navigation/BackButton";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { styles, pickerSelectStyles } from "./CardScreen.styles";
import { CardType, ParamType } from "../Gallery/GalleryScreen.types";
import PressableOpacity from "../../../components/PressableOpacity";
import { THEME_DARK, THEME_GRAY, THEME_LIGHT } from "../../../styles/main";
import { ORBIT_ADD_CELL_API } from "../../../Constants";
import firebase from "firebase";

const AddCardButton = (onPress: any, loading: boolean) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.buttonBackground,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.buttonText}>ADD CARD</Text>
      </View>
    </TouchableOpacity>
  );
};

interface SingleSelectParamProps {
  name: string;
  options: string[];
  updateState(arg1: string): void;
  currentState?: string;
}

const TAP_TO_SELECT = "Tap to Select";

const SingleSelectParam = ({
  name,
  options,
  updateState,
  currentState,
}: SingleSelectParamProps) => {
  const placeholder = {
    label: TAP_TO_SELECT,
    value: null,
    color: "black",
  };

  const items = options.map((option) => {
    return {
      label: option,
      value: option,
    };
  });

  return (
    <>
      <Text style={{ ...styles.h5, textAlign: "center" }}>{name}</Text>
      <PressableOpacity>
        <View
          style={{ ...styles.buttonBackground, backgroundColor: THEME_GRAY }}
        >
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => updateState(value)}
            placeholder={placeholder}
            items={items}
          />
        </View>
      </PressableOpacity>
    </>
  );
};

interface CardScreenProps {
  route: any;
  navigation: any;
}

export function CardScreen({ route, navigation }: CardScreenProps) {
  const card: CardType = route.params.card;

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState<undefined | { [key: string]: string }>(
    undefined
  );

  const separatorView = <View style={styles.separator} />;

  let paramView: any = null;
  if (card.params) {
    const paramComponents: any[] = [];
    card.params.forEach((param, index) => {
      switch (param.type) {
        case ParamType.SingleSelect:
          paramComponents.push(
            <SingleSelectParam
              name={param.name}
              key={"key-" + index}
              options={param.options}
              updateState={(newSelection) => {
                setParams({ ...params, [param.key]: newSelection });
              }}
            />
          );
          break;
        default:
          break;
      }
    });
    paramView = (
      <>
        {separatorView}
        <View style={{ marginBottom: 30 }}>{paramComponents}</View>
      </>
    );
  }

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => <BackButton title="Back" navigation={navigation} />,
      headerTitleStyle: styles.navigationTitle,
      headerStyle: {
        backgroundColor: THEME_LIGHT,
      },
    });
  }, []);

  const onPress = () => {
    // Validate parameters.
    setError("");
    console.log("onPress called.");
    if (card.params) {
      for (const param of card.params) {
        if (
          !params ||
          !params[param.key] ||
          params[param.key] == TAP_TO_SELECT
        ) {
          setError("Please select an item for each available card option.");
          return;
        }
      }
    }

    setLoading(true);
    // POST Request.
    fetch(ORBIT_ADD_CELL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardKey: card.key,
        userId: firebase.auth().currentUser?.uid,
        params: params,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          setError("An unknown error occurred.");
          console.log("Erorr in fetch:", data.error);
        } else {
          navigation.navigate("HomeScreen");
        }
      })
      .catch((error) => {
        console.log("Error in catch:", error);
        setError("This operation could not be completed at this time.");
        setLoading(false);
      });
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView style={styles.cardView}>
        <Text style={{ textAlign: "center", margin: 20 }}>
          <Ionicons
            name={card.icon}
            size={50}
            style={{ margin: 5 }}
            color={THEME_DARK}
          />
        </Text>
        <Text style={{ ...styles.h2, marginVertical: 20, textAlign: "center" }}>
          {card.name}
        </Text>
        <Text
          style={{ ...styles.body, textAlign: "center", marginVertical: 20 }}
        >
          {card.description}
        </Text>
        {paramView}
        {separatorView}
        <View>{AddCardButton(onPress, loading)}</View>
        <ActivityIndicator animating={loading} style={{ marginTop: 20 }} />
        <Text style={{ ...styles.h5, textAlign: "center", color: "red" }}>
          {error}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
