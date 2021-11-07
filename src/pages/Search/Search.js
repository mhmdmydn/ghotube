import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './style.css';
import AOS from 'aos';
import Swal from "sweetalert2";

function Search(props) {
    
    const [query, setQuery] = useState("");
    
    useEffect(() => {
        AOS.init({
            duration: 1000
        });

    }, []);

  return (
      <div className="page-wrap">
          <div className="container h-100">
              <div className="row h-100 justify-content-center">
                  <div className="col-md-6 my-auto text-center" data-aos="fade-up">
                      <div className="mb-3">
                          <h1 className="type text-uppercase fs-1 fw-bolder">gho<span className="text-danger">tube.</span></h1>
                      </div>
                      <div className="mb-3">
                          <input type="text" className="form-control" id="searchForm" value={query} onChange={e => setQuery(e.target.value)} placeholder="How to create website" autoComplete="off" required/>
                          <Link className={`btn btn-primary mt-3 w-50 ${(!query) ? 'disabled' : ''}`} to={`/ghotube/search?q=${(query) ? query : 'trending'}`}>Search</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Search;