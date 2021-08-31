import React from 'react'

const Project = ({id, name, about, url, deployed, skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-5 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name d-flex justify-content-center" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            <p>{about}</p>
            <br/>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
            <br/>
            <div className="d-flex justify-content-center">
            <a rel="noopener noreferrer" target="_blank" href={url} className="btn ref" ><i class="fab fa-github"></i></a>
            <a rel="noopener noreferrer" target="_blank" href={deployed} className="btn ref"><i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>

        
    )
}

export default Project
