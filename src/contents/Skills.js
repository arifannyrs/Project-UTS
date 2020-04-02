import React, { Component } from 'react'

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['Saya tertarik di bidang Android Studio','Belajar React']
        };
    }

    render() {
        return (
            <div className="condiv skills">
            <h1 className="subtopic">Skill saya</h1>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
        }
    }
    
    export default Skills