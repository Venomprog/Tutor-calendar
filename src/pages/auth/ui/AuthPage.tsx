import { HeadingThirdLevel } from "src/shared/headings/ui/Headings"
import '../styles/index.scss'
import { MainButton } from "src/shared/buttons/ui/Buttons"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type Inputs = {
  emailRequired: string
  passwordRequired: string
}

const AuthPage = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) =>{

    if (data.emailRequired === 'username@mail.ru' && data.passwordRequired === 'test'){
      navigate('../calendar')
    } else {
      console.log('wrong data')
    }
  } 
  

  return (
    <div className="auth-page">
      <div className="auth-page__inner">
        <div className="auth-page__title">
          <HeadingThirdLevel text="Войдите в аккаунт"/>
        </div>
        <form className="auth-page__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-page__form-inner">
            <input 
              type="text" 
              className="auth-page__form-input" 
              placeholder="Введите ваш email"
              {...register('emailRequired', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {/* errors will return when field validation fails  */}
            {errors.emailRequired && <span role="alert" className="auth-page__form-error">{errors.emailRequired.message}</span>}
            <input 
              type="password" 
              className="auth-page__form-input" 
              placeholder="Введите ваш пароль"
              {...register("passwordRequired", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.passwordRequired && <span className="auth-page__form-error">This field is required</span>}
            <div className="auth-page__form-button">
              <MainButton type="submit" text="Войти"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthPage