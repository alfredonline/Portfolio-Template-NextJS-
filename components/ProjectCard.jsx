import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
    >
      <img
        className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={project.image}
        alt={project.title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal md:p-8">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {project.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{project.description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
