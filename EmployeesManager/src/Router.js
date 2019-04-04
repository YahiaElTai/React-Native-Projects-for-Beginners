import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import HeaderButtons from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const EmployeeStack = createStackNavigator({
  EmployeeList: {
    screen: EmployeeList,
    navigationOptions: ({ navigation }) => ({
      title: 'Employees List',
      headerLeft: null,
      headerRight: (
        <HeaderButtons IconComponent={Icon} iconSize={40} color="#007aff">
          <HeaderButtons.Item
            title="add"
            iconName="md-add-circle"
            onPress={() => navigation.navigate('EmployeeCreate')}
          />
        </HeaderButtons>
      ),
    }),
  },
  EmployeeCreate: {
    screen: EmployeeCreate,
    navigationOptions: { title: 'Create Employee' },
  },
  EmployeeEdit: {
    screen: EmployeeEdit,
    navigationOptions: { title: 'Edit Employee' },
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginForm,
    navigationOptions: { title: 'Login' },
  },
});

const AppNavigator = createSwitchNavigator(
  {
    App: EmployeeStack,
    Auth: AuthStack,
  },
  { initialRouteName: 'Auth' },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
