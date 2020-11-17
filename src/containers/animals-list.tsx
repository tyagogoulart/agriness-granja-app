import React, { useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AnimalCard from '../components/animal-card';
import Loading from '../components/loading';
import { RootState } from '../store/reducers';
import {
  filterGranjaAnimalsRequest,
  listGranjaAnimalsRequest,
  paginateGranjaAnimalsRequest,
  shouldFetchMoreAnimals,
} from '../store/reducers/granja/actions';
import { Animal } from '../store/reducers/granja/protocols/animal';
import { metrics } from '../styles';

type Props = {
  granjaId: number;
};

type RenderItemProps = {
  item: Animal;
};

const AnimalsList: React.FC<Props> = ({ granjaId }) => {
  const { animals, filters, isLoading, pagination } = useSelector(
    (state: RootState) => state.granja
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(filterGranjaAnimalsRequest('name', ''));
      dispatch(filterGranjaAnimalsRequest('location', ''));
    };
  }, []);

  useEffect(() => {
    dispatch(listGranjaAnimalsRequest(granjaId, filters, pagination.page));
  }, [filters]);

  useEffect(() => {
    const { shouldFetchMore, maxPage, page } = pagination;
    if (!shouldFetchMore || isLoading || maxPage < page) {
      return;
    }
    dispatch(paginateGranjaAnimalsRequest(granjaId, filters, page));
  }, [pagination.shouldFetchMore]);

  const fetchMore = useCallback(() => dispatch(shouldFetchMoreAnimals(true)), []);

  const renderItem = ({ item }: RenderItemProps) => <AnimalCard animal={item} />;

  const renderFooter = () => (isLoading ? <Loading /> : null);

  const renderEmptyList = () =>
    isLoading ? null : <Text style={styles.empty}>Não foram encontrados resultados.</Text>;

  return (
    <>
      <FlatList
        style={styles.list}
        data={animals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmptyList}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
    paddingTop: 4,
    marginBottom: metrics.baseMargin,
  },
  loading: {
    alignItems: 'center',
    flex: 1,
  },
  empty: {
    textAlign: 'center',
  },
});

export default AnimalsList;
