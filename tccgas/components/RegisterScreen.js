import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nSensor, setNSensor] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Usuário cadastrado:', username);
    console.log('Senha:', password);
    console.log('N-Sensor:', nSensor);

    // Navega de volta para a tela de login após o cadastro
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={[styles.container, { backgroundColor: '#0C284D' }]}>
      {/* Logo no topo */}
      <Image
        source={require('./assets/logo.png')} // Ajuste o caminho da logo
        style={styles.logo}
      />

      {/* Retângulo vertical com o formulário de cadastro */}
      <View style={styles.rectangle}>
        <Text style={styles.title}>Cadastre-se</Text>

        {/* Campos de cadastro */}
        <Text style={styles.label}>Nome de Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome de usuário"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Text style={styles.label}>N-Sensor</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o N-Sensor"
          placeholderTextColor="#999"
          value={nSensor}
          onChangeText={setNSensor}
        />

        {/* Botão de cadastro */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        {/* Botão para voltar à tela de login */}
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Já tem uma conta? Faça login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  rectangle: {
    width: '90%',
    backgroundColor: '#2B3C6C',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    marginBottom: 5,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: '#1A3A5A',
    borderRadius: 20,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#1A3A5A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: '#4A90E2',
    marginBottom: 10,
  },
});

export default RegisterScreen;