import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(){
        super()
        this.state ={
            search: ""
        }
    }
    getData(e){
        this.setState({ search:e.target.value})
    }
    postData(e){
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({search:""})
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-success sticky-top ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to="#">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item text-light">
                                    <Link className="nav-link active text-light" aria-current="page" to="/" >ALL</Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Politics">Politics</Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Sports">Sports</Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Weather">Weather </Link>
                                </li>
                                <li className="nav-item text-light">
                                    <Link className="nav-link text-light" to="/Foreign">Foreign</Link>
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
                                        <li><Link className="dropdown-item" to="/Local News">Local News</Link></li>
                                        <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/Health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/lifestyle">lifestyle</Link></li>
                                        <li><Link className="dropdown-item" to="/World News">World News</Link></li>
                                        <li><Link className="dropdown-item" to="/Games">Games</Link></li>
                                        <li><Link className="dropdown-item" to="/Comedy">Comedy</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                       Language
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item text-center bg-secondary text-light" onClick={()=> this.props.changeLanguage("hi")}>Hindi</button></li>
                                        <li><button className="dropdown-item text-center bg-secondary text-light" onClick={()=> this.props.changeLanguage("en")}>English </button></li>
                                 
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e)=>this.postData(e)}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>this.getData(e)} value={this.state.search} />
                                <button className="btn btn-outline-success text-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;