import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DadosPessoaisScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#0C284D" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>DADOS PESSOAIS</Text>
      </View>

      {/* Quadrado branco com dados */}
      <View style={styles.whiteBox}>
        {/* Email */}
        <TouchableOpacity 
          style={styles.dataItem}
          onPress={() => navigation.navigate('AlterarEmailScreen')}
        >
          <View>
            <Text style={styles.dataTitle}>Email</Text>
            <Text style={styles.dataValue}>Cjramos@gmail.com</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        {/* Data de Nascimento */}
        <TouchableOpacity 
          style={styles.dataItem}
          onPress={() => navigation.navigate('AlterarDataNascimentoScreen')}
        >
          <View>
            <Text style={styles.dataTitle}>Data de Nascimento</Text>
            <Text style={styles.dataValue}>25 de Dezembro de 2002</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        {/* Senha */}
        <TouchableOpacity 
          style={styles.dataItem}
          onPress={() => navigation.navigate('AlterarSenhaScreen')}
        >
          <View>
            <Text style={styles.dataTitle}>Alterar senha</Text>
            <Text style={styles.dataValue}>********1</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        {/* Endereço */}
        <TouchableOpacity 
          style={styles.dataItem}
          onPress={() => navigation.navigate('AlterarEnderecoScreen')}
        >
          <View>
            <Text style={styles.dataTitle}>Endereço</Text>
            <Text style={styles.dataValue}>germani roncarely 342</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#666" />
        </TouchableOpacity>

        {/* CPF */}
        <TouchableOpacity style={styles.dataItem}>
          <View>
            <Text style={styles.dataTitle}>CPF</Text>
            <Text style={styles.dataValue}>******454-**</Text>
          </View>
          <Icon name="chevron-right" size={16} color="#666" />
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
    textTransform: 'uppercase',
  },
  whiteBox: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dataTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  dataValue: {
    fontSize: 14,
    color: '#666',
  },
});

export default DadosPessoaisScreen;