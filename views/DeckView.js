import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import {
  maybePluralize,
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers';
import QuizView from './QuizView';
import NewQuestionView from './NewQuestionView';
import { connect } from 'react-redux';
import styles from '../styles/DeckViewStyle';

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
