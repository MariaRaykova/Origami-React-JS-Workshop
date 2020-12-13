import React, { Component } from 'react'
import styles from './index.module.css'
import Origami from '../origami'

class Posts extends Component {

    constructor(props) {
        super(props)

        this.state = { //инициализираме си стейта 
            origamis: [] //има оригамис празен масив по дефолт
        }
    }
    getOrigamis = async () => {
        const { length } = this.props
        const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`) //await-ваме самия фетч, изчакваме да имаме респонс и след това го закачаме на стейта 
        const origamis = await promise.json() //фетча връща промис и ние трябва да вземем респонса
        this.setState({
            origamis //но нямаме сет Стейт още за това правим и конструктора
        })
    }
    componentDidMount() {
        this.getOrigamis(this.props) //след като дойде целия рекуест ъпдейтваме оригамито
    }
    renderOrigamis() {
        const { origamis } = this.state

        return origamis.map((origami, index) => {
            return (
                <Origami key={origami._id} index={index} {...origami} /> //тук вече ще подадем key-я и ще му върнем вс пропъртита надолу
            )
        })
    }

    render() {
        return (
            <div className={styles.posts}>
                {this.renderOrigamis()}
            </div>
        )
    }
}

export default Posts;
