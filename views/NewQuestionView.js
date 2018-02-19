import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';
import styles from '../styles/NewQuestionViewStyle';

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
          this.props.navigation.goBack();
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
