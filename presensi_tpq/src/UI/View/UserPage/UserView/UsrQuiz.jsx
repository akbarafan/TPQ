import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UsrQuiz = () => {
  const [data, setData] = useState([]);

  const showMateri = async () => {
    axios
      .get("http://127.0.0.1:8000/api/quiz")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Data not found", error);
      });
  };

  useEffect(() => {
    showMateri();
  }, []);
  return (
      <div className='content-wrapper'>
      <div className="content-header">
        <div className="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 className='m-0'>Quiz</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Beranda</a></li>
              </ol>
            </div>
          </div>
        </div>
        </div>

          <section class="content">
            <div class="container-fluid">
              <div class="row row-cols-1 row-cols-md-2 g-4">
              {data.length === 0 ? (
                <p>No quiz available.</p>
                ) : (
                  data.map((item, index) => (
                    <div class="col-md-4" key={index}>
                    <div className="card card-primary card-outline ">
                      <div className="card-body box-profile">
                        <h4 className=" mb-4">{item.category}</h4>
      
                        <ul className="list-group list-group-unbordered mb-4">
                          <li className="list-group-item">
                            <i>Topic : </i>
                            <p>{item.topic}</p>
                          </li>
                          <li className="list-group-item">
                            <i>Link Pembelajaran : </i>
                            <a href={item.link} terget="_blank" className="float-right">
                              {item.link}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  )))}
              </div>
            </div>
          </section>
    </div>
  )
}

export default UsrQuiz
