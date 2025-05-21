import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const HistoricoDetecaoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Barra superior azul */}
      <View style={styles.topBar}></View>
      
      {/* Botão de voltar */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={30} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Histórico de Detecção</Text>

      {/* Mensagem de detecção */}
      <View style={styles.messageContainer}>
        <Image 
          source={require('./assets/logo.png')} 
          style={styles.logoImage}
        />
        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.appName}>Smart-g</Text>
            <Text style={styles.date}>12-06-2025</Text>
          </View>
          <Text style={styles.messageText}>Detectamos uma pequena irregularidade no seu sensor...</Text>
        </View>
      </View>

      {/* Gráfico - agora centralizado */}
      <View style={styles.graficoContainer}>
        <Image 
          source={require('./assets/grafico.png')} 
          style={styles.graficoImage}
          resizeMode="contain"
        />
      </View>

      {/* Ícones inferiores */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('NotificacoesScreen')}>
          <Icon name="bell" size={30} color="#0C284D" />
        </TouchableOpacity>

        <View style={styles.centerIconContainer}>
          <TouchableOpacity>
            <Icon name="home" size={40} color="#0C284D" />
          </TouchableOpacity>
          <View style={styles.blueBar} />
        </View>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Icon name="undo" size={30} color="#0C284D" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    backgroundColor: '#0C284D',
    height: 50,
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
  },
  title: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0C284D',
    fontFamily: 'Poppins-Bold',
  },
  messageContainer: {
    position: 'absolute',
    top: 130,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0C284D',
    fontFamily: 'Poppins-Bold',
  },
  date: {
    fontSize: 12,
    color: '#787575',
  },
  messageText: {
    fontSize: 16,
    color: '#0C284D',
    fontFamily: 'Poppins-Regular',
  },
  graficoContainer: {
    position: 'absolute',
    top: 220,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  graficoImage: {
    height: 330,
  },
  bottomIcons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'white',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBar: {
    width: 30,
    height: 3,
    backgroundColor: '#0C284D',
    marginTop: 5,
  },
});

export default HistoricoDetecaoScreen;