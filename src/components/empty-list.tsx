import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = { list: any[]; text?: string };

const EmptyList: React.FC<Props> = ({ list, text }) => {
  return (
    <>
      {list && list.length === 0 && (
        <Text style={styles.empty}>{text || 'Não foram encontrados resultados.'}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
  },
});

export default EmptyList;
