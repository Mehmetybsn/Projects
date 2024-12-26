import React from 'react'
import "../css/RegisterPage.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { RegisterPageSchema } from '../schemas/RegisterPageSchemas';
import RegisterPageService from '../services/RegisterPageService';
import { UserType } from '../Types/Types';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

  const navigate = useNavigate()

  const submit = async (values:any, action:any) => {
    try {
      const payload: UserType = {
        username: values.username,
        password: values.password,
        balance: 1000
      }
      const response = await RegisterPageService.register(payload)
      if(response) {
        clear()
        toast.success("Kullanıcı kaydedildi")
        navigate("/login")
      }
    } catch (error) {
      toast.error("Kullanıcı kaydedilirken bir hata oluştu")
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
    <div className='register'>
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
              <Button type= "submit" size='small' variant='contained' color='info'>Kaydol</Button>
              <Button onClick={clear} size='small' variant='contained'  sx={{marginLeft:"10px", backgroundColor:"#CDA735"}}>Temizle</Button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default RegisterPage