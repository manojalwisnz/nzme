import { TouchableOpacity, Text } from 'react-native';
import styles from './styels';

const MainButton = ({ onPress, title }) => (
    <TouchableOpacity style={styles.button}
        onPress={onPress}
    >
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
);

export default MainButton