"use client";

import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url';
import '../app/globals.css';


const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}


export default function DataFetcher() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await client.fetch(`*[_type == "projects"]`);
        // console.log('Fetched Projects:', result);
        setProjects(result);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '.5rem', paddingTop: '100px', maxWidth: '1200px', margin: 'auto'}}>
      {projects.map((project) => (
        <div key={project._id} className='project'>

{project.image && (
            <img
              src={urlFor(project.image).width(1200).url()}
              alt={project.title}
              style={{ maxWidth: '100%', height: 'auto', marginBottom: '1.5rem', }}
            />
          )}

          <h1>{project.title}</h1>
          <p>{project.date}</p>
          <p style={{marginTop: '1.5rem', color: '#999'}}>{project.description}</p>

        </div>
      ))}
    </div>
  );
}


const query = `*[_type == "projects"]{
    title,
    description,
    date
  }`;