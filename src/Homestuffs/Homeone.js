import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../App.css';
 
function Appone() {
  return (
<div className="App">
<header>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
<a className="navbar-brand" href="#">
              PMS
</a>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ml-auto">
<li className="nav-item">
<button className="btn btn-success mr-2">Sign Up</button>
</li>
<li className="nav-item">
<button className="btn btn-primary">Sign In</button>
</li>
</ul>
</div>
</div>
</nav>
</header>
<main>
<div className="container mt-5">
<div className="row">
<div className="col-md-4">
<img src="image1.jpg" alt="Image 1" className="img-fluid mb-3" />
</div>
<div className="col-md-4">
<img src="image2.jpg" alt="Image 2" className="img-fluid mb-3" />
</div>
<div className="col-md-4">
<img src="image3.jpg" alt="Image 3" className="img-fluid mb-3" />
</div>
</div>
</div>
</main>
</div>
  );
}
 
export default Appone;