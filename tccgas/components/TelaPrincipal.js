import React, { useState, useRef, useEffect } from 'react'; 
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Importação do Bluetooth
import { BleManager } from 'react-native-ble-plx';

const { width } = Dimensions.get('window');

const TelaPrincipal = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [emergencyModalVisible, setEmergencyModalVisible] = useState(false);
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Novos estados e animações para o Circulum
  const spinValue = useRef(new Animated.Value(0)).current;
  const pulseValue = useRef(new Animated.Value(0)).current;
  const [percentage] = useState(10); // Você pode mudar para estado se precisar controlar dinamicamente

  // Bluetooth
  const manager = useRef(new BleManager()).current;
  const [isConnected, setIsConnected] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    // Animação de rotação
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Animação de pulsação
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Cleanup para o Bluetooth
    return () => {
      manager.stopDeviceScan();
    };
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const pulse = pulseValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.98, 1.02],
  });

  const getColor = () => {
    if (percentage < 30) return ['#1E90FF', '#00BFFF', '#87CEFA']; // Azuis
    if (percentage <= 70) return ['#FF8C00', '#FFA500', '#FFD700']; // Laranjas
    return ['#FF0000', '#FF4500', '#FF6347']; // Vermelhos
  };
  const colors = getColor();

  const openEmergencyModal = () => {
    setEmergencyModalVisible(true);
  };

  const closeEmergencyModal = () => {
    setEmergencyModalVisible(false);
  };

  // Função para escanear dispositivos Bluetooth
  const scanForDevices = () => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
        return;
      }

      if (device.name) {
        console.log(`Device found: ${device.name}`);
      }
    });
  };

  // Função para conectar a um dispositivo Bluetooth
  const connectToDevice = (device) => {
    manager.stopDeviceScan();
    device
      .connect()
      .then((device) => {
        setIsConnected(true);
        setDeviceInfo(device);
        console.log(`Connected to device: ${device.name}`);
      })
      .catch((error) => {
        console.log(error);
        setIsConnected(false);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0C284D" barStyle="light-content" />

      {/* Topo da tela (totalmente mantido) */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.topLeftIcon}
          onPress={() => setMenuVisible(true)}>
          <Icon name="cog" size={30} color="white" />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>SMART G</Text>
          <Text style={styles.subtitle}>#23443</Text>
        </View>

        <TouchableOpacity
          style={styles.topRightIcon}
          onPress={() => navigation.navigate('ContasScreen')}>
          <Image source={require('./assets/logo1.jpeg')} style={styles.logo1} />
        </TouchableOpacity>
      </View>

      {/* Parte branca da tela (mantida, só alterei a parte da imagem) */}
      <View style={styles.whiteSection}>
        <View style={styles.powerOffContainer}>
          <TouchableOpacity
            style={styles.powerOffIcon}
            onPress={openEmergencyModal}>
            <Icon name="exclamation-triangle" size={30} color="#0C284D" />
          </TouchableOpacity>
          <Text style={styles.powerOffText}>Emergência</Text>
        </View>

        <View style={styles.emergencyContainer}>
          <TouchableOpacity style={styles.emergencyIcon}>
            <Icon name="power-off" size={30} color="#0C284D" />
          </TouchableOpacity>
          <Text style={styles.emergencyText}>Desligar</Text>
        </View>

        {/* Área da imagem Circulum modificada */}
        <View style={styles.imageContainer}>
          <Image
            source={require('./assets/Circulum.png')}
            style={[styles.circleImage, { tintColor: 'white' }]}
          />

          <Animated.Image
            source={require('./assets/CirculumBordas.png')}
            style={[
              styles.circleImage,
              {
                position: 'absolute',
                transform: [{ rotate: spin }, { scale: pulse }],
                tintColor: colors[0],
                opacity: 0.9,
              },
            ]}
          />

          <Animated.Image
            source={require('./assets/CirculumBordas.png')}
            style={[
              styles.circleImage,
              {
                position: 'absolute',
                transform: [{ rotate: spin }, { scale: 1.05 }],
                tintColor: colors[1],
                opacity: 0.6,
              },
            ]}
          />

          <Animated.Image
            source={require('./assets/CirculumBordas.png')}
            style={[
              styles.circleImage,
              {
                position: 'absolute',
                transform: [{ rotate: spin }, { scale: pulse }],
                tintColor: colors[2],
                opacity: 0.3,
              },
            ]}
          />

          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>

        {/* Dicas de segurança (totalmente mantido) */}
        <View style={styles.safetyTipsContainer}>
          <Text style={styles.safetyTipsText}>Dicas de Segurança:</Text>

          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={(event) => {
              const index = Math.round(
                event.nativeEvent.contentOffset.x / (width - 40)
              );
              setActiveIndex(index);
            }}
            scrollEventThrottle={16}
            contentContainerStyle={styles.squaresContainer}>
            <TouchableOpacity
              style={styles.square}
              onPress={() => navigation.navigate('EletricidadeDicaScreen')}>
              <View style={styles.circle}>
                <Icon name="bolt" size={30} color="#FFD700" />
              </View>
              <Text style={styles.squareText}>Eletricidade</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.square}
              onPress={() => navigation.navigate('ObstrucaoDicaScreen')}>
              <View style={styles.circle}>
                <Icon name="fire" size={30} color="#FF4500" />
              </View>
              <Text style={styles.squareText}>Evite Obstruções</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.square}
              onPress={() => navigation.navigate('VerificacaoDicaScreen')}>
              <View style={styles.circle}>
                <Icon name="clock-o" size={30} color="yellow" />
              </View>
              <Text style={styles.squareText}>Verificação Regular</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.indicatorsContainer}>
            {[0, 1, 2].map((index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  activeIndex === index && styles.activeIndicator,
                ]}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Ícones inferiores (totalmente mantido) */}
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

      {/* Modal do Menu (totalmente mantido) */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setMenuVisible(false)}>
          <View style={styles.menuContainer}>
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>Menu</Text>
            </View>

            <View style={styles.menuItems}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  navigation.navigate('ManualUsoScreen');
                }}>
                <Text style={styles.menuItemText}>Manual de uso</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Ajuda e Suporte</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  navigation.navigate('HistoricoDetecaoScreen');
                }}>
                <Text style={styles.menuItemText}>Histórico de Detecções</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  navigation.navigate('ConfiguracoesScreen');
                }}>
                <Text style={styles.menuItemText}>Configurações</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Sobre nós</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Modal de Emergência (totalmente mantido) */}
      <Modal
        visible={emergencyModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeEmergencyModal}>
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={closeEmergencyModal}>
          <View style={styles.emergencyModalContainer}>
            <View style={styles.emergencyModalHeader}>
              <Icon name="exclamation-triangle" size={30} color="white" />
              <Text style={styles.emergencyModalTitle}>Emergência</Text>
            </View>

            <View style={styles.emergencyModalItems}>
              <TouchableOpacity style={styles.emergencyItem}>
                <Icon name="fire-extinguisher" size={24} color="#FF4500" />
                <Text style={styles.emergencyItemText}>
                  Corpo de Bombeiros: 193
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.emergencyItem}>
                <Icon name="hospital-o" size={24} color="#0C284D" />
                <Text style={styles.emergencyItemText}>
                  Hospital: 3641.6088 ou 99864.3076
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.emergencyItem}>
                <Icon name="ambulance" size={24} color="#FF0000" />
                <Text style={styles.emergencyItemText}>Ambulância: 192</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
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
    height: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topLeftIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'PontanoSans-Regular',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'PontanoSans-Regular',
  },
  topRightIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  whiteSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  powerOffContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    alignItems: 'center',
  },
  powerOffIcon: {
    marginBottom: 5,
  },
  powerOffText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C284D',
  },
  emergencyContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    alignItems: 'center',
  },
  emergencyIcon: {
    marginBottom: 5,
  },
  emergencyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C284D',
  },
  imageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'contain',
  },
  percentageText: {
    position: 'absolute',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  safetyTipsContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  safetyTipsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0C284D',
  },
  squaresContainer: {
    flexDirection: 'row',
  },
  square: {
    margin: 10,
    backgroundColor: 'white',
    padding: 20,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
  },
  circle: {
    backgroundColor: '#0C284D',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  squareText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0C284D',
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#D3D3D3',
  },
  activeIndicator: {
    backgroundColor: '#0C284D',
  },
  bottomIcons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#D3D3D3',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  blueBar: {
    backgroundColor: '#0C284D',
    height: 3,
    width: 50,
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -25 }],
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  menuContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0C284D',
  },
  menuItems: {
    marginTop: 10,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  menuItemText: {
    fontSize: 18,
    color: '#0C284D',
  },
  emergencyModalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  emergencyModalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emergencyModalTitle: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0C284D',
  },
  emergencyModalItems: {
    marginTop: 20,
    width: '100%',
  },
  emergencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  emergencyItemText: {
    fontSize: 18,
    color: '#0C284D',
    marginLeft: 10,
  },
});

export default TelaPrincipal;
