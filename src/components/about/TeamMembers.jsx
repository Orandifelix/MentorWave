import React from 'react';
import "./aboutus.css"
import { teamMembers } from '../../data';

function TeamMembers() {

  return (
    <div className='ui raised segment' style={{backgroundColor:"#f7f3fe"}}>
      <h2 className='ui centered header'>Our Team</h2>
    <div className="ui four doubling stackable padded cards segment"style={{backgroundColor:"#f7f3fe"}}>
        {teamMembers.map((member, index) => (
          <div key={index} className="ui card" style={{backgroundColor:"#f7f3fe"}}>
            <div className='card content'>
              <div className='ui flex container custom-flex-container'>
            <img src={member.image} className='ui medium circular image' id='custom-image'/>
            <h2 className='custom-h2'>{member.name}</h2>
            <h4>{member.role}</h4>
            </div>
            </div>
            <p className="card content">{member.background}</p>
          </div>
        ))}
        </div>
    </div>
  );
}

export default TeamMembers;
