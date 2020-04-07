export const createGlass = (glass) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_GLASS', glass})
  }
}