import {View, Text, ScrollView, SafeAreaView, RefreshControl} from 'react-native';
import { useState } from 'react';
import {Stack, useRouter} from 'expo-router';
import { StatusBar } from 'react-native';

import { COLORS, icons, images, SIZES } from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

// Home Screen
const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('')
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = ()=>{
    // window.location.reload();
    // router.push('/')
    router.replace('/');
    // setRefreshing(true)
  }

  StatusBar.setBackgroundColor(COLORS.tertiary); // Set the background color
  StatusBar.setBarStyle('light-content');
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen 
      options={{
        headerStyle: {backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
        ),
        headerTitle: ""
    }}/>
        
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}>
          <View style={{flex: 1, padding: SIZES.medium}}>
            
            <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={()=>{
              if (searchTerm){
                router.push(`/search/${searchTerm}`)
              }
            }}
            />
            <Popularjobs/>
            <Nearbyjobs/>

          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;