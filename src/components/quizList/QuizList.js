import React from 'react'
import classes from './QuizList.css'


const QuizList = props => {

    let lists = [
        {
            path: 'quiz-list/list1',
            id: 1,
            nameList: '1test'
        },
        {
            path: 'quiz-list/list2',
            id: 2,
            nameList: '2test'
        },
        {
            path: 'quiz-list    /list3',
            id: 3,
            nameList: '3test'
        }
    ]

    return (
        <div className={classes.QuizList}>
            <h1>QuizList</h1>
            <ul>
                {lists.map(list => {
                    return (
                        <li><a href={'/quiz/' + list.id}>{list.nameList}</a></li>
                    )
                })}

            </ul>
        </div>
    )
}

export default QuizList