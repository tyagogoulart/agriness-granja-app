import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAccessToken = async (accessToken: string) => {
  try {
    await AsyncStorage.setItem('access_token', accessToken);
  } catch (error) {
    console.log(`AsyncStorage error during accessToken store: ${error}`);
  }
};

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem('access_token');
  } catch (error) {
    console.log(`AsyncStorage error during get accessToken: ${error}`);
  }
};

export const storeRefreshToken = async (refreshToken: string) => {
  try {
    await AsyncStorage.setItem('refresh_token', refreshToken);
  } catch (error) {
    console.log(`AsyncStorage error during refreshToken store: ${error}`);
  }
};

export const getRefreshToken = async () => {
  try {
    return await AsyncStorage.getItem('refresh_token');
  } catch (error) {
    console.log(`AsyncStorage error during get refreshToken: ${error}`);
  }
};

export const removeTokens = async () => {
  try {
    await AsyncStorage.removeItem('access_token');
    await AsyncStorage.removeItem('refresh_token');
  } catch (error) {
    console.log(`AsyncStorage error during token remove: ${error}`);
  }
};
