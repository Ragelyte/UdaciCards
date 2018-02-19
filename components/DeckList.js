import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { fetchDecks } from '../utils/api';
import { receiveDecks } from '../actions/index';
import { connect } from 'react-redux';
import { maybePluralize } from '../utils/helpers';
import styles from '../styles/DeckListStyle';

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

const mapStateToProps = decks => ({ decks });

export default connect(mapStateToProps)(DeckList);
