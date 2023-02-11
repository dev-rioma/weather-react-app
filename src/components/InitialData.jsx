
const InitialData = (props) => {
  let Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  let months = ['January', 'February', 'March', 'April',' May', 'June', 'July', 'August', 'September', 'October',' November', 'December' ]

    let day = Days[props.date.getDay()]
    let hours = props.date.getHours()
    let minutes = props.date.getMinutes()
    let month = months[props.date.getMonth()]
    let year = props.date.getFullYear()
    let datyUTC = props.date.getUTCDate()

    if (minutes < 10){
      minutes = `0${minutes}`
    }
  return (
    <div>
      <h5>{datyUTC}-{month}-{year} <br/> {day} {hours}:{minutes}</h5>
    </div>
    
  )
}

export default InitialData