const Resume = () => {
  return (
    <div className="min-h-screen px-4 py-12 pt-30 flex flex-col items-center bg-white">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>

      <p className="text-gray-700 mb-4">Click the button below to download my resume:</p>

      <a
        href="/Resume parvathykv.pdf"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
