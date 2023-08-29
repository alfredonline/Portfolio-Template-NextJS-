"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "1",
    title: "Project 1",
    description: "This is a project",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",

    longDescription: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, `,
  },
  {
    id: "2",
    title: "Project 1",
    description: "This is a project",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    longDescription: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, `,
  },
  {
    id: "3",
    title: "Project 1",
    description: "This is a project",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    longDescription: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, `,
  },
  {
    id: "4",
    title: "Project 1",
    description: "This is a project",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    longDescription: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, lorem ipsum dolor sit amet, consectetur adipiscing elit. Done etiam etiam, nisl, `,
  },
];

const page = ({ params }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = (id) => {
      setProject(projects.find((p) => p.id === id));
    };

    if (params?.id) loadProject(params.id);
  }, [params?.id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <img
        src={project?.image}
        alt={project?.title}
        style={{
          height: "300px",
          width: "500px",
        }}
        className="rounded-lg object-cover"
      />
      <h1 className="text-4xl font-bold mt-10 text-center text-gray-900">
        {project?.title}
      </h1>
      <p className="mt-10 text-lg text-gray-600 text-left max-w-2xl">
        {project?.longDescription}
      </p>
      <div className="flex flex-row mt-10 gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Github
        </button>
        <button
          className="bg-white border text-black font-bold py-2 px-4 rounded"
          style={{
            borderColor: "#e2e8f0",
            borderWidth: "1px",
          }}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default page;
