import { useEffect, useState, useRef } from 'react';
import { FlatList, Text, Button, ActivityIndicator } from 'react-native';

import { get } from '../services/api';

import { v4 as uuidv4 } from 'uuid';

import ResourceCard from './ResourceCard';

import { typography } from '../styles/typography';
import { colors } from '../styles/colors';

function ResourceList({ params, showInfo = true }) {
  const [resources, setResources] = useState([]);
  const [meta, setMeta] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    get('resources', { ...params, page })
      .then((response) => response.json())
      .then((json) => {
        setResources(json.data);
        setMeta(json.meta);
        setLoading(false);
        setInitialLoading(false);
        setRefreshing(false); // set refreshing to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setInitialLoading(false);
        setRefreshing(false); // set refreshing to false after error occurs
      });
  }, [page, refreshing]);

  const renderItem = ({ item }) => (
    <ResourceCard resource={item} key={uuidv4()} />
  );

  const loadMore = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
  };

  const onRefresh = () => {
    if (refreshing) return; // if already refreshing, do nothing
    setRefreshing(true);
    setPage(1); // reset page
  };

  return (
    <FlatList
      ref={flatListRef}
      data={resources}
      renderItem={renderItem}
      keyExtractor={() => uuidv4()}
      ListHeaderComponent={() => (
        showInfo && resources.length > 0 ? (
          <Text style={typography.title_main}>{`Affichage de ${meta.end} ressources sur ${meta.total} ressources`}</Text>
        ) : null
      )}
      ListFooterComponent={() => (
        meta.next && !refreshing && showInfo ? (
          <Button
            title={loading ? 'Chargement...' : 'Voir plus'}
            onPress={loadMore}
            disabled={loading}
            color={colors.primary}
          />
        ) : null
      )}
      ListEmptyComponent={() => (
        initialLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <Text style={typography.title_main}>Aucune ressource trouvée</Text>
        )
      )}
      onRefresh={onRefresh}
      refreshing={refreshing}
      // scroll event handler to check if the top of the list is reached
      onScroll={({ nativeEvent }) => {
        if (nativeEvent.contentOffset.y === 0) {
          setPage(1);
          setRefreshing(true);
          flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
        }
      }}
    />
  );
}

export default ResourceList;