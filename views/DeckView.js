import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import {
  maybePluralize,
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';
import { white } from '../utils/colors';
import QuizView from './QuizView';
import NewQuestionView from './NewQuestionView';
import { connect } from 'react-redux';

class DeckView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title,
    };
  };

  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.itemTitle}>
            <Text style={styles.text}>{this.props.deck.title}</Text>
            <Text style={styles.numOfCards}>
              {maybePluralize(this.props.deck.questions.length, 'card')}
            </Text>
          </View>

          <View style={styles.itemBtn}>
            <View style={styles.btnContainer}>
              <View>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  onPress={() =>
                    this.props.navigation.navigate('NewQuestionView', {
                      title: this.props.deck.title,
                    })
                  }
                >
                  <View style={styles.addCardBtn}>
                    <Text>Add Card</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>

              <View>
                <TouchableNativeFeedback
                  background={TouchableNativeFeedback.SelectableBackground()}
                  onPress={() => {
                    {
                      this.props.deck.questions.length === 0
                        ? alert('Deck is empty!')
                        : this.props.navigation.navigate('QuizView', {
                            title: this.props.deck.title,
                          });
                    }

                    clearLocalNotification().then(setLocalNotification);
                  }}
                >
                  <View style={styles.startQuizBtn}>
                    <Text style={styles.btnText}>Start Quiz</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

function mapStateToProps(decks, ownProps) {
  return {
    deck: decks[ownProps.navigation.state.params.title],
  };
}

export default connect(mapStateToProps)(DeckView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
  addCardBtn: {
    backgroundColor: white,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000000',
    borderRadius: 2,
    borderWidth: 1,
  },
  startQuizBtn: {
    backgroundColor: '#009fff',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10,
  },
  btnText: {
    color: white,
  },
  itemTitle: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 2,
    padding: 70,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
  },
  itemBtn: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 2,
    padding: 70,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
  },
  numOfCards: {
    textAlign: 'center',
  },
  btnContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
