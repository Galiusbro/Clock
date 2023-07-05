import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
      {Platform.OS === 'web' && <Text style={styles.platform}>Running on the web</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  time: {
    fontSize: 50,
  },
  platform: {
    marginTop: 20,
    fontSize: 20,
    color: 'gray',
  },
});

