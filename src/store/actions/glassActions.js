export const createGlass = (glass) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection('glass').add({
      ...glass
    }).then(() => {
      dispatch({ type: 'CREATE_GLASS', glass })
    }).catch((err) => {
      dispatch({ type: 'CREATE_GLASS_ERR', err })
    })
  }
}