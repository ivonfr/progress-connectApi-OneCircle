import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


export default class App extends React.Component {

    constructor(props) {
      super(props)
  
      this.state = ({
        fullname: '',
        email: '',
        username: '',
        password: ''
      })
  
    }
  
    signUpUser = (fullname, email, username, password) => {
  
      firebase.database().ref('Users/').push({
        fullname,
        email,
        username,
        password
      }).then((data) => {
        //success callback
        console.log('data ', data)
      }).catch((error) => {
        //error callback
        console.log('error ', error)
      })
  
    }
    saySuccess = ()=> {
      alert("Registration Success")
    }
   
    render() {
      return (
        <Container style={styles.container}>
          <Form>
            <Text style={{ textAlign: "center", fontSize: 20, fontStyle: "normal", color: "blue" }}>Registration</Text>
            <Item floatingLabel>
              <Label>Full Name </Label>
              <Input
                autoCorect={false}
                autoCapitalize="none"
                onChangeText={(fullname) => this.setState({ fullname })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
  
                autoCorect={false}
                autoCapitalize="none"
                onChangeText={(username) => this.setState({ username })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorect={false}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
  
            <Button style={{ marginTop: 10 }}
              full
              rounded
              primary 
              onPress={this.saySuccess}
              onPress={() => this.signUpUser(this.state.fullname,this.state.email,this.state.username, this.state.password)}
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </Button>
  
  
          </Form>
        </Container>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 10
    },
  });