import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NotificacoesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0C284D" barStyle="light-content" />
      
      {/* Cabeçalho com botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificações</Text>
        <View style={{ width: 24 }} /> {/* Espaço para alinhamento */}
      </View>

      {/* Lista de notificações */}
      <ScrollView style={styles.notificationsContainer}>
        <NotificationItem 
          title="Bem vindo a um mundo mais seguro e inteligente" 
          time="10:30 AM" 
        />
        <NotificationItem 
          title="Configure o seu sensor corretamente para melhor desempenho" 
          time="Ontem" 
        />
        <NotificationItem 
          title="Detectamos que seu sensor está com baixa conexão" 
          time="12/05/2023" 
        />
        <NotificationItem 
          title="Detectaremos um pequeno vazamento na cozinha" 
          time="10/05/2023" 
        />
        <NotificationItem 
          title="Seu sensor está sem problemas porém verifique as configurações" 
          time="05/05/2023" 
        />
        <NotificationItem 
          title="Detectaremos um pequeno vazamento no banheiro" 
          time="01/05/2023" 
        />
      </ScrollView>

      {/* Barra inferior com ícones */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity style={styles.iconContainerActive}>
          <Icon name="bell" size={30} color="#0C284D" />
          <View style={styles.blueBar} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconContainer}
          onPress={() => navigation.navigate('TelaPrincipal')}>
          <Icon name="home" size={40} color="#0C284D" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconContainer}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Icon name="undo" size={30} color="#0C284D" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotificationItem = ({ title, time }) => (
  <View style={styles.notificationItem}>
    <View style={styles.notificationIcon}>
      <Image 
        source={require('./assets/logo.png')} 
        style={styles.logoIcon}
      />
    </View>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>smart o</Text>
      <Text style={styles.notificationText}>{title}</Text>
      <Text style={styles.notificationTime}>{time}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#0C284D',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationsContainer: {
    flex: 1,
    padding: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  notificationIcon: {
    paddingRight: 15,
    justifyContent: 'center',
  },
  logoIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    color: '#0C284D',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationText: {
    color: '#333',
    marginBottom: 5,
  },
  notificationTime: {
    color: '#999',
    fontSize: 12,
  },
  bottomIcons: {
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
  iconContainerActive: {
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

export default NotificacoesScreen;