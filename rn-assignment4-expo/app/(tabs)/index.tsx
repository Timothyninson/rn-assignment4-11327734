  import React, { useState } from 'react';
  import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';

  const featuredJobs = [
    {
      title: 'Software Engineer',
      company: 'Facebook',
      location: 'Accra, Ghana',
      salary: '$180.00',
      image: require('../../assets/images/facebook.png'),
    },
    {
      title: 'Software Engineer',
      company: 'Google',
      location: 'Accra, Ghana',
      salary: '$160.00',
      image: require('../../assets/images/google.png'),
    },
  ];

  const popularJobs = [
    {
      title: 'Mensah Erskine',
      company: 'Facebook',
      location: 'Accra, Ghana',
      salary: '$180.00',
      image: require('../../assets/images/facebook.png'),
    },
    {
      title: 'Kay Rahina',
      company: 'Google',
      location: 'Accra, Ghana',
      salary: '$160.00',
      image: require('../../assets/images/google.png'),
    },
    {
      title: 'Jr Executive',
      company: 'Burger King',
      location: 'Los Angeles, US',
      salary: '$96,000/y',
      image: require('../../assets/images/burger_king.png'),
    },
    {
      title: 'Product Manager',
      company: 'Beats',
      location: 'Florida, US',
      salary: '$84,000/y',
      image: require('../../assets/images/beats.png'),
    },
    {
      title: 'Product Manager',
      company: 'Facebook',
      location: 'Florida, US',
      salary: '$86,000/y',
      image: require('../../assets/images/facebook.png'),
    },
  ];

  export default function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(popularJobs);

    const handleSearch = (text) => {
      setSearchTerm(text);
      const filtered = popularJobs.filter(job =>
        job.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredJobs(filtered);
    };
    const filteredPopularJobs = filteredJobs.filter(job => 
      job.title !== 'Mensah Erskine' && job.title !== 'Kay Rahina'
    );
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
         <View style={styles.nameContainer}>
           <Text style={styles.heading}>Eric Atsu</Text>
           <Text style={styles.email}>eric@gmail.com</Text>
         </View>
          <Image source={require('../../assets/images/user_profile.png')} style={styles.profilePic} />
          
        </View>

        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search a job or position"
            placeholderTextColor="#888"
            value={searchTerm}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Image source={require('../../assets/images/filter.png')} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.featuredJobsContainer}>
          <Text style={styles.featuredJobsHeading}>Featured Jobs</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.featuredJobsGrid}
            contentContainerStyle={{ justifyContent: 'center' }}
          >
            {featuredJobs.map((job, index) => (
              <View 
              key={index} 
              style={[
                styles.featuredJobCard,
                index === 0 ? { backgroundColor: '#5386E4' } : index === 1 ? { backgroundColor: '#04284A' } : null]}>
              <View style={styles.featuredJobTop}>
                <Image source={job.image} style={styles.featuredJobImage} />
              <View style={styles.featuredJobText}>
                <Text style={styles.featuredJobTitle}>{job.title}</Text>
                <Text style={styles.featuredJobCompany}>{job.company}</Text>
              </View>   
               
              </View> 
              <View style={styles.featuredJoblast}>  
                <Text style={styles.featuredJobLocation}>{job.location}</Text>
                <Text style={styles.featuredJobSalary}>{job.salary}</Text>
              </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.popularJobsContainer}>
          <Text style={styles.popularJobsHeading}>Popular Jobs</Text>
          <FlatList
            data={filteredPopularJobs}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <View style={styles.popularJobItem}>
                <Image source={item.image} style={styles.popularJobImage} />
                <View style={styles.popularJobDetails}>
                  <View style = {styles.popularJobrow}>
                   <Text style={styles.popularJobTitle}>{item.title}</Text>
                   <Text style={styles.popularJobSalary}>{item.salary}</Text>
                  </View>
                <View style = {styles.popularJobrow}>
                  <Text style={styles.popularJobCompany}>{item.company}</Text>
                  <Text style={styles.popularJobLocation}>{item.location}</Text>
                </View>  
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFD',
      padding: 20,
      paddingTop: 70,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    
    },
    
    heading: {
      fontSize: 39,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    email: {
      fontSize: 16,
      marginBottom: 5,
    },
    searchBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    searchBar: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
    },
    filterButton: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    filterIcon: {
      width: 20,
      height: 20,
    },
    featuredJobsContainer: {
      marginBottom: 20,
    },
    featuredJobsHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    
    featuredJobCard: {
      width: 280,
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      elevation: 3,
      marginBottom: 10,
      height: 190,
      marginRight: 10,
      
    },
    featuredJobTop: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 10,
    },
    featuredJoblast: {
      flexDirection: 'row',
      marginTop: 30,
      
    },
    featuredJobText: {
     
    alignItems: 'center', 
    },
    featuredJobImage: {
      width: 80,
      height: 80,
      alignSelf: 'center',
      marginBottom: 10,
    },
    featuredJobTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#FFFFFF',
    },
    featuredJobCompany: {
      fontSize: 14,
      color: '#FFFFFF',
      textAlign: "left",
      marginRight: 30,
      
    },
    featuredJobLocation: {
      fontSize: 14,
      color: '#FFFFFF',
      
      paddingRight: 100,
    },
    featuredJobSalary: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFFFFF',
      
    },
    popularJobsContainer: {
      marginBottom: 20,
    },
    popularJobsHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 13,
      marginTop: 3,
      
      
    },
    popularJobItem: {
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      elevation: 3,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      alignItems: 'center',
    },
    popularJobImage: {
      width: 60,
      height: 60,
      marginRight: 15,
    },
    popularJobDetails: {
      flex: 1,
    },
    popularJobrow: {
    flexDirection: 'row',
    
    },
    popularJobTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      paddingRight: 28,
    },
    popularJobCompany: {
      fontSize: 14,
      color: '#888',
      marginBottom: 3,
      paddingRight: 60,
    },
    popularJobLocation: {
      fontSize: 14,
      color: '#888',
      marginBottom: 3,
       
    },
    popularJobSalary: {
      fontSize:15,
    },
  });
