import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/reducers';
import { LogOutRequest } from '../store/reducers/auth/actions';

const LogOutButton: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(LogOutRequest());
  };

  return (
    <>
      {isAuthenticated && (
        <TouchableOpacity onPress={onPress}>
          <FontAwesomeIcon icon="power-off" style={styles.icon} />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 16,
    color: '#ffffff',
  },
});

export default LogOutButton;
