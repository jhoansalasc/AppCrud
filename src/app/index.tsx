import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

const index = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false} 
        style={{ flexGrow: 0 }}
      >
        <Image 
          source={require("../../assets/images/banner1.png")} 
          style={{ width: width, height: 200 }} 
          resizeMode='contain' 
        />
        <Image 
          source={require("../../assets/images/banner2.png")} 
          style={{ width: width, height: 200 }} 
          resizeMode='contain' 
        />
        <Image 
          source={require("../../assets/images/banner3.png")} 
          style={{ width: width, height: 200 }} 
          resizeMode='contain' 
        />
      </ScrollView>

      <Text style={styles.title}>INICIO</Text>
      <Text style={styles.bodyText}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit distinctio 
        repellat sit, officia nam totam eligendi ut inventore pariatur aperiam, minus 
        illum, dignissimos cumque ipsa fugiat. Non quod assumenda nostrum!
      </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  }
});
