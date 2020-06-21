import React from 'react';
import { StyleSheet, Text, FlatList, ScrollView } from 'react-native';

import { WrapCenter } from './UI/WrapCenter';
import { Comment } from './Comment';
import { AddComment } from './AddComment';

export const PostDetails = ({ post }) => {
  const { title, body, author, comments, id } = post;

  return (
    <WrapCenter>
      <ScrollView style={styles.post}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
        <Text style={styles.author}>author: {author.username}</Text>
      </ScrollView>
      <AddComment id={id} />
      <FlatList
        data={comments} 
        keyExtractor={comment => comment.id.toString()} 
        renderItem={({ item }) => <Comment comment={item} />}
      />
    </WrapCenter>
  );
};

const styles = StyleSheet.create({
  post: {
    minWidth: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
  },
  title: {
    textAlign: 'center',
    color: '#7E7E7E',
    fontFamily: 'roboto-bold',
    fontSize: 19,
    lineHeight: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#7E7E7E',
    marginBottom: 15,
  },
  body: {
    color: '#7E7E7E',
    fontFamily: 'roboto-regular',
    fontSize: 17,
    marginBottom: 8,
  },
  author: {
    color: '#7E7E7E',
    fontFamily: 'roboto-regular',
    fontSize: 14,
    alignSelf: 'flex-end',
    padding: 20
  }
});