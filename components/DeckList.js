import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions/index';
import { connect } from 'react-redux';
import { white } from '../utils/colors';
import { maybePluralize } from '../utils/helpers';

class DeckList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    fetchDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  render() {
    const { decks } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {Object.values(decks).map(deck => (
            <TouchableOpacity
              key={deck.title}
              style={styles.item}
              onPress={() =>
                this.props.navigation.navigate('DeckView', {
                  title: deck.title,
                })
              }
            >
              <Text style={styles.title}>{deck.title}</Text>
              <Text style={styles.numOfCards}>
                {maybePluralize(deck.questions.length, 'card')}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  numOfCards: {
    textAlign: 'center',
  },
  item: {
    backgroundColor: white,
    borderRadius: 2,
    padding: 70,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    alignSelf: 'stretch',
  },
});
