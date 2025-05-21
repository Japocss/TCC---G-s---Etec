import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AlterarEmailScreen = ({ navigation }) => {
  const [currentEmail, setCurrentEmail] = useState('');
  const [newEmail, setNewEmail] = useState('');

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alterar Email</Text>
      </View>

      {/* Corpo */}
      <View style={styles.content}>
        <Text style={styles.instructionText}>
          O Email deve incluir uma combinação de letras e números.
        </Text>

        {/* Campo Email Atual */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email atual</Text>
          <TextInput
            style={styles.input}
            value={currentEmail}
            onChangeText={setCurrentEmail}
            placeholder="Digite seu email atual"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>


        {/* Campo Novo Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Novo email</Text>
          <TextInput
            style={styles.input}
            value={newEmail}
            onChangeText={setNewEmail}
            placeholder="Digite o novo email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Botão Alterar Email */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Alterar email</Text>
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

export default AlterarEmailScreen;