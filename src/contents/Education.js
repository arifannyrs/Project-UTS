import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Politeknik Negeri Malang" where="Teknik Informatika" from="2017" to="Present"/>
            <Widecard title="SMAN 2 Kota Mojokerto" where="IPS" from="2014" to="2017"/>
            <Widecard title="SMPN 3 Tulungagung" where="" from="2011" to="2014"/>
            </div>
            )
        }
    }
    
export default Education