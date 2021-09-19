import { FC, useState } from 'react'
import './Auth.scss'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const SignUp: FC<any> = () => {
  const [firsName, setFirsName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword] = useState<string>('')

  let history = useHistory()

  const clickSubmitHandler = (e: any) => {
    // signIn({ login, password })

    setPassword('')
  }

  const clickSwitchHandler = (e: any) => {
    history.push('/signin')
  }

  return (
    <section className="auth">
      <div className="auth__content">
        <header className="auth-header">
          <h1 className="auth-header__title">Регистрация</h1>
        </header>
        <form className="auth-form form-group">
          <div className="form-group firstname">
            <label className="form-group__label">ИМя</label>
            <input
              className="form-group__input"
              onChange={(e) => setFirsName(e.target.value)}
              value={firsName}
              type="text"
              name="firstName"
              // placeholder="Логин"
            />
          </div>
          <div className="form-group lastName">
            <label className="form-group__label">ФАМИЛИЯ</label>
            <input
              className="form-group__input"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              name="lastName"
              // placeholder="Логин"
            />
          </div>
          <div className="form-group email">
            <label className="form-group__label">Почта</label>
            <input
              className="form-group__input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              name="email"
              autoComplete="email"
              aria-invalid="true"
              // placeholder="Почта"
            />
          </div>
          <div className="form-group login">
            <label className="form-group__label">ЛОГИН</label>
            <input
              className="form-group__input"
              onChange={(e) => setLogin(e.target.value)}
              value={login}
              type="text"
              autoComplete="username"
              name="username"
              // placeholder="Логин"
            />
          </div>
          <div className="form-group password">
            <label className="form-group__label">ПАРОЛЬ</label>
            <input
              className="form-group__input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              autoComplete="new-password"
              name="new-password"
              // placeholder="Пароль"
            />
          </div>
          <div className="form-group repassword">
            <label className="form-group__label">ПОДТВЕРЖДЕНИЕ ПАРОЛЯ</label>
            <input
              className="form-group__input"
              onChange={(e) => setRePassword(e.target.value)}
              value={rePassword}
              type="password"
              name="password-confirm"
              // placeholder="Повторите Пароль"
            />
          </div>
          <div className="form-group captcha">
            <div>тут капча</div>
          </div>

          <div className="form-group submit">
            <button onClick={clickSubmitHandler} className="form-group__submit" type="button">
              Регистрация
            </button>
          </div>
        </form>
        <footer className="auth-footer">
          <span className="auth-footer__title">Имеется аккаунт!?</span>
          <button onClick={clickSwitchHandler} className="auth-footer__button">
            Войти
          </button>
        </footer>
      </div>
    </section>
  )
}

export default SignUp
