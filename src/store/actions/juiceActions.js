export const createJuice = (juice) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    dispatch({ type: 'CREATE_JUICE', juice})
  }
}