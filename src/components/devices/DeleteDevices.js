import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFirestore } from 'redux-firestore'
import { storage } from '../../config/fbConfig'
import { getFirebase } from 'react-redux-firebase'

import { deleteDevices } from '../../store/actions/devicesActions'
import devicesReducer from '../../store/reducers/devicesReducer'

class DeleteDevices extends Component {
  render() {
    const { device } = this.props
    const handleDeleteDoc = (device) => {
      const firestore = getFirestore()
      const firebase = getFirebase()
      const storage = firebase.storage()
      const storageRef = storage.ref()
      const imagesRef = storageRef.child('deviceImages')
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

    return (
      <div className="delete">
        <button onClick={() => handleDeleteDoc(device)}>Delete</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteDevices: (device) => dispatch(deleteDevices(device))
  }
}

export default connect(null, mapDispatchToProps)(DeleteDevices)