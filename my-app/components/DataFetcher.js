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
        console.log('Fetched Projects:', result);
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
    <div style={{ padding: '10px', backgroundColor: 'blue' }}>
      {projects.map((project) => (
        <div key={project._id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}


const query = `*[_type == "projects"]{
    title,
    description
  }`;