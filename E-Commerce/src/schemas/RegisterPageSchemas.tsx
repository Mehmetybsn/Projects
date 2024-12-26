import * as yup from 'yup'

export const RegisterPageSchema = yup.object().shape({
    username: yup.string().required("Kullanıcı adını giriniz"),
    password: yup.string().required("Şifre alanı boş olamaz")
})