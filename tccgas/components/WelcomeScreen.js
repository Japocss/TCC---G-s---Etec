import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Ajuste o caminho da logo
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>
        Seja bem-vinda(o) a uma vida mais tranquila e segura com a Smart-G
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')} // Navega para a LoginScreen
      >
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C284D',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  welcomeText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1A3A5A',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WelcomeScreen;