import { FlatList, Text, View, Image, RefreshControl } from 'react-native';
import styles from './styles'

const ItemView = ({ item }) => {
    return (
        <View style={styles.itemView}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text
                style={styles.item}
            >
                {item.title}
            </Text>
        </View>
    );
};

const ItemSeparatorView = () => {
    return (
        <View
            style={styles.separatorView}
        />
    );
};

const MainFlatList = ({ data }) => (

    <FlatList
        data={data}
        width='100%'
        keyExtractor={(index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ListHeaderComponent={() => (!data.length ?
            <Text style={styles.emptyText}>No data availabe</Text>
            : null)
        }
        refreshControl={
            <RefreshControl refreshing={false} />
        }
    />
);

export default MainFlatList