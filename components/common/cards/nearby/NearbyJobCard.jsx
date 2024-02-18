import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import {checkImageURL} from '../../../../utils/index.js'
import { SIZES } from '../../../../constants/theme.js'

const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    // <View></View>
    <TouchableOpacity style={styles.container}
      onPress={handleNavigate} >
        <TouchableOpacity style={styles.logoContainer}>
            <Image style={styles.logoImage} 
            source={{uri: checkImageURL(job.employer_logo) ? (job.employer_logo) : ('https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg')}} 
            resizeMode='contain'/>

        </TouchableOpacity>
        
        <View style={styles.textContainer}>
            <Text style={styles.jobName} numberOfLines={1}> {job.job_title} </Text>
            <Text style={[styles.jobType, {fontFamily: 'DMBold'}]}> {job.employer_name} </Text>
            <Text style={[styles.jobType, {fontSize: SIZES.small}]}> {job.job_employment_type} </Text>
        </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard