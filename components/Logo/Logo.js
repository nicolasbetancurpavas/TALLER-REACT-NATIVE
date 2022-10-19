import { Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Logo({ oneTitle, twoTitle, colorBorder, textColor, colorText2 }) {


    const styles = StyleSheet.create(
        {
            imgHome: {
                marginTop: 100,
                width: 120,
                height: 120,
                borderRadius: '50%',
                border: `5px solid  ${colorBorder}`,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 8

            },

            textHome: {
                fontSize: 25,
                fontWeight: 'bold',
                fontFamily: 'Apple Chancery',
                color: `${textColor}`
            },

        }
    )

    return (
        <SafeAreaView>
            <Image
                style={styles.imgHome}
                source={require('../img/Logo.jpg')}
            />
            <Text
                style={styles.textHome}
            >{oneTitle}<Text style={{ color: `${colorText2}` }}>{twoTitle}</Text></Text>
        </SafeAreaView>
    )
}

