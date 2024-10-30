import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tarjeta() {
  return (
    <View style={styles.containerCard}>
      <View style={styles.header}>
        <Text style={styles.title}>Credit Card</Text>
        <Text style={styles.cardBrand}>VISA</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.cardNumber}>**** **** **** 1234</Text>
        <Text style={styles.cardHolder}>JOHN DOE</Text>
        <View style={styles.footer}>
          <Text style={styles.expiryDate}>Valid Thru: 12/24</Text>
          <Text style={styles.cvv}>CVV: 123</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#060606',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Para Android
    margin: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardBrand: {
    color: 'white',
    fontSize: 18,
  },
  body: {
    marginTop: 20,
  },
  cardNumber: {
    color: 'white',
    fontSize: 24,
    letterSpacing: 2,
    marginBottom: 10,
  },
  cardHolder: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryDate: {
    color: 'white',
    fontSize: 14,
  },
  cvv: {
    color: 'white',
    fontSize: 14,
  },
});
