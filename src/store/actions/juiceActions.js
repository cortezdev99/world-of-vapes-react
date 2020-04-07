export const createJuice = (juice) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_JUICE', juice})
  }
}