import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AlterarEnderecoScreen = ({ navigation }) => {
  const [currentAddress, setCurrentAddress] = useState('Germani Roncarely 342');
  const [newAddress, setNewAddress] = useState('');
  const [number, setNumber] = useState('');

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alterar Endereço</Text>
      </View>

      {/* Corpo */}
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          O Endereço deve incluir uma combinação de letras e números.
        </Text>

        {/* Campo Endereço Atual */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Endereço atual</Text>
          <TextInput
            style={styles.input}
            value={currentAddress}
            onChangeText={setCurrentAddress}
            placeholder="Digite seu endereço atual"
            placeholderTextColor="#999"
          />
        </View>

        {/* Campo Novo Endereço */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Novo Endereço</Text>
          <TextInput
            style={styles.input}
            value={newAddress}
            onChangeText={setNewAddress}
            placeholder="Digite o novo endereço"
            placeholderTextColor="#999"
          />
        </View>

        {/* Campo Número */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Número</Text>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={setNumber}
            placeholder="Digite o número"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        {/* Botão Alterar Endereço */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Alterar Endereço</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6DDDD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: '#0C284D',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  instructionText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 15,
    marginTop: 5,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  saveButton: {
    backgroundColor: '#0C284D',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 60,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AlterarEnderecoScreen;