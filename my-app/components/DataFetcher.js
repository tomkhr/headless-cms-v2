"use client";

import { useState, useEffect } from 'react';
import { client } from '../lib/sanity';

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
    <div style={{ padding: '.5rem', paddingTop: '70px', maxWidth: '1200px', margin: 'auto'}}>
      {projects.map((project) => (
        <div key={project._id} style={{
            backgroundColor: '#171717', 
            margin: '1rem',
            padding: '2rem',
            minHeight: '300px',
            borderRadius: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            border: '1px solid #444',
            }}>
          <h1 style={{color: ''}}>{project.title}</h1>
          <p>{project.date}</p>
          <p style={{marginTop: '1rem', color: '#999'}}>{project.description}</p>
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