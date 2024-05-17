import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

const TcrRecap = () => {
  const [data, setData] = useState([]);

  const akun = JSON.parse(localStorage.getItem('akun'));

  
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
  };

  const recap = {
    id_teacher : akun.id,
    id_categori : akun.id_categori
  };

  const showRecapTcr = async () => {
    axios.post('http://127.0.0.1:8000/api/recap/showRecapTcr',  recap, config)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Category not found', error);
      });
  };

  useEffect(() => {
    showRecapTcr();

  }, []);

  return (
    <div>
    <div className='content-wrapper'>
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 classname="m-0">Rekap Presensi</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Beranda</a></li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <div className="card-tools">
                <div className="input-group input-group-sm">
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              
              
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>Mapel</th>
                    <th>Nama</th>
                    <th>Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.cateori}</td>
                      <td>{item.user}</td>
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
</div>
  )
}

export default TcrRecap
