import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DetailProps from '../screens/detail/types';

type RootStackParamList = {
  Home: undefined;
  Detail: DetailProps;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default Props;
