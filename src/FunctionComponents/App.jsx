import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Foot from './Foot'
import Home from './Home'
import Navbar from './Navbar'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            language:"hi",
            search:""
        }
    }
    changeLanguage = (data)=>{
        this.setState({language:data})
    }
    changeSearch =(data)=>{
        this.setState({search:data})
    }
    render() {
        return (
            <>
                 <BrowserRouter>
                    <Navbar changeLanguage={this.changeLanguage} changeSearch={this.changeSearch}/>
                    <Routes>
                        <Route path='' element={<Home search={this.state.search} language={this.state.language} q="All" />} />
                        <Route path='Politics' element={<Home search={this.state.search} language={this.state.language} q= "Politics" />} />
                        <Route path='Sports' element={<Home search={this.state.search} language={this.state.language} q= "Sports" />} />
                        <Route path='Weather' element={<Home search={this.state.search} language={this.state.language} q= "Weather" />} />
                        <Route path='Foreign' element={<Home search={this.state.search} language={this.state.language}q= "Foreign" />} />
                        <Route path='Current News' element={<Home search={this.state.search} language={this.state.language} q= "Current News" />} />
                        <Route path='Crime' element={<Home search={this.state.search} language={this.state.language} q= "Crime" />} />
                        <Route path=' Others' element={<Home search={this.state.search} language={this.state.language} q= " Others" />} />
                        <Route path='Local News' element={<Home search={this.state.search} language={this.state.language} q= "Local News" />} />
                        <Route path='Business ' element={<Home search={this.state.search} language={this.state.language} q= "Business " />} />
                        <Route path='Technology' element={<Home search={this.state.search} language={this.state.language} q= "Technology" />} />
                        <Route path='Science' element={<Home search={this.state.search} language={this.state.language} q= "Science" />} />
                        <Route path='Health' element={<Home search={this.state.search} language={this.state.language} q= "Health" />} />
                        <Route path='lifestyle' element={<Home search={this.state.search} language={this.state.language} q= "lifestyle" />} />
                        <Route path='World News' element={<Home search={this.state.search} language={this.state.language} q= "World News" />} />
                        <Route path='Games' element={<Home search={this.state.search} language={this.state.language} q= "Games" />} />
                        <Route path='Comedy' element={<Home search={this.state.search} language={this.state.language} q= "Comedy" />} />
                    </Routes>
                </BrowserRouter>
                <Foot />
            </>
        )
    }
}


