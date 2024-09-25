import React from "react";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "./CartReducer";
import { stylesCarrinho } from "./styles/stylesCarrinho";

const CarrinhoScreen = () => {
  const cart = useSelector((state) => state.cart.cart); // Obtém o estado do carrinho
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };

  const calcularTotal = () => {
    return cart
      .reduce((total, item) => {
        // Converter valor para número, assumindo que o valor está em formato de string
        const valorNumerico = parseFloat(item.valor.replace(",", "."));
        return total + valorNumerico * item.quantity; // Multiplica pelo quantity
      }, 0)
      .toFixed(2); // Retorna o total formatado para 2 casas decimais
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={stylesCarrinho.titulo}>Carrinho</Text>

      {/* Verifica se o carrinho está vazio */}
      {cart.length === 0 ? (
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
          O carrinho está vazio
        </Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 10,
              }}
            >
              <Text>{item.name}</Text>
              <Text style={{ marginTop: 5 }}>Preço: R$ {item.valor}</Text>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                  marginTop: 6,
                }}
                source={{ uri: item.image }}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  alignItems: "center",
                  backgroundColor: "#FF3366",
                  borderRadius: 5,
                  width: 120,
                }}
              >
                {/* Botão para diminuir a quantidade */}
                <Pressable onPress={() => decreaseQuantity(item)}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "white",
                      paddingHorizontal: 10,
                    }}
                  >
                    -
                  </Text>
                </Pressable>

                {/* Exibe a quantidade */}
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  {item.quantity}
                </Text>

                {/* Botão para aumentar a quantidade */}
                <Pressable onPress={() => increaseQuantity(item)}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      paddingHorizontal: 10,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
          // Componente para exibir o total no final da lista
          ListFooterComponent={
            <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20 }}>
              Total: R$ {calcularTotal()}
            </Text>
          }
        />
      )}
    </View>
  );
};

export default CarrinhoScreen;
