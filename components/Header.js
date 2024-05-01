import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
    return (
        <header className="header">
            <FontAwesomeIcon className="header--icon" icon={faEarthAmericas} />&nbsp;
            <h1 className="header--title">my travel journal</h1>
        </header>
    )
}