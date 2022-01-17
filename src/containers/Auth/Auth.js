import React from 'react'
import classes from './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";


class Auth extends React.Component {

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    submitHandler(event) {
        event.preventDefault()
    }

    render() {
        return (
            <div className={classes.Home}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input type={'text'} label={"Email"}/>
                        <Input
                            type={'text'}
                            label={"Пароль"}


                        />

                        <Button type="success" onClick={this.loginHandler}>
                            Войти
                        </Button>

                        <Button type="success" onClick={this.registerHandler}>
                            Регистрация
                        </Button>
                    </form>
                </div>
            </div>
        )
    }

}

export default Auth