const initState = {
  glass: [
    {id: '1', brand: 'Locas', descript: 'blah blah blah', size: 'Large'},
    {id: '2', brand: 'Somethin', descript: 'blah blah blah', size: 'Small'},
    {id: '3', brand: 'Else', descript: 'blah blah blah', size: 'Medium'}
  ]
}

const glassReducer  = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_GLASS':
      console.log('created glass', action.glass)
      return state;
    case 'CREATE_GLASS_ERR':
      console.log('create glass error', action.err);
      return state;
    default:
      return state;
  }
}

export default glassReducer