import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'
import { index } from 'cheerio/lib/api/traversing'

const Specifics = ({title, points}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.pointsContainer}>
        {points.map((item,index) => (
          <View style={styles.pointWrapper} key={item+index}>
            <View style={styles.pointDot}/>
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
        </Text>

    </View>
  )
}

export default Specifics