import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  console.log(props);
  
  return (
    <div>
       <div className="card">
                <div className="top">
                    <img src={props.logo}></img>
                    <div>
                    <button>Save<Bookmark /></button>
                    </div>
                    <div className="center">
                      <h3>{props.company}<span>5 days ago</span></h3>
                      <h2>{props.job}</h2>
                      <div><h4>{props.post}</h4>
                      <h4>Damnnn</h4></div>
                    </div>
                    <div className="bottom">
                      <div>
                        <h3>{props.salary}</h3>
                        <p>OOHHH</p>
                      </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card
