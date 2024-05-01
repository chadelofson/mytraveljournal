import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.item.imageUrl} alt={props.item.title} />
            {/*<div className="card--image">Image</div>*/}
            <div className="card--details">
                <div className="card--location">
                    <div>
                        <FontAwesomeIcon className="card--icon" icon={faLocationDot} /><span className="card--destination">{ ` ${props.item.location}` }</span>
                    </div>
                    <a className="card--maplink" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <h3 className="card--dates">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>    
    )
}