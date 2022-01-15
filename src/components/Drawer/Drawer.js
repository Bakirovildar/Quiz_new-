import React, {Component} from 'react'
import classes from './Drawer.css'
import BackDrop from "../UI/BackDrop/BackDrop";

const lists = [
    1, 2, 3
]

class Drawer extends Component {

    renderLi() {
        return lists.map((list, index) => {
            return (
                <li key={index}>
                    <a>list {list}</a>
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