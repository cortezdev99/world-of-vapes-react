import React, { Component } from 'react'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'


class DeleteJuice extends Component {
  render() {
    const { juice } = this.props
    const handleDeleteDoc = (juice) => {
      const firestore = getFirestore()
      const firebase = getFirebase()
      const storage = firebase.storage()
      const storageRef = storage.ref()
      const imagesRef = storageRef.child('juiceImages')

      if (juice.fileName == "" || null || undefined || false) {
        firestore.collection("juices").doc(`${juice.id}`).delete().then(() => {
          console.log('successfully deleted')
        }).catch((err) => {
          console.log(err)
        })
      } else {
        imagesRef.child(`${juice.fileName}`).delete().then(() => {
          firestore.collection("juices").doc(`${juice.id}`).delete().then(() => {
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
        <button onClick={() => handleDeleteDoc(juice)}>Delete</button>
      </div>
    )
  }
}

export default DeleteJuice