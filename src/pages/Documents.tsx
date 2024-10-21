import "../App.css";
const Documents = () => {
  return (
    <div className="welcome-container">
      {/* <!-- Section introducing the resume --> */}
      <h1>Resume:</h1>
      {/* <!-- Link to an external PDF of the resume --> */}
      <p>
        Open online pdf:{" "}
        <a href="https://images.akc.org/pdf/ebook/Puppy_Socialization.pdf">
          ChristianRudder_Resume_2024.pdf
        </a>
        .
      </p>
    </div>
  );
};

export default Documents;
