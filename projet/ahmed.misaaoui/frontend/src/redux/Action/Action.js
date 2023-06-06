import axios from 'axios'
import { FAIL, GET, GET_CURRENT, LOG_IN, LOG_OUT, REGISTER } from '../ActionType/ActionType'
import { alert_error } from './ErrorAction'


export const login =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/user/login',data)
        dispatch({
            type:LOG_IN,
            payload:res.data
        })
        console.log(res.data)
        navigate("/Profile")
    } catch (error) {
        error.response.data.errors?.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
        }
    }


export const register =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/user/',data)
        dispatch({
            type:REGISTER,
            payload:res.data
        })
        navigate('/Profile')
    } catch (error) {
        error.response.data.errors.forEach((el) => {
            dispatch(alert_error(el.msg));
          });
          dispatch({ type: FAIL, payload: error.response.data });
        }
}

export const getCurrent= ()=>async(dispatch)=>{
   const config = {
    headers: {
        token: localStorage.getItem("token"),
      },
   }
    try {
        const res = await axios.get("/user/get",config)
        dispatch({
            type:GET_CURRENT,
            payload:res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const logout=()=>{
    return ({type:LOG_OUT})

}
export const update_user=(id,data)=>async(dispatch)=>{
    try {
        const res=await axios.put('/user/update/'+id,data)
        dispatch(getCurrent())
    } catch (error) {
        console.log(error)
    }
}
export const getuser=()=>async(dispatch)=>{
    try {
        const res=await axios.get('/user/getmany')
        dispatch({type:GET,payload:res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}
export const deleteuser=(id,data)=>async(dispatch)=>{
    try {
        const res=await axios.delete('/user/deleteuser/'+id,data)
        dispatch(getCurrent())
    } catch (error) {
        console.log(error)
    }
}


