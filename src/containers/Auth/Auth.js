import React from 'react'
import classes from './Auth.css'
import Button from "../../components/UI/Button/Button";


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
                        <input type="text"/>
                        <input type="text"/>

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