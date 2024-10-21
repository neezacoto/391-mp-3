import "../App.css";
const Achievements = () => {
  return (
    <div className="welcome-container">
      <table>
        <tr>
          {/* <!-- Table headers for achievements and their origin --> */}
          <th>Achievement</th>
          <th>Origin</th>
        </tr>
        <tr>
          {/* <!-- Table row with an achievement and its source --> */}
          <td>Phi Theta Kappa Honors Society</td>
          <td>MASS BAY</td>
        </tr>
        <tr>
          {/* <!-- Another table row with an achievement and its source --> */}
          <td>Deans List</td>
          <td>MASS BAY</td>
        </tr>
      </table>
    </div>
  );
};

export default Achievements;
