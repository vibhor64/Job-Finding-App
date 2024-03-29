import { View, Text, TouchableOpacity,  ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants';
import NearbyjobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hooks/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();
  
  const {data, isLoading, error} = useFetch(
    'search', {
      query: 'React Developer',
      num_pages: 1,
      country: 'in'
    }
  )
  // console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Neaby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.tertiary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          data?.map((job, index) => (
            <NearbyjobCard key={`nearby-job-${job?.job_id}`} job={job} 
            handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}/>
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs