import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';

class NewDeck extends Component {
  addDeck = () => {
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
          onPress={this.addDeck}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps() {
  return {
    //
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDeck: deck => dispatch(addDeck(deck)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
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
});
