import anganwadiImg from '../assets/anganwadi.png';
import marksportalImg from '../assets/marksportal.png';

const Projects = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="w-full max-w-4xl space-y-10 flex">
        {/* Project 1 */}
        <div className="p-4 border rounded shadow-sm md:flex gap-6 m-2">
          {/* <img
            src={anganwadiImg}
            alt="Anganwadi Automation"
            className="w-full md:w-1/3 rounded"
          /> */}
          <div>
            <h3 className="text-xl font-semibold mt-4 md:mt-0">Anganwadi Automation System</h3>
            <p className="text-gray-700 mt-2">
              MERN stack-based web application to manage Anganwadi centers with daily tracking,
              vaccine management, messaging, and user roles (Admin, Supervisor, Worker, Beneficiary).
            </p>
            <a
              href="https://github.com/yourusername/anganwadi-automation"
              target="_blank"
              className="text-blue-600 underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-4 border rounded shadow-sm md:flex gap-6 m-2">
          {/* <img
            src={marksportalImg}
            alt="Student Marks Portal"
            className="w-full md:w-1/3 rounded"
          /> */}
          <div>
            <h3 className="text-xl font-semibold mt-4 md:mt-0">Student Marks Portal</h3>
            <p className="text-gray-700 mt-2">
              A Django project to manage and display student marks, semester-wise reports, and admin
              dashboard functionality.
            </p>
            <a
              href="https://github.com/yourusername/student-marks-portal"
              target="_blank"
              className="text-blue-600 underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="p-4 border rounded shadow-sm md:flex gap-6 m-2">
          {/* <img
            src={anganwadiImg}
            alt="Anganwadi Automation"
            className="w-full md:w-1/3 rounded"
          /> */}
          <div>
            <h3 className="text-xl font-semibold mt-4 md:mt-0">Personal portfolio</h3>
            <p className="text-gray-700 mt-2">
              A responsive personal portfolio website built using React and Tailwind CSS. It showcases my skills, projects, and background with a clean and modern UI design.
            </p>
            <a
              href="https://github.com/yourusername/anganwadi-automation"
              target="_blank"
              className="text-blue-600 underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
