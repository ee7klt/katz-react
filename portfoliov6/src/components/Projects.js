import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
    const {title, image, description, link} = props.project;
return(
      <div style={{display : 'inline-block', width: 300, margin: 10}}>
      <h2>{title}</h2>
      <img src={image} style = {{width: 200, height: 120}}/>
      <p>{description}</p>
      <a href={link}>More...</a>
      </div>
    )


}


const Projects = () =>   (
      <div >
        <h2>Highlighted Projects</h2>
        <div>
          {
            PROJECTS.map(PROJECT => (
                <Project key={PROJECT.id} project={PROJECT}/>
              )
            )
          }
        </div>
      </div>
    )




export default Projects;