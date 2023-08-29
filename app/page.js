import ProjectCard from "@/components/ProjectCard";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  const projects = [
    {
      id: "1",
      title: "Project 1",
      description: "This is a project",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    },
    {
      id: "2",
      title: "Project 1",
      description: "This is a project",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    },
    {
      id: "3",
      title: "Project 1",
      description: "This is a project",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    },
    {
      id: "4",
      title: "Project 1",
      description: "This is a project",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",
    },
  ];

  const Hero = () => {
    return (
      <div className="flex md:flex-row-reverse flex-col items-center justify-center gap-4 mt-10 md:mt-40">
        <img
          className="p-1 rounded-full ring-2 ring-gray-300"
          style={{
            width: "350px",
            height: "350px",
            objectFit: "cover",
          }}
          src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
          alt="Developer profile image"
        />
        <div className="flex flex-col gap-4 md:w-2/3">
          <p className="text-3xl md:text-5xl font-bold md:text-left text-center">
            Hello , I'm <span className="text-blue-500">John Doe</span>. I am a{" "}
            <span className="text-blue-500">Web Developer</span>.
          </p>
          <p className="text-gray-500 text-lg md:text-left text-center">
            I am a web developer with 5 years of experience and I write about
            web development on my blog.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              <a href="mailto:youremailhere" target="_blank">Contact Me</a>
            </button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md">
              <a href="https://www.africau.edu/images/default/sample.pdf">Download CV</a>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Projects = () => {
    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-40">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div
          className="flex mt-20 flex-wrap justify-center md:justify-start"
          style={{
            gap: "1rem",
          }}
        >
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    );
  };

  const About = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 mt-10 md:mt-40">
        <img
          src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
          alt="Developer profile image"
          style={{
            height: "500px",
            objectFit: "cover",
            width: "100%",
          }}
          className="rounded-md"
        />
        <div className="flex flex-col gap-4 md:w-2/3 md:ml-4 mt-20 md:mt-10">
          <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
          <p className="text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia voluptas quod quos
            reprehenderit quas voluptatibus quidem dolorum. Quisquam voluptatum,
          </p>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">
            Download CV
          </button>
        </div>
      </div>
    );
  };

  const Testimonials = () => {
    const examples = [
      {
        image:
          "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
        name: "John Doe",
        quote: "An excellent developer who does a great job at all times.",
        position: "CEO at Google",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
        name: "John Doe",
        quote: "An excellent developer who does a great job at all times.",
        position: "CEO at Google",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
        name: "John Doe",
        quote: "An excellent developer who does a great job at all times.",
        position: "CEO at Google",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
        name: "John Doe",
        quote: "An excellent developer who does a great job at all times.",
        position: "CEO at Google",
      },
      {
        image:
          "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
        name: "John Doe",
        quote: "An excellent developer who does a great job at all times.",
        position: "CEO at Google",
      },
    ];

    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-40">
        <h1 className="text-5xl font-bold">What My Clients Say</h1>
        <div
          className="flex mt-20 flex-wrap justify-center"
          style={{ gap: "1rem" }}
        >
          {examples.map((example, index) => {
            return <Testimonial key={index} {...example} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <main
      className="min-h-screen mt-40"
      style={{
        maxWidth: "80%",
        margin: "auto",
        marginTop: "10rem",
      }}
    >
      <Hero />
      <Projects />
      <About />
      <Testimonials />
    </main>
  );
}
