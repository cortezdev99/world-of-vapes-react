const initState = {
  juices: [
    {id: '1', brand: 'Naked', descript: 'blah blah blah', flavor1: 'Pineapple', flavor2: 'Mango', flavor3: 'Berry'},
    {id: '2', brand: 'Ripe', descript: 'blah blah blah', flavor1: 'Cherry', flavor2: 'Shortcake', flavor3: 'Choc Cookie'},
    {id: '3', brand: 'Cloud', descript: 'blah blah blah', flavor1: 'Churros', flavor2: 'Pink Starburst', flavor3: 'Smores'}
  ]
}

const juiceReducer  = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_JUICE':
      console.log('created juice', action.juice)
  }
  return state
}

export default juiceReducer