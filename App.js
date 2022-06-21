import { View, Text } from 'react-native';
import Home from './screens/home';
import { StoreProvider } from './hooks/contexts/Store';

export default function App() {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
}
