export const createDevices = (device) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('devices').add({
      ...device
    }).then(() => {
      dispatch({ type: 'CREATE_DEVICE', device })
    }).catch((err) => {
      dispatch({ type: 'CREATE_DEVICE_ERR', err })
    })
  }
}

// export const deleteDevices = (device) => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     firestore.collection('devices').doc(`'${device.id}'`).delete().then(() => {
//         dispatch({ type: 'DELETE_DEVICE', device })
//       }).catch((err) => {
//         dispatch({ type: 'DELETE_DEVICE_ERR', err })
//       })
    // firestore.collection('devices').doc(`${device.id}`).get()
    // let docToDelete = firestore.collection('devices').where(firestore.FieldPath.documentId(), '==', `${device.id}`).get()
    // console.log(docToDelete)
    // }).catch(err => console.log(err))
    // .delete().then(() => {
    //   dispatch({ type: 'DELETE_DEVICE', device })
    // }).catch((err) => {
    //   dispatch({ type: 'DELETE_DEVICE_ERR', err })
    // })
//   }
// }