import Mock from 'mockjs'
import modules from './slides'
import headline from './headline'
import board from './board'
import supersale from './super_sale'
import shops from './shop_list'

// modules
Mock
  .mock('/banner', 'get', () => {
    return {
      code: 200,
      data: modules
    }
  })

  // headline
  .mock('/advertising', 'get', () => {
    return {
      code: 200,
      data: headline
    }
  })

  // activity
  .mock('/activity', 'get', () => {
    return {
      code: 200,
      data: board
    }
  })

  // super_sale
  .mock('/supersale', 'get', () => {
    return {
      code: 200,
      data: supersale
    }
  })

  // shops
  .mock('/shops', 'get', () => {
    return {
      code: 200,
      data: shops
    }
  })
