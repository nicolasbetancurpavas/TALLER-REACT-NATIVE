import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Ionicons } from "@expo/vector-icons"

const principalColor = '#311C76'
const subColor = '#9E9E9E'

const estilos = StyleSheet.create(
    {

        textBienvenida: {
            color: `white`,
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: `${principalColor}`,
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },

        icon: {
            color: `${principalColor}`,
            fontSize: 45,
            fontWeight: 'bold'
        },

        containerSaldo: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },

        textSaldo: {
            color: `${principalColor}`,
            textShadow: `2px 2px 2xp black`,
            fontSize: 16,
            fontWeight: '600'
        },

        inputs: {
            color: `white`,
            width: '90%',
            border: '2px solid grey',
            textAlign: 'center',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            marginBottom: 25,
            fontSize: 16
        },

        containerInputs: {
            borderRadius: 15,
            padding: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `${principalColor}`
        },

        Touchable: {
            backgroundColor: 'white',
        }

    }
)

export default function Cuentas({ route }) {



    const { control, handleSubmit, reset, formState: { errors } } = useForm({

        defaultValues: {
            numeroCuenta: '',
            identificacion: '',
            titular: '',
            fecha: '',
            saldo: ''
        }

    })

    const [datos, setDatos] = useState([])
    const [objecto, setObjecto] = useState([])



    const onSubmit = data => {
        datos.push(data)
        console.log(datos)
        setObjecto(Object.values(data))
        console.log(objecto)
    }


    const saldoFavor = 50000

    return (
        <View>
            <View>

                <Text style={estilos.textBienvenida}>Hola bienvenido A tu cuenta</Text>

                <View style={estilos.containerSaldo}>
                    <Text style={estilos.textSaldo}>tu saldo es {saldoFavor}</Text>
                    <Ionicons
                        style={estilos.icon}
                        name='md-logo-tux'
                    />
                </View>


                <View style={estilos.containerInputs}>

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
                                style={estilos.inputs}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Digitar Numero de cuenta'}
                            />
                        )}
                        name="numeroCuenta"
                    />

                    {errors.numeroCuenta && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 5 }}>Solo letras y numeros</Text>}

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={estilos.inputs}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Digitar identificacion'}
                            />
                        )}
                        name="identificacion"
                    />

                    {errors.identificacion && <Text style={{ fontSize: 11, color: '#7F2D28', marginBottom: 15 }}>el correo debe tener  @ y. evitar el uso de la ñ</Text>}

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            minLength: 6
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={estilos.inputs}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Digitar nombre de la cuenta a enviar '}
                            />
                        )}
                        name="titular"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={estilos.inputs}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Digitar Fecha'}
                            />
                        )}
                        name="fecha"
                    />


                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={estilos.inputs}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                placeholder={'Digitar saldo a enviar'}
                            />
                        )}
                        name="saldo"
                    />


                    <TouchableOpacity
                        style={estilos.Touchable}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={{
                            color: `${principalColor}`,
                            fontWeight: 'bold',
                            borderRadius: 20,
                            padding: 10

                        }}>Enviar dinero </Text>
                    </TouchableOpacity>

                    <Text style={{
                        marginTop: 20, color: 'white', border: `2px solid ${subColor}`,
                        height: "140px", width: '100%', textAlign: 'center', fontWeight: 'bold',
                        borderRadius: 10
                    }}> Datos de la tranferencia {objecto.map(obj => (
                        <Text style={{ marginRight: 10, width: '100%', display: 'flex' }}>{obj}</Text>
                    ))}</Text>

                </View>
            </View>

        </View>
    )
}