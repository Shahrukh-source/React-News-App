import React, { useState } from 'react';

import { Link } from 'react-router-dom';
export default function Navbar(props){
  var [search,setsearch] = useState("")
   function getData(e){
        setsearch(e.target.value)
    }
   function postData(e){
        e.preventDefault()
        props.changeSearch(search)
        this.setState({search:""})
    }
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-success sticky-top ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="#" onclick={()=> props.changesearch("")}>NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item text-light">
                                    <Link className="nav-link active text-light" aria-current="page" to="/" >ALL</Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Politics" onclick={()=> props.changesearch("")}>Politics</Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Sports" onclick={()=> props.changesearch("")}>Sports</Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Weather" onclick={()=> props.changesearch("")}>Weather </Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Foreign" onclick={()=> props.changesearch("")}>Foreign</Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Current News">Current News</Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Crime">Crime</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Others
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Local News" onclick={()=> props.changesearch("")}>Local News</Link></li>
                                        <li><Link className="dropdown-item" to="/Technology" onclick={()=> props.changesearch("")}>Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/Science" onclick={()=> props.changesearch("")}>Science</Link></li>
                                        <li><Link className="dropdown-item" to="/Health" onclick={()=> props.changesearch("")}>Health</Link></li>
                                        <li><Link className="dropdown-item" to="/lifestyle" onclick={()=> props.changesearch("")}>lifestyle</Link></li>
                                        <li><Link className="dropdown-item" to="/World News" onclick={()=> props.changesearch("")}>World News</Link></li>
                                        <li><Link className="dropdown-item" to="/Games" onclick={()=> props.changesearch("")}>Games</Link></li>
                                        <li><Link className="dropdown-item" to="/Comedy" onclick={()=> props.changesearch("")}>Comedy</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Language
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item text-center bg-secondary text-light" onClick={()=> props.changeLanguage("hi")}>Hindi</button></li>
                                        <li><button className="dropdown-item text-center bg-secondary text-light" onClick={()=> props.changeLanguage("en")}>English </button></li>
                                 
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e)=> postData(e)}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> getData(e)} value={this.state.search} />
                                <button className="btn btn-outline-success text-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }


