import axios from 'axios';
import moment from 'moment';
import 'moment/locale/id';
import React, { useEffect, useState } from 'react'

const TcrMakePresence = () => {
  const [mapel, setMapel] = useState();
  const [dariJam, setDariJam] = useState();
  const [sampaiJam, setSampaiJam] = useState();
  const [status, setStatus] = useState([]);
  const [dataPresen, setDataPresen] = useState();

  const now = moment();
  now.locale('id');
  const hari = now.format('dddd');
  const tanggal = now.format('dddd, DD MMMM YYYY - HH:mm');


  const akun = JSON.parse(localStorage.getItem('akun'));
  const idCategory = akun.id_categori;


  const [formData, setFormData] = useState({
    id_teacher: akun.id,
    id_categori: idCategory,
    date: now.locale('id').format('YYYY-MM-DD HH:mm:ss')
  });


  const config = {
    headers: {
      'Content-Type': 'multipart/form-data;',
    },
  };

  const category = {
    id : idCategory
  };

  
  const showCategory = async () => {
    axios.post('http://127.0.0.1:8000/api/getCategory',  category, config )
      .then(response => {
        setMapel(response.data.data.name);
        setDariJam(response.data.data.fromHour);
        setSampaiJam(response.data.data.untilHour);
      })
      .catch(error => {
        console.error('Category not found', error);
      });
  };


  const presensi = {
    id_categori : idCategory,
    date : now.format("YYYY-MM-DD")
  };

  const showPresensi = async () => {
    axios.post('http://127.0.0.1:8000/api/showPresensi',  presensi, config )
      .then(response => {
        setStatus(response.data.data.status);
        setDataPresen(response.data.data.id);
      })
      .catch(error => {
        console.error('Category not found', error);
      });
  };

  useEffect(() => {
    showCategory();
    showPresensi();

    console.log(status)
  }, []);

  const handleOn = (e) =>{
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/presensi', formData)
        .then(response => {
          window.location.href = "/teacher/makePresence"
        })
        .catch(error => {
            console.log(error);
        })
  }

  const handleOff = (e) =>{
    e.preventDefault();

    const putPres = {
      id : dataPresen
    };

    axios.put('http://127.0.0.1:8000/api/presensi', putPres)
        .then(response => {
          window.location.href = "/teacher/makePresence"
        })
        .catch(error => {
            console.log(error);
        })
  }
  return (
    <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 className='m-0'>Buat Presensi</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">Beranda</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4">

      <div className="card card-primary card-outline ">
        <div className="card-body box-profile">

          <h2 className=" mb-4">{mapel}</h2>

          <ul className="list-group list-group-unbordered mb-4">
            <li className="list-group-item">
              <i>Nama Pengajar</i> <p className="float-right">{akun.name}</p>
            </li>
            <li className="list-group-item">
              <i>Jadwal</i> <p className="float-right">{hari} (Jam { moment(dariJam, 'HH:mm:ss').format("HH:mm") } - { moment(sampaiJam, 'HH:mm:ss').format("HH:mm") })</p>
            </li>
            <li className="list-group-item">
              <i>Tanggal</i> <p className="float-right">{tanggal}</p>
            </li>
          </ul>

          {status ? <button onClick={handleOn} className={status == 0 ? "btn btn-success btn-block" : "btn btn-success btn-block disabled "}><b>Aktifkan Presensi</b></button> : <button onClick={handleOff} className="btn btn-danger btn-block"><b>Matikan Presensi</b></button>}
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default TcrMakePresence
