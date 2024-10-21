import "../App.css";
const Education = () => {
  return (
    <div className="welcome-container">
      {/* <!-- Table displaying schools and graduation dates --> */}
      <table>
        <tr>
          {/* <!-- Table headers for school name and graduation date --> */}
          <th>School Name</th>
          <th>Graduation Date</th>
        </tr>
        <tr>
          {/* <!-- Table row for Belmont High School with graduation date --> */}
          <td>Belmont High School</td>
          <td>2020</td>
        </tr>
        <tr>
          {/* <!-- Table row for Mass Bay Community College with transfer year --> */}
          <td>Mass Bay Community College</td>
          <td>Transfer 2022</td>
        </tr>
        <tr>
          {/* <!-- Table row for current enrollment at Boston University --> */}
          <td>Boston University</td>
          <td>Present</td>
        </tr>
      </table>
    </div>
  );
};

export default Education;
