import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';
import styles from '../styles/NewDeckStyle';

class NewDeck extends Component {
  handleAddDeck = () => {
    if (this.state.title.trim()) {
      this.props
        .addDeck({
          title: this.state.title,
          questions: [],
        })
        .then(() => {
          this.props.navigation.navigate('DeckView', {
            title: this.state.title,
          });
        })
        .then(() => {
          this.setState({
            title: '',
          });
        });
    } else {
      alert('Please enter deck title');
    }
  };

  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter deck title here..."
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.handleAddDeck}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: deck => dispatch(addDeck(deck)),
  };
}

export default connect(null, mapDispatchToProps)(NewDeck);
