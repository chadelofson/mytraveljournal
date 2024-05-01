import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"
export default function App() {
    
    const locations = data.map(item => {
        return (
            <Card key={item.title} item={item} />
        )
    })
    
    
    return (
        <main className="main-layout">
            <Header />
            <section className="card--list">
                {locations}            
            </section>
        </main>
    )
}