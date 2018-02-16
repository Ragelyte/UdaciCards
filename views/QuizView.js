import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';
import { white } from '../utils/colors';
import { connect } from 'react-redux';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions/index';

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
            <View>
              <Text style={styles.text}>
                {Math.round(
                  this.state.count * 100 / this.props.deck.questions.length
                )}% correct
              </Text>
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
    fontSize: 25,
    textAlign: 'center',
  },
  correctBtn: {
    backgroundColor: 'green',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  incorrectBtn: {
    backgroundColor: 'red',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 2,
  },
  btnText: {
    color: 'white',
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
  answer: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 25,
    textAlign: 'center',
  },
  numOfCards: {
    fontSize: 20,
  },
});
