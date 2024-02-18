import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './company.style'
import {icons} from '../../../constants'
import { checkImageURL } from '../../../utils'


const Company = ({companyLogo, jobTitle, companyName, location}) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{uri: checkImageURL(companyLogo) ? companyLogo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}} 
        style={styles.logoImage}/>
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image source={icons.location} style={styles.locationImage} resizeMode='contain'
          />
          <Text style={styles.locationName}
          >{location}</Text>
        </View>
      </View>

      {/* <TouchableOpacity>
      <Text style={{ padding: 12, marginTop:20, borderRadius: 10, backgroundColor: 'blue', color: 'white'}}>
        Apply Now
      </Text>
    </TouchableOpacity> */}



    </View>
  )
}

export default Company