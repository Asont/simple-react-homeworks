import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loadingImage from "./bll/assets/loading.gif"

function HW10() {
    const dispatch = useDispatch()
    let loading = useSelector<AppStoreType, boolean>(store => store.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(loading=true))
        setTimeout(()=>{

        }, 3000)
        console.log('loading...')
        dispatch(loadingAC(loading=false))
    };
    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div><img src={loadingImage} alt={""}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
