import { LeftBar } from "../../leftheader/LeftBar"
import MySearch from '../../Search/MySearch'
import { useTranslation } from 'react-i18next';
export function Section1(){
    return(
        <>
            <div className="d-flex container align-items-center justify-content-between flex-wrap">
                <div className="col-xs-12 col-md-6 "><LeftBar/></div>
                <div className=" mt-3  col-md-6 col-xl-auto"> <MySearch/></div>
            </div>
        </>
    )
}