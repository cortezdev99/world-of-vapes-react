import React, { Component } from 'react'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'

class DeleteDevices extends Component {
  render() {
    const { device } = this.props
    const handleDeleteDoc = (device) => {
      const firestore = getFirestore()
      const firebase = getFirebase()
      const storage = firebase.storage()
      const storageRef = storage.ref()
      const imagesRef = storageRef.child('deviceImages')

      if (device.url === "" || null || undefined || false) {
        firestore.collection("devices").doc(`${device.id}`).delete().then(() => {
          console.log('successfully deleted')
        }).catch((err) => {
          console.log(err)
        })
      } else {
        imagesRef.child(`${device.fileName}`).delete().then(() => {
          firestore.collection("devices").doc(`${device.id}`).delete().then(() => {
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
        <button onClick={() => handleDeleteDoc(device)}>Delete</button>
      </div>
    )
  }
}

export default DeleteDevices