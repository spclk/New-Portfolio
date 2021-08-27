import React from 'react'

const Project = ({id, name, about, url, skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-5 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            <h6>{about}</h6>
            <br/>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
            <br/>
            <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-secondary"><i class="fab fa-github"></i></button> 
            <button type="button" className="btn btn-secondary"><i class="fas fa-external-link-alt"></i></button>
            </div>
        </div>

        
    )
}

export default Project
