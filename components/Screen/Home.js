import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Logo from '../Logo/Logo'

//Styles
const principalColor = '#311C76'
const subColor = '#9E9E9E'

const styles = StyleSheet.create(
    {

        container: {
            marginTop: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white'
        },

        BackgroundColorHeader: {
            backgroundColor: `${principalColor}`,
            width: '100%',
            height: 40,
            color: 'transparent',
            shadowColor: "grey",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 1.23,
            shadowRadius: 4.62,
            elevation: 5,
        },

        containerLogin: {
            display: 'flex',
            marginTop: '50px',
            alignItems: 'center'

        },

        textInput: {
            width: '230px',
            textAlign: 'center',
            color: `${principalColor}`,
            fontWeight: 'bold',
            padding: 15,
            shadowColor: "grey",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.93,
            shadowRadius: 6.62,
            elevation: 4,

            marginBottom: '20px',
            placeholderTextColor: `${subColor}`

        },

        Touchable: {
            backgroundColor: `${principalColor}`,
            width: '270px',
            marginTop: '20px',
            shadowColor: "grey",
            padding: '15px',
            textAlign: 'center',
            borderRadius: 5,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.93,
            shadowRadius: 6.62,
            elevation: 4,

            marginBottom: '10px'


        },

        containerRegister: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20

        }

    }
)

export default function Home({ navigation }) {

    const [result, setResult] = useState('')

    const [user, setUser] = useState('')
    const [rol, setRol] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [users, setUsers] = useState([])


    function onPress() {
        users.push({ usuario: user, rol: rol })
        console.log(users)
        if (rol == 'usuario' && contrasena == "123user") {
            setResult('exito en el Resultado')
            setTimeout(() => {
                navigation.navigate('Cuentas', { user: user })
            }, 1500)
        }
        else {
            setResult('Usuario no existente')
            setRol('')
            setUser('')
            setContrasena('')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.BackgroundColorHeader}></Text>

            <Logo
                colorBorder={`${subColor}`}
                textColor={`${principalColor}`}
                colorText2={`${subColor}`}
                oneTitle={'Astro'}
                twoTitle={'Banck'}
            />

            <View
                style={styles.containerLogin}
            >
                <TextInput
                    style={styles.textInput}
                    placeholder='Nombre de usuario'
                    value={user}
                    onChangeText={user => setUser(user)}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder='administrador o usuario ?'
                    value={rol}
                    onChangeText={rol => setRol(rol)}
                />

                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    placeholder='Password'
                    value={contrasena}
                    onChangeText={contrasena => setContrasena(contrasena)}
                />

                <TouchableOpacity style={styles.Touchable}
                    onPress={onPress}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerRegister}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ color: `${principalColor}` }}>No tienes cuenta?  Registrar</Text>
                </TouchableOpacity>


                <TextInput
                    style={{
                        width: '100%', textAlign: 'center',
                        marginTop: 37, color: `${subColor}`,
                        fontWeight: 'bold', fontSize: 18
                    }}
                    value={result}
                    onChangeText={result => setResult(result)}
                />

            </View>

        </View>

    )
}