import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div>
       <div className="card">
                <div className="top">
                    <img src="https://imgs.search.brave.com/q2XY_rhvQllT_O71D56vCvTV5IXYqcQ3olX_37OGRWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9hbWF6b24t/aWNvbi5wbmc"></img>
                    <div>
                    <button>Save<Bookmark /></button>
                    </div>
                    <div className="center">
                      <h3>Amazon<span>5 days ago</span></h3>
                      <h2>Senior Bhaii</h2>
                      <div><h4>Part time</h4>
                      <h4>Damnnn</h4></div>
                    </div>
                    <div className="bottom">
                      <div>
                        <h3>$123/hr</h3>
                        <p>OOHHH</p>
                      </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card
