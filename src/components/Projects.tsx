import { MoveUpRight } from "lucide-react";

export const Projects = () => {
  type Project = {
    title: string;
    technologies: string[];
    live_url: string;
    github_url: string;
    description: string;
  };
  const projectsData: Project[] = [
    {
      title: "Stack",
      technologies: ["React", "Node.js", "Express.js", "PostgreSQL"],
      live_url: "https://stack-pg.vercel.app",
      github_url: "https://github.com/0xffakhrul/stack-pg",
      description:
        "A web application to store links and websites. Users can tag their resource for better organization.",
    },
    {
      title: "Ticky - Ticket Managament System",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Clerk"],
      live_url: "https://ticky.vercel.app",
      github_url: "https://github.com/0xffakhrul/ticket-management-system",
      description:
        "A ticket management system designed for users to create tickets, track the progress and priority. Users can also leave the comments on the ticket.",
    },
    {
      title: "Todoing - Todo List",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Clerk"],
      live_url: "https://todo-mern-delta.vercel.app",
      github_url: "https://github.com/0xffakhrul/todo-mern",
      description: "A full-stack todo application with a unique color scheme.",
    },
    {
      title: "Jom Solat - Malaysia Prayer Time",
      technologies: ["React", "Jakim API", "Tailwind CSS"],
      live_url: "https://jom-solat.vercel.app/",
      github_url: "https://github.com/0xffakhrul/jom-solat",
      description:
        "A website that display Malaysia's prayer time using JAKIM's API.",
    },
    {
      title: "Run Timer",
      technologies: ["React", "Tailwind CSS"],
      live_url: "https://run-timer-eight.vercel.app/",
      github_url: "https://github.com/0xffakhrul/run-timer",
      description: "A timer for tracking interval running or workout. ",
    },
  ];
  return (
    <div className="space-y-3 py-6">
      <h2 className="text-white font-semibold text-lg">Projects</h2>
      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <div className="space-y-2" key={index}>
            <div className="flex items-center gap-2">
              <h3 className="text-gray-300">{project.title}</h3>
              <a href={project.live_url} target="_blank">
                <MoveUpRight className="text-gray-500 w-4 h-4 hover:text-gray-300 transition-all" />
              </a>
              <a href={project.github_url} target="_blank">
                <img
                  src="./github.svg"
                  alt=""
                  className="h-4 w-4 rounded-full border-none"
                />
              </a>
            </div>
            <div className="text-xs text-gray-300 flex gap-2">
              {project.technologies.map((tech) => (
                <div className="border border-gray-700 rounded-md px-2 py-1">
                  {tech}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
