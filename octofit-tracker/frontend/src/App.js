
import logo from './octofitapp-small.png';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
            <img src={logo} alt="Octofit Logo" className="App-logo me-2" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
            </ul>
            <span className="navbar-text">
              <a className="btn btn-outline-light btn-sm ms-2" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
            </span>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="text-center mt-5">
              <h1 className="display-4 mb-3">Welcome to Octofit Tracker!</h1>
              <div className="card mx-auto" style={{maxWidth: '30rem'}}>
                <div className="card-body">
                  <h5 className="card-title">Track your fitness, join teams, and compete!</h5>
                  <p className="card-text">Use the navigation menu to explore activities, teams, leaderboards, and more.</p>
                  <a href="/activities" className="btn btn-primary">Get Started</a>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
