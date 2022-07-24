import styles from './Advertise.module.css'
export function AdvertiseReuse({styling}){
    let stylingAdvertise={
        height:styling.height
    }
    return(
        <>
            <div className="border  mt-5  bg-light w-100" style={stylingAdvertise}>  
            </div>
          
        </>
    )
}