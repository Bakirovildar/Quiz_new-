import React, {Component} from 'react'
import classes from './Drawer.css'
import BackDrop from "../UI/BackDrop/BackDrop";


const lists = [
    {path: 'quiz-list', name: 'Список тестов'},
    {path: 'home', name: 'Авторизация'},
    {path: 'settings', name: 'Создание теста'}
]

class Drawer extends Component {

    renderLi() {
        return lists.map((list, index) => {
            return (
                <li key={index}>
                    <a href={'/' + list.path}>{list.name}</a>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]


        if (!this.props.isOpen) {
            cls.push(classes.close)
        } else {
        }
        return (

            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLi()}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClick}/> : ''}
            </React.Fragment>

        )
    }

}

export default Drawer