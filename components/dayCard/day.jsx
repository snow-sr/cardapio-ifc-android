import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

// Object {
//   "acompanhamento": "ESPAGUETE AO ALHO E ÓLEO ARROZ ARROZ INTEGRAL FEIJÃO",
//   "dia": "SEGUNDA",
//   "pratoPrincipal": "CARNE MOÍDA COM LEGUMES",
//   "salada": "ALMEIRÃO ABOBRINHA LENTILHA",
//   "sobremesa": "LARANJA",
//   "vegetariano": "SOJA REFOGADA",
// },

const Card = (props) => {
  return (
    <View className="w-96 min-h-12 p-2 bg-gray-800 gap-3 rounded-xl">
      <Text className="text-white text-center text-2xl">{props.day.dia}</Text>
      <Text className="text-white">
        Prato Principal: {props.day.pratoPrincipal}
      </Text>
      <Text className="text-white">
        Acompanhamento: {props.day.acompanhamento}
      </Text>
      <Text className="text-white">Salada: {props.day.salada}</Text>
      <Text className="text-white">Vegetariano: {props.day.vegetariano}</Text>
      <Text className="text-white">Sobremesa: {props.day.sobremesa}</Text>
    </View>
  );
};
export const Menu = (props) => {
  console.log("MENU", props.days);
  const loading = props.loading;
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View className="items-center w-full h-full ">
          <ScrollView className="flex-1 w-full h-full gap-y-10">
            {props.days.map((day) => {
              return (
                <View className="p-2" key={day.dia}>
                  <Card day={day} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
