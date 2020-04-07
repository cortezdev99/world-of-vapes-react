export const createDevices = (device) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_DEVICE', device})
  }
}