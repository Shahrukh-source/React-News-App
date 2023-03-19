import React from 'react';

export default function NewsItem (props) {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div className="card" >
  <img src={props.pic} height="140px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title.slice(0,70)+"..."}</h5>
    <h6 className="card-source bg-secondary text-light">{props.source} - {`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()}/${new Date(props.date).getFullYear()}`}  </h6>
    <p className="card-text">{props.description.slice(0,200)+".."}</p>
    <a href={props.url} className="btn btn-dark w-100 btn-sm">Read Full Article</a>
  </div>
</div>
            </div>
        );
    }


