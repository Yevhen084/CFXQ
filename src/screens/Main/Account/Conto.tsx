/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { useTheme } from '@hooks';
import { Text, Button } from '@components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';

const Conto = ({ navigation }) => {
  const { Layout, Colors, Gutters } = useTheme();
  const [faceId, setFaceId] = useState(false);
  const [isVisibleLogout, setVisibleLogout] = useState(false);

  const logOutFun = () => {
    setVisibleLogout(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  };

  return (
    <View
      style={[Layout.container, Gutters.smallHPadding, Gutters.smallTPadding]}
    >
      <View style={{ borderTopWidth: 1, borderTopColor: Colors.textGray400 }}>
        {/* <TouchableOpacity
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            Gutters.smallVPadding,
            { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
          ]}
        >
          <Text>SALVA FRASE SEGRETA</Text>
          <Ionicons name="chevron-forward" color="white" size={20} />
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            Gutters.smallVPadding,
            { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
          ]}
        >
          <Text>Face ID</Text>
          <Switch
            value={faceId}
            onChange={() => setFaceId(!faceId)}
            trackColor={{ false: Colors.white, true: Colors.highlight }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            Layout.rowHCenter,
            Layout.justifyContentBetween,
            Gutters.smallVPadding,
            { borderBottomWidth: 1, borderBottomColor: Colors.textGray400 },
          ]}
          onPress={() => setVisibleLogout(true)}
        >
          <Text>Logout Conto</Text>
          <Ionicons name="chevron-forward" color="white" size={20} />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isVisibleLogout}>
        <View
          style={[
            Layout.alignItemsCenter,
            Layout.justifyContentCenter,
            Gutters.regularPadding,
            { backgroundColor: Colors.modalBackgroundColor },
            styles.content,
          ]}
        >
          <Text weight="bold" size="medium">
            Logout Conto
          </Text>
          <Text mt={10} color={'textGray200'}>
            <Text color="white" weight="bold">
              Attenzione:
            </Text>{' '}
            Attenzione, stai uscendo dal tuo account, Assicurati di salvare la
            Frase Segreta o la Chiave Privata,ALTRIMENTI NON POTRAI PIU ACCEDERE
            E PERDERAI GLI ASSET. La Frase Segreta e la Chiave Privata possono
            essere salvati solo RECUPERARLInge
          </Text>

          <View
            style={[
              Layout.rowHCenter,
              Layout.justifyContentAround,
              Layout.fullWidth,
              Gutters.regularTMargin,
            ]}
          >
            <Button
              variant="close"
              title="Esci"
              style={styles.modalButton}
              onPress={() => logOutFun()}
            />
            <Button
              variant="primary"
              title="Cancella"
              style={styles.modalButton}
              onPress={() => setVisibleLogout(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Conto;

const styles = StyleSheet.create({
  content: {
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalButton: {
    width: 120,
    height: 45,
  },
});
