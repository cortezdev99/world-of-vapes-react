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