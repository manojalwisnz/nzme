import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
    image: {
        height: 200,
        width: 200
    },
    separatorView: {
        height: 1,
        width: "100%",
        height: 2,
        backgroundColor: '#4CAF50'
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#4CAF50',
        marginTop: '50%'
    }
});
