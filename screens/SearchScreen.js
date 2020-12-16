import { AuthSession } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import db from '../config'

export default class Searchscreen extends React.Component {

  constructor(props){

    super(props);
   
    this.state ={

      allTransactions :[],
      lastVisibleTransaction : null

    }
    

  }


  componentDidMount =async()=>{
    
    const query = await db.collection("transactions").get()

    query.docs.map((doc)=>{
      this.setState({
         allTransactions : [...this.state.allTransactions, doc.data()]
      })
     
     
    })


  }

  

  fetchMoreTransactions = async ()=>{
    var text = this.state.search.toUpperCase()
    var enteredText = text.split("")

    
    if (enteredText[0].toUpperCase() ==='B'){
    const query = await db.collection("transactions").where('bookId','==',text).startAfter(this.state.lastVisibleTransaction).limit(10).get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions: [...this.state.allTransactions, doc.data()],
        lastVisibleTransaction: doc
      })
    })
  }
    else if(enteredText[0].toUpperCase() === 'S'){
      const query = await db.collection("transactions").where('bookId','==',text).startAfter(this.state.lastVisibleTransaction).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allTransactions: [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction: doc
        })
      })
    }
}

  searchTransactions = async(text) => {
    var enteredText = text.split("")
    var text = text.toUpperCase()

    if(enteredText[0].toUpperCase()== 'B'){
      const transaction = await db.collection('transactions').where('bookId', '==' , text) .get()
      transaction.docs.map((doc)=>{
        this.setState({
          allTransactions : [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction : doc
       })
      })
    }
    else if(enteredText[0].toUpperCase()== 'S'){
      const transaction = await db.collection('transactions').where('bookId', '==' , text) .get()
      transaction.docs.map((doc)=>{
        this.setState({
          allTransactions : [...this.state.allTransactions, doc.data()],
          lastVisibleTransaction : doc
       })
      })
    }
    
  }

  
    render() {

       return (

      <View style={styles.container}>
         <View style={styles.searchBar}>
           
           <TextInput styles = {styles.bar}>
          Placeholder = "Enter Book ID or Student ID"

          onChangeText= {(text)=> {this.setState({search : text})}}

           </TextInput>
           <TouchableOpacity style = {styles.searchButton}
            onPress={()=>{this.searchTransactions(this.state.search)}}>
          

           <text>Search</text>
           </TouchableOpacity>

           



           
         </View>


        
      

        <FlatList
          data = {this.state.allTransactions}
            


            
            renderItem={({item})=>(
              

          <View style={{borderBottomWidth: 2}}>
              
          <Text> {"Book Id :" + transaction.bookId}</Text>
          <Text> {"Student Id: " + transaction.studentId}</Text>
          <Text> {"Transaction Type: " + transaction.transactionType}</Text>
          <Text> {"Date : " + transaction.date.toDate()}</Text>
          
          </View>

            )}     
            
            keyExtractor = {(item , index)=> index.toString()}
            
            onEndReached = {this.fetchMoreTransactions()}
          onEndReachedThreshold = {0.7}
          
        />
    
    </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    searchBar: {
      flexDirection : 'row',
      height: 40,
      width: 'auto',
      alignItems : 'center',
      backgroundColor: 'grey'
    },
    bar: {
      borderWidth: 2,
      height: 30,
      width: 300,
      paddingLeft: 10
    },
    searchButton: {
      borderWidth: 1,
      height: 30,
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'green'
    }
  })