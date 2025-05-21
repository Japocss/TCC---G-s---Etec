import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')} // Ajuste o caminho da logo
        style={styles.logo}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WelcomeScreen')} // Navega para a WelcomeScreen
      >
        <Text style={styles.buttonText}>Continuar</Text>
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
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
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

export default LogoScreen;