import InformationContainer from "./InformationContainer"

export default function Flight({startDate, checkInTime, name, address}) {
  return ( 
   <>
        <InformationContainer
          icon="🏨"
          upperDescription={`${startDate} ${checkInTime}`}
          lowerDescription={`${name}, ${address}`}
        />
    </> 
  )    
}