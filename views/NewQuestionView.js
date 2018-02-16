import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';

class NewQuestionView extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Add Card',
    };
  };

  addCard = () => {
    if (this.state.question.trim() && this.state.answer.trim()) {
      this.props
        .addCard(this.props.deck, {
          question: this.state.question,
          answer: this.state.answer,
        })
        .then(() => {
          this.props.navigation.navigate('DeckView', {
            title: this.props.deck.title,
          });
        })
        .then(() => {
          this.setState({
            question: '',
            answer: '',
          });
        });
    } else {
      alert('Question and Answer fields are required!');
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.questionInput}>
          <TextInput
            style={styles.input}
            placeholder="Enter question here..."
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
        </View>

        <View style={styles.answerInput}>
          <TextInput
            style={styles.input}
            placeholder="Enter answer here..."
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </View>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.addCard}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(decks, ownProps) {
  return {
    deck: decks[ownProps.navigation.state.params.title],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: (deck, card) => dispatch(addCard(deck, card)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    textAlign: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#009fff',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  btnText: {
    color: 'white',
  },
  questionInput: {
    marginTop: 30,
    marginBottom: 20,
  },
  answerInput: {
    marginBottom: 20,
  },
});
