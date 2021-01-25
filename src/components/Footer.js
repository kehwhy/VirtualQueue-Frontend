import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Footer, Text, FooterTab, Button, Header, Content } from 'native-base';
import { useState } from 'react';

export default function MyFooter () {
    
    const  [ active, setActive ]  = useState(0);
    
    return (
        <Footer>
            <FooterTab>
                <Button 
                active={active===0}
                onPress={()=>setActive(0)}>
                    <Text>Create a Line</Text>
                </Button>
            </FooterTab>
            <FooterTab>
                <Button 
                active={active===1}
                onPress={()=>setActive(1)}>
                    <Text>Join a line</Text>
                </Button>
            </FooterTab>
            <FooterTab>
                <Button 
                active={active===2}
                onPress={()=>setActive(2)}>
                    <Text>Settings</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}