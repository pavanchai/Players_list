import "./index.css";

function App() {
  return (
    <div>
      <div className="header">
        <div className="header-item">
          <h2>India</h2>
          <div className="result">1st</div>
        </div>
        <div className="center">
          <img src="path_to_logo.jpg" alt="Logo" height="50" />
          <h3>Jaldi Team Banao (apka team)</h3>
        </div>
        <div className="header-item">
          <h2>South Africa</h2>
          <div className="position">2nd</div>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>%Hit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mohammed Shami</td>
              <td>
                100% <div className="green-bar" style={{ width: "100%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Virat Kohli</td>
              <td>
                71% <div className="green-bar" style={{ width: "71%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Rohit Sharma</td>
              <td>
                71% <div className="green-bar" style={{ width: "71%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Jasprit Bumrah</td>
              <td>
                71% <div className="green-bar" style={{ width: "71%" }}></div>
              </td>
            </tr>
            <tr>
              <td>KL Rahul</td>
              <td>
                71% <div className="green-bar" style={{ width: "71%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Kuldeep Yadav</td>
              <td>
                71% <div className="green-bar" style={{ width: "71%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Ravindra Jadeja</td>
              <td>
                57% <div className="green-bar" style={{ width: "57%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Ishan Kishan</td>
              <td>
                50% <div className="green-bar" style={{ width: "50%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Hardik Pandya</td>
              <td>
                50% <div className="green-bar" style={{ width: "50%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Mohammed Siraj</td>
              <td>
                43% <div className="green-bar" style={{ width: "43%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Shreyas Iyer</td>
              <td>
                43% <div className="green-bar" style={{ width: "43%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Shubman Gill</td>
              <td>
                40% <div className="green-bar" style={{ width: "40%" }}></div>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>%Hit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marco Jansen</td>
              <td>
                100% <div className="green-bar" style={{ width: "100%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Gerald Coetzee</td>
              <td>
                100% <div className="green-bar" style={{ width: "100%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Tabraiz Shamsi</td>
              <td>
                100% <div className="green-bar" style={{ width: "100%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Lizaad Williams</td>
              <td>
                100% <div className="green-bar" style={{ width: "100%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Aiden Markram</td>
              <td>
                86% <div className="green-bar" style={{ width: "86%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Kagiso Rabada</td>
              <td>
                67% <div className="green-bar" style={{ width: "67%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Quinton De Kock</td>
              <td>
                57% <div className="green-bar" style={{ width: "57%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Keshav Maharaj</td>
              <td>
                57% <div className="green-bar" style={{ width: "57%" }}></div>
              </td>
            </tr>
            <tr>
              <td>David Miller</td>
              <td>
                57% <div className="green-bar" style={{ width: "57%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Reeza Hendricks</td>
              <td>
                50% <div className="green-bar" style={{ width: "50%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Heinrich Klaasen</td>
              <td>
                43% <div className="green-bar" style={{ width: "43%" }}></div>
              </td>
            </tr>
            <tr>
              <td>Rassie Van Der Dussen</td>
              <td>
                43% <div className="green-bar" style={{ width: "43%" }}></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
