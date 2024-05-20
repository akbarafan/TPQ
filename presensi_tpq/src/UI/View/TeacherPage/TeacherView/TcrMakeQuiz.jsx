import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react'

const TcrMakeQuiz = () => {

  const now = moment();
  now.locale('id');

  const akun = JSON.parse(localStorage.getItem('akun'));
  const idCategory = akun.id_categori;

  const [formData, setFormData] = useState({
    topic: "",
    link: "",
    id_category: idCategory,
    date: now.locale('id').format('YYYY-MM-DD HH:mm:ss')
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/quiz', formData)
        .then(response => {
          alert("Quiz baru telah sukses ditambahkan");
          window.location.href = "/teacher/makeQuiz";

          setFormData({
            topic: "",
            link: ""
          });
        })
        .catch(error => {
            console.log(error);
        })
  }

  return (
    <div>
      <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Buat Quiz</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Beranda</a></li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Quiz</h3>
              </div>
              <form id="quickForm">
                <div class="card-body">
                  <div class="form-group">
                    <label>Topic</label>
                    <input type="text" name="topic" value={formData.topic} onChange={handleChange} class="form-control" placeholder="Enter Topic"/>
                  </div>
                  <div class="form-group">
                    <label>Link</label>
                    <input type="text" name="link" value={formData.link} onChange={handleChange} class="form-control" placeholder="Enter Link"/>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-end">
                  <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            </div>
          <div class="col-md-6">

          </div>
        </div>
      </div>
    </section>
  </div>
    </div>
  )
}

export default TcrMakeQuiz
