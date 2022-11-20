import { createMaterialBottomTabNavigator,} from '@react-navigation/material-bottom-tabs';

// Import Screens
import Characters from'./Characters';
import Episodes from './Episodes';
import Quotes from './Quotes';

// Create Bottom Tab
const AppTaps = createMaterialBottomTabNavigator();

// Create The Tabs 
export const Tabs = () => {
    return(
        <AppTaps.Navigator>
            <AppTaps.Screen name='Characters'component={Characters}  />
            <AppTaps.Screen name='Episodes'component={Episodes} />
            <AppTaps.Screen name='Quotes'component={Quotes} />
        </AppTaps.Navigator>
    )    
}