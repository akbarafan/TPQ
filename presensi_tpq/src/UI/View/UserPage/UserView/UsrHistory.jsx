import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const UsrHistory = () => {
  const [data, setData] = useState([]);

  const akun = JSON.parse(localStorage.getItem('akun'));

  
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
  };

  const recap = {
    id_user : akun.id
  };

  const showRecapUsr = async () => {
    axios.post('http://127.0.0.1:8000/api/recap/showRecapUsr',  recap, config)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Category not found', error);
      });
  };

  useEffect(() => {
    showRecapUsr();

    console.log(data)
  }, []);

  return (
    <div className='content-wrapper'>
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 className='m-0'>Histori Presentasi</h1>
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
              <div class="col-12">
                <div class="card">
                  <div class="card-header">

                    <div class="card-tools">
                      <div class="input-group input-group-sm">
                        <input type="text" name="table_search" class="form-control float-right" placeholder="Search"/>

                        <div class="input-group-append">
                          <button type="submit" class="btn btn-default">
                            <i class="fas fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card-body table-responsive p-0" >
                    <table class="table table-head-fixed text-nowrap">
                      <thead>
                        <tr>
                          <th>Mapel</th>
                          <th>Pengajar</th>
                          <th>Tanggal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>{item.cateori}</td>
                            <td>{item.teacher}</td>
                            <td>{moment(item.date_recap, 'YYYY-MM-DD HH:mm:ss').format('dddd, DD MMMM YYYY - HH:mm:ss')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default UsrHistory
