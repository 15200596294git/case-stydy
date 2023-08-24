
export const stopPropagation = (event: Event)=> event.stopPropagation()

export const preventDefault = (event: Event, isStopPropagation?: boolean)=> {
  if(typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if(isStopPropagation) {
    stopPropagation(event)
  }
}
