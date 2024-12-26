import "../css/RegisterPage.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { RegisterPageSchema } from '../schemas/RegisterPageSchemas';
import "../css/LoginPage.css"
import LoginPageService from "../services/LoginPageService";
import { useDispatch } from "react-redux";
import { setCurrentUser, setLaoding } from "../redux/AppSlice";
import { UserType } from "../Types/Types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface CheckUserType {
  result: boolean,
  currentUser: UserType | null
}

function LoginPage() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const checkUser = (userList: UserType[], username: string, password: string) :CheckUserType => {
    const response: CheckUserType = {
      result: false, currentUser: null
    }
    userList.forEach((user: UserType)=>{
      if(user.username === username && user.password === password) {
        response.result = true
        response.currentUser = user
      }
    })

    return response
  }

  const submit = async (values: any, action: any) => {
    try {
      dispatch(setLaoding(true))
      const response: UserType[] = await LoginPageService.login()
      if(response) {
        const checkUserResponse: CheckUserType = checkUser(response, values.username, values.password)
        if(checkUserResponse.result && checkUserResponse.currentUser) {
          dispatch(setCurrentUser(checkUserResponse.currentUser))
          localStorage.setItem("currentUser", JSON.stringify(checkUserResponse.currentUser))
          navigate("/")
        } else {
          toast.error("Kullanıcı adı veya şifre hatalı")
        }
      }
    } catch (error) {
      toast.error("Giriş yapılırken hata oluştu" + error)
    } finally {
      dispatch(setLaoding(false))
    }
  }

  const {values, errors, handleChange, handleSubmit, resetForm} = useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      onSubmit: submit,
      validationSchema: RegisterPageSchema
    });

    const clear = () => {
      resetForm()
    }

  return (
    <div className='login'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-div'>
            <TextField
            sx={{ width:"300px", marginBottom:"25px"}}
            id="username"
            placeholder="Kullanıcı Adı"
            value={values.username}
            onChange={handleChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <IoPersonCircleSharp />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
            helperText = {errors.username && <span className='errors'> {errors.username} </span>}
            />

            <TextField
            sx={{ width:"300px", marginBottom:"25px"}}
            id="password"
            type='password'
            placeholder="Şifre"
            value={values.password}
            onChange={handleChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
            helperText= {errors.password && <span className='errors'> {errors.password} </span> }
            />
            <div >
              <Button type= "submit" size='small' variant='contained' color='info'>Giriş Yap</Button>
              <Button onClick={clear} size='small' variant='contained'  sx={{marginLeft:"10px", backgroundColor:"#CDA735"}}>Temizle</Button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default LoginPage