import React, { Component } from 'react'
import styles from './index.module.css';


class Origamis extends Component {

    constructor(props) {
        super(props)

        this.state = { //инициализираме си стейта 
            origamis: [] //има оригамис празен масив по дефолт
        }
    }
    getOrigamis = async () => {
        const promise = await fetch('http://localhost:9999/api/origami') //await-ваме самия фетч, изчакваме да имаме респонс и след това го закачаме на стейта 
        const origamis = await promise.json() //фетча връща промис и ние трябва да вземем респонса
        this.setState({
            origamis //но нямаме сет Стейт още за това правим и конструктора
        })
    }
    componentDidMount() {
        this.getOrigamis() //след като дойде целия рекуест ъпдейтваме оригамито
    }
    renderOrigamis(){
        const { origamis } = this.state
        return origamis.map(origami => {
            return (
                <div key={origami._id}>
                    {origami.description}
                </div>
            )
        })}

    render() {
        console.log(this.state.origamis) //да видим всички оригамис
        
        return (
            <main className={styles.main}>
                <h1>Origamis</h1>
                <div className={styles.posts}> 
                  {this.renderOrigamis()}
                </div>
            </main>
        )
    }
}
export default Origamis