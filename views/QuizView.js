import React from 'react';
import { View, Text, TouchableNativeFeedback, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions/index';
import styles from '../styles/QuizViewStyle';

class QuizView extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz',
    };
  };

  onPressCorrect = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
        current: prevState.current + 1,
      };
    });
  };

  onPressIncorrect = () => {
    this.setState(prevState => {
      return {
        current: prevState.current + 1,
      };
    });
  };

  onPressAnswer = () => {
    this.setState({
      isAnswerOpened: true,
    });
  };

  onPressQuestion = () => {
    this.setState({
      isQuestionOpened: true,
      isAnswerOpened: false,
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      isAnswerOpened: false,
      isQuestionOpened: false,
      count: 0,
      current: 0,
    };
  }

  render() {
    const question = this.props.deck.questions[this.state.current];
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          {question === undefined ? (
            <View style={styles.container}>
              <Text style={styles.text}>
                Your Score:
                {Math.round(
                  this.state.count * 100 / this.props.deck.questions.length
                )}%
              </Text>

              <View style={styles.itemBtn}>
                <View>
                  <View>
                    <TouchableNativeFeedback
                      background={TouchableNativeFeedback.SelectableBackground()}
                      onPress={() =>
                        this.props.navigation.navigate('QuizView', {
                          title: this.props.deck.title,
                        })
                      }
                    >
                      <View style={styles.restartBtn}>
                        <Text style={styles.btnText}>Restart Quiz</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>

                  <View>
                    <TouchableNativeFeedback
                      background={TouchableNativeFeedback.SelectableBackground()}
                      onPress={() =>
                        this.props.navigation.navigate('DeckView', {
                          title: this.props.deck.title,
                        })
                      }
                    >
                      <View style={styles.restartBtn}>
                        <Text style={styles.btnText}>Return to Deck</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                </View>
              </View>
            </View>
          ) : (
            <ScrollView>
              <Text style={styles.numOfCards}>
                {this.state.count + 1}/{this.props.deck.questions.length}
              </Text>
              <View style={styles.itemTitle}>
                <View key={this.props.deck.title}>
                  {this.state.isAnswerOpened === false ? (
                    <View>
                      <Text style={styles.text}>{question.question}</Text>
                      <Text style={styles.answer} onPress={this.onPressAnswer}>
                        Answer
                      </Text>
                    </View>
                  ) : (
                    <View>
                      <Text style={styles.answerText}>{question.answer}</Text>
                      <Text
                        style={styles.answer}
                        onPress={this.onPressQuestion}
                      >
                        Question
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </ScrollView>
          )}

          {question !== undefined && (
            <View style={styles.itemBtn}>
              <View>
                <View>
                  <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPress={this.onPressCorrect}
                  >
                    <View style={styles.correctBtn}>
                      <Text style={styles.btnText}>Correct</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>

                <View>
                  <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    onPress={this.onPressIncorrect}
                  >
                    <View style={styles.incorrectBtn}>
                      <Text style={styles.btnText}>Incorrect</Text>
                    </View>
                  </TouchableNativeFeedback>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(decks, ownProps) {
  return {
    deck: decks[ownProps.navigation.state.params.title],
  };
}
export default connect(mapStateToProps)(QuizView);
