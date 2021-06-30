import InformationContainer from "./InformationContainer"

export default function Flight({endDate, checkOutTime, name, address}) {
  return ( 
   <>
        <InformationContainer
          icon="🏨"
          upperDescription={`${endDate} ${checkOutTime}`}
          lowerDescription={`${name}, ${address}`}
        />
    </> 
  )    
}