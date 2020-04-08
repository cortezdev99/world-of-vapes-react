export const createJuice = (juice) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('juices').add({
      ...juice
    }).then(() => {
      dispatch({ type: 'CREATE_JUICE', juice })
    }).catch((err) => {
      dispatch({ type: 'CREATE_JUICE_ERR', err })
    })
  }
}