/**
 * Action type
 */
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECRENENT'

/**
 * Action creator 
 */
export const increment = () => ({
    type: INCREMENT
})
  
export const decrement = () => ({
    type: DECREMENT
})
