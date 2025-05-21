import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AlterarDataNascimentoScreen = ({ navigation }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [newDate, setNewDate] = useState('');

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alterar Data de Nascimento</Text>
      </View>

      {/* Corpo */}
      <View style={styles.content}>
        {/* Campo Data de Nascimento Atual */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Data de Nascimento atual</Text>
          <TextInput
            style={styles.input}
            value={currentDate}
            onChangeText={setCurrentDate}
            placeholder="Data atual"
            placeholderTextColor="#999"
          />
        </View>

        {/* Campo Nova Data de Nascimento */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nova Data de Nascimento</Text>
          <TextInput
            style={styles.input}
            value={newDate}
            onChangeText={setNewDate}
            placeholder="DD/MM/AAAA"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />
        </View>

        {/* Botão Alterar Data */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Alterar Data</Text>
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

export default AlterarDataNascimentoScreen;