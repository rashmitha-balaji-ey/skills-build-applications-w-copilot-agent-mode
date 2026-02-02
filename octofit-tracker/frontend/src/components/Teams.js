
import React, { useEffect, useState } from 'react';

const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Fetching Teams from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Teams data:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div className="mb-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Teams</h2>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  {data[0] && Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={item.id || idx}>
                    {Object.values(item).map((val, i) => (
                      <td key={i}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {data.length === 0 && <div className="alert alert-info">No teams found.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
