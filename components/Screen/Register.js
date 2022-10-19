import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../Logo/Logo'
import { useForm, Controller } from 'react-hook-form'
import { useState, useRef } from 'react'
import { Ionicons } from "@expo/vector-icons"

const principalColor = '#311C76'
const subColor = '#9E9E9E'

const styles = StyleSheet.create(
    {
        FullScreen: {
            backgroundColor: `${principalColor}`,
            height: '320px',
            display: 'flex',
            alignItems: 'center',
            shadowColor: `${subColor}`,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.93,
            shadowRadius: 4.62,
            elevation: 4,

        },

        textRegister: {
            color: 'white',
            fontSize: '20px',
            fontWeight: "bold",
            fontFamily: 'Apple Chancery',
            marginTop: '20px'
        },

        containerRegister: {
            marginTop: '50px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '5px',

        },

        textInput: {
            width: '230px',
            textAlign: 'center',
            color: `${principalColor}`,
            fontWeight: 'bold',
            padding: 15,
            shadowColor: `${subColor}`,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.93,
            shadowRadius: 4.62,
            elevation: 4,

            marginBottom: '15px',
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
            shadowColor: `${subColor}`,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.93,
            shadowRadius: 6.62,
            elevation: 4,

            marginBottom: '10px'


        },
    }
)

export default function Register({ navigation }) {


    const { control, handleSubmit, reset, formState: { errors } } = useForm({

        defaultValues: {
            userName: '',
            email: '',
            contrasena: ''
        }

    })

    const [registros, setRegistros] = useState([])

    const onSubmit = data => {
        registros.push(data)
        console.log(registros)
        navigation.navigate('Home', { registros: registros })
        reset()
    }

    return (
        <View>
            <View style={styles.FullScreen}>
                <Ionicons style={{
                    fontSize: 40, color: `white`, position: 'absolute',
                    top: 30, left: 20,
                    textShadow: '2px 1px 2px black'
                }}
                    name='chevron-back-circle'
                    onPress={() => navigation.navigate('Home')}
                />
                <Logo
                    colorBorder={`white`}
                    textColor={`white`}
                    colorText2={`${subColor}`}
                    oneTitle={'Bienvenido'}
                    twoTitle={'Astronauta'}
                />

                <Text
                    style={styles.textRegister}
                >
                    Registrar</Text>
            </View>

            <View style={styles.containerRegister}>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^[A-Za-z0-9]+$/g,
                        maxLength: 15,
                        minLength: 5
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={'Digitar Username'}
                        />
                    )}
                    name="userName"
                />

                {errors.userName && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 5 }}>Solo letras y numeros</Text>}
                {errors.userName && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 5 }}>digitar mas de 5 letras menos de 16</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={'Digitar Correo'}
                        />
                    )}
                    name="email"
                />

                {errors.email && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 15 }}>el correo debe tener  @ y. evitar el uso de la ñ</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                        minLength: 6
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.textInput}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder={'Digitar contra'}
                        />
                    )}
                    name="contrasena"
                />
                {errors.contrasena && <Text style={{ fontSize: 12, color: '#7F2D28', marginBottom: 15, width: '80%' }}>Minimo 8 caracteres,
                    Maximo 15,
                    Al menos una letra mayúscula,
                    Al menos una letra minucula,
                    Al menos un dígito,
                    Al menos 1 caracter especial</Text>}

                <TouchableOpacity
                    style={styles.Touchable}
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Registrar</Text>
                </TouchableOpacity>

            </View>
        </View >

    )
}