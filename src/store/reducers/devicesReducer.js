const initState = {
  devices: [
    {id: '1', brand: 'SnowWolf', deviceTitle: 'wocket', descript: 'blah blah blah', color1: 'red', color2: 'gold', color3: 'blue'},
    {id: '2', brand: 'Voopoo', deviceTitle: 'Nord', descript: 'blah blah blah', color1: 'red', color2: 'gold', color3: 'blue'},
    {id: '3', brand: 'juul', deviceTitle: 'juul', descript: 'blah blah blah', color1: 'red', color2: 'gold', color3: 'blue'}
  ]
}

const devicesReducer  = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_DEVICE':
      console.log('created device', action.device)
      return state;
    case 'CREATE_DEVICE_ERR':
      console.log('create device error', action.err);
      return state;
    default:
      return state;
  }
}

export default devicesReducer