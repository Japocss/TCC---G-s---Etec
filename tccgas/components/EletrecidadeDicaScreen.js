import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const EletricidadeDicaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Ícone de eletricidade */}
      <View style={styles.iconContainer}>
        <Icon name="bolt" size={200} color="#FFD700" />
      </View>

      {/* Círculo azul com parte para fora */}
      <View style={styles.circle} />

      {/* Título e texto de dica */}
      <Text style={styles.title}>Evite qualquer contato com eletricidade</Text>
      <Text style={styles.text}>
        Não ligue ou desligue interruptores de luz, aparelhos ou qualquer equipamento eletrônico enquanto estiver no local. Faíscas de equipamentos elétricos podem acender o gás e causar uma explosão.
      </Text>

      {/* Bolinhas indicadoras */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, {backgroundColor: '#0C284D'}]} />
        <View style={[styles.dot, {backgroundColor: '#787575', marginLeft: 10}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  iconContainer: {
    position: 'absolute',
    top: height * 0.08, // 5cm abaixo do topo (aproximadamente)
    left: width / 2 - 51, // Centralizado
    zIndex: 2,
  },
  circle: {
    position: 'absolute',
    top: height * 0.05 - 180, // Ajuste para cobrir o ícone
    left: width / 2 - 251,
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#0C284D', // Cor alterada para #0C284D sólido
    opacity: 1, // Removida a transparência (era 0.2)
    transform: [{ scaleX: 1.0 }],
    borderWidth: 0,
    borderColor: 'transparent',
  },
  title: {
    position: 'absolute',
    top: height * 0.40,
    left: 30,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0C284D',
    fontFamily: 'Poppins-Bold',
  },
  text: {
    position: 'absolute',
    top: height * 0.52,
    left: 40,
    right: 20,
    fontSize: 24,
    color: '#0C284D',
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30, // Mesma distância que o título
    flexDirection: 'row',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 18,
  },
});

export default EletricidadeDicaScreen;