import React, { useState, useContext } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {AntDesign}  from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners';
import HomeHeader from '../components/HomeHeader';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../theme/ThemeContext';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const theme = useContext(ThemeContext);
  const [darkmode, setDarkmode] = useState(false);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { borderColor: theme.colors.background }]}>
        <HomeHeader />
      </View>
      <View style={styles.menuItems}>

        <View style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View
              style={[
                styles.iconWrapper,
                styles.darkModeIcon,
                { backgroundColor: theme.colors.minorcolor },
              ]}>
              <Text
                style={[
                  styles.darkModeIconText,
                  { color: theme.colors.color },
                ]}>
                🌙
              </Text>
            </View>
            <Text style={[styles.menuItemText, { color: theme.colors.color }]}>
              Dark Mode
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Switch
              trackColor={{ false: '#B0BEC5', true: '#3e3e3e' }}
              thumbColor={darkmode ? '#4B77B6' : '#E0E0E0'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={(value) => {
                setDarkmode(value);
                EventRegister.emit('changetheme', value);
              }}
              value={darkmode}
            />
          </View>
        </View>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View
              style={[
                styles.iconWrapper,
                styles.subscriptionIcon,
                { backgroundColor: theme.colors.minorcolor },
              ]}>
              <Text style={styles.subscriptionIconText}>🎁</Text>
            </View>
            <Text style={[styles.menuItemText, { color: theme.colors.color }]}>
              Subscription
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View
              style={[
                styles.iconWrapper,
                styles.dashboardIcon,
                { backgroundColor: theme.colors.minorcolor },
              ]}>
              <Text style={styles.dashboardIconText}>📊</Text>
            </View>
            <Text style={[styles.menuItemText, { color: theme.colors.color }]}>
              Dashboard
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View
              style={[
                styles.iconWrapper,
                styles.userRoleIcon,
                { backgroundColor: theme.colors.minorcolor },
              ]}>
              <Text style={styles.userRoleIconText}>👥</Text>
            </View>
            <Text style={[styles.menuItemText, { color: theme.colors.color }]}>
              User Role
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View
              style={[
                styles.iconWrapper,
                styles.currencyIcon,
                { backgroundColor: theme.colors.minorcolor },
              ]}>
              <Text
                style={[
                  styles.currencyIconText,
                  { color: theme.colors.color },
                ]}>
                $
              </Text>
            </View>
            <Text style={[styles.menuItemText, { color: theme.colors.color }]}>
              Currency
            </Text>
          </View>
          <Text style={[styles.menuItemSubText, { color: theme.colors.color }]}>
            KES
          </Text>
        </TouchableOpacity>     
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View
              style={[
                styles.iconWrapper,
                styles.barcodeIcon,
                { backgroundColor: theme.colors.minorcolor },
              ]}>
              <Text style={styles.barcodeIconText}>🏷️</Text>
            </View>
            <Text style={[styles.menuItemText, { color: theme.colors.color }]}>
              Barcode Generator
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.menuItem, styles.borderBottom]}>
          <View style={styles.menuItemContent}>
            <View
              style={[
                styles.iconWrapper,
                styles.languageIcon,
                { backgroundColor: theme.colors.minorcolor },
              ]}>
              <Text style={styles.languageIconText}>🌐</Text>
            </View>
            <Text style={[styles.menuItemText, { color: theme.colors.color }]}>
              Select Your Language
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <View
              style={[
                styles.iconWrapper,
                styles.logoutIcon,
                { backgroundColor: theme.colors.minorcolor },
              ]}>
              <AntDesign name="logout" color={theme.colors.color} size={16} />
            </View>
            <Text style={[styles.menuItemText, { color: theme.colors.color }]}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>

        
      </View>
      <Text style={[styles.footerText, { color: theme.colors.color }]}>
        DukaPos V-1.0
      </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
  },
  menuItems: {
    marginTop: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
  },
  menuItemSubText: {
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 16,
  },
});
