import React from 'react'
import { View, StatusBar } from 'react-native'
import DeckList from './components/DeckList'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import {white} from "./utils/colors";
import NewDeck from "./components/NewDeck";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import NewQuestionView from './views/NewQuestionView'
import DeckView from "./views/DeckView"
import QuizView from "./views/QuizView"
import thunk from 'redux-thunk'
import { setLocalNotification } from "./utils/helpers"


function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = TabNavigator({
    Deck : {
      screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
        }
    },
    NewDeck : {
      screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
        }
    }
}, {
    navigationOptions: {
        header: null
    },
})

const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
    },
    NewQuestionView: {
        screen: NewQuestionView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: '#009fff',
            },
        }
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: '#009fff',
            },
        },
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: '#009fff',
            },
        },
    }
});

export default class App extends React.Component {

    componentDidMount () {
        setLocalNotification()
    }

  render() {
    return (
        <Provider store={createStore(
            reducer,
            applyMiddleware(thunk)
        )}>
            <View style={{flex: 1}}>
                <UdaciStatusBar backgroundColor={'#009fff'} barStyle="light-content" />
                <MainNavigator />
            </View>
        </Provider>
    );
  }
}

