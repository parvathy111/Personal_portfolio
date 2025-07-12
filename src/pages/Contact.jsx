const Contact = () => {
  return (
    <div className="min-h-screen px-4 py-12 pt-30 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <div className="text-center space-y-4">
        <p className="text-gray-700">📧 Email: parvathy@example.com</p>
        <p className="text-gray-700">📱 Phone: +91-XXXXXXXXXX</p>
        <p className="text-gray-700">
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="text-blue-600 underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
