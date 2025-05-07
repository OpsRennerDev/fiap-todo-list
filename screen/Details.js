import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Details () {
  const data = [
    { id: '1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: '2', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: '3', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { id: '4', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
    { id: '5', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.' },
    { id: '6', text: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.' },
    { id: '7', text: 'Praesent placerat risus quis eros. Fusce pellentesque suscipit nibh.' },
    { id: '8', text: 'Praesent placerat risus quis eros. Fusce pellentesque suscipit nibh.' },
    { id: '9', text: 'Praesent placerat risus quis eros. Fusce pellentesque suscipit nibh.' },
    { id: '10', text: 'Praesent placerat risus quis eros. Fusce pellentesque suscipit nibh.' },
  ];

  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Lista de Posts</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
});
