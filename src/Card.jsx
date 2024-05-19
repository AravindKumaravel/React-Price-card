import React from 'react';

function Card({data}){
    return <>


<div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
            <h6 className="card-price text-center">{data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={data.usershow?"":"text-muted"}><span className="fa-li"><i className={data.usershow?"fas fa-check":"fas fa-times"}></i></span>{data.user}</li>
              <li className={data.stroageshow?"":"text-muted"}><span className="fa-li"><i className={data.stroageshow?"fas fa-check":"fas fa-times"}></i></span>{data.stroage}</li>
              <li className={data.publicshow?"":"text-muted"}><span className="fa-li"><i className={data.publicshow?"fas fa-check":"fas fa-times"}></i></span>{data.public_project}</li>
              <li className={data.accessshow?"":"text-muted"}><span className="fa-li"><i className={data.accessshow?"fas fa-check":"fas fa-times"}></i></span>{data.access}</li>
              <li className={data.privateshow?"":"text-muted"}><span className="fa-li"><i className={data.privateshow?"fas fa-check":"fas fa-times"}></i></span>{data.private_project}</li>
              <li className={data.supportshow?"":"text-muted"}><span className="fa-li"><i className={data.supportshow?"fas fa-check":"fas fa-times"}></i></span>{data.support}</li>
              <li className={data.subdomainshow?"":"text-muted"}><span className="fa-li"><i className={data.subdomainshow?"fas fa-check":"fas fa-times"}></i></span>{data.subdomain}</li>
              <li className={data.reportsshow?"":"text-muted"}><span className="fa-li"><i className={data.reportsshow?"fas fa-check":"fas fa-times"}></i></span>{data.status_reports}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    
    </>
}

export default Card;