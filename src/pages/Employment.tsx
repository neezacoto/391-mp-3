import "../App.css";
const Employment = () => {
  return (
    <div className="welcome-container">
      {/* <!-- Table displaying employment history --> */}
      <table>
        <tr>
          {/* <!-- Table headers for employment and job titles --> */}
          <th>Employment</th>
          <th>Title</th>
        </tr>
        <tr>
          {/* <!-- Table row for Built Environment Plus with job title --> */}
          <td>Built Environment Plus</td>
          <td>Operations and Web Developer</td>
        </tr>
        <tr>
          {/* <!-- Table row for Liberty Mutual with job title --> */}
          <td>Liberty Mutual</td>
          <td>Software Engineer</td>
        </tr>
        <tr>
          {/* <!-- Table row for Boston University with job title --> */}
          <td>Boston University</td>
          <td>Course Assistant CS112</td>
        </tr>
      </table>
    </div>
  );
};

export default Employment;
