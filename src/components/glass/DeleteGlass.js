import React, { Component } from 'react'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

class DeleteGlass extends Component {
  render() {
    const { glass } = this.props
    const handleDeleteDoc = (glass) => {
      const firestore = getFirestore()
      const firebase = getFirebase()
      const storage = firebase.storage()
      const storageRef = storage.ref()
      const imagesRef = storageRef.child('glassImages')

      if (glass.url === "" || null || undefined || false) {
        firestore.collection("glass").doc(`${glass.id}`).delete().then(() => {
          console.log('successfully deleted')
        }).catch((err) => {
          console.log(err)
        })
      } else {
        imagesRef.child(`${glass.fileName}`).delete().then(() => {
          firestore.collection("glass").doc(`${glass.id}`).delete().then(() => {
            console.log('successfully deleted')
          }).catch((err) => {
            console.log(err)
          })
        }).catch((err) => {
          console.log(err)
        })
      }

    }

    return (
      <div className="delete">
        <button onClick={() => handleDeleteDoc(glass)}>Delete</button>
      </div>
    )
  }
}

export default DeleteGlass