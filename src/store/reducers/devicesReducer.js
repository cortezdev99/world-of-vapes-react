const initState = {
  devices: [
    {id: '1', brand: 'SnowWolf', brandName: 'wocket', descript: 'blah blah blah', color1: 'red', color2: 'gold', color3: 'blue'},
    {id: '2', brand: 'Voopoo', brandName: 'Nord', descript: 'blah blah blah', color1: 'red', color2: 'gold', color3: 'blue'},
    {id: '3', brand: 'juul', brandName: 'juul', descript: 'blah blah blah', color1: 'red', color2: 'gold', color3: 'blue'}
  ]
}

const authReducer  = (state = initState, action) => {
  return state
}

export default authReducer