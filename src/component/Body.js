import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Audio } from 'expo-av'
import { Ionicons } from '@expo/vector-icons'

export default () => {
  const [router, setRouter] = useState('home')
  return (
    <>
      <View style={{ flexDirection: 'row' }}>
        <ButtonNav router={setRouter} newRoute='home'>
          Accueil
        </ButtonNav>
        <ButtonNav router={setRouter} newRoute='radio'>
          Radio
        </ButtonNav>
        <ButtonNav router={setRouter} newRoute='note'>
          Bloc note
        </ButtonNav>
      </View>
      {router === 'home' && <Home />}
      {router === 'radio' && <ManageRadio />}
      {router === 'note' && <Note />}
    </>
  )
}

const createSoundObject = async (setSound) => {
  try {
    const radio = await Audio.Sound.createAsync({
      uri: 'https://radio.dekpo.com/stream.mp3',
    })
    setSound(radio.sound)
  } catch (error) {
    console.log(error)
  }
}
const toogleListening = (listening, setListening) =>
  setListening(!listening)

const playSound = async (sound) => await sound.playAsync()

const stopSound = async (sound) => await sound.stopAsync()

const ManageRadio = () => {
  const [listening, setListening] = useState(false)
  const [sound, setSound] = useState()

  useEffect(() => {
    createSoundObject(setSound)
  }, [])

  const mainIcon = !listening ? 'play' : 'stop'
  const classIcon = !listening
    ? styles.playButton
    : styles.stopButton

  listening && sound != null && playSound(sound)
  !listening && sound != null && stopSound(sound)

  return (
    <TouchableOpacity
      onPress={() =>
        toogleListening(listening, setListening)
      }
      style={classIcon}
    >
      <Ionicons name={mainIcon} style={styles.iconButton} />
    </TouchableOpacity>
  )
}

const Home = () => (
  <Text>Bienvenue sur la page d'accueil</Text>
)

const Note = () => <Text>Voici le bloc note</Text>

const ButtonNav = (props) => {
  const { router, newRoute, children } = props
  const setRouter = (route) => router(route)

  return (
    <TouchableOpacity onPress={() => setRouter(newRoute)}>
      <Text style={styles.buttonNav}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    fontSize: 40,
    color: 'white',
  },
  playButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#13e34b',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  stopButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonNav: {
    backgroundColor: 'grey',
    padding: 10,
    margin: 10,
  },
})
