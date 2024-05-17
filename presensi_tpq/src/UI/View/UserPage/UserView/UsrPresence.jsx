import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

const UsrPresence = () => {
  const [data, setData] = useState([]);
  const [hasCheckedIn, setHasCheckedIn] = useState({});

  const akun = JSON.parse(localStorage.getItem('akun'));

  const now = moment();
  now.locale('id');
  const tanggal = now.format('YYYY-MM-DD HH:mm:ss');

  const status = {
    status: 0,
  };

  const showPresensi = async () => {
    axios
      .post("http://127.0.0.1:8000/api/showPresensiUsr", status)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Category not found", error);
      });
  };

  const checkUserPresence = async () => {
      const presen = {
        id_user: akun.id,
        id_presensi: data.id
      };

      axios.get(`http://127.0.0.1:8000/api/recap/${akun.id}/today`, presen)
        .then((response) => {
          
          const checkedInData = response.data;
          const checkedInStatus = {};
          checkedInData.forEach(item => {
              checkedInStatus[item] = true;
          });
          setHasCheckedIn(checkedInStatus);
        })
  };

  useEffect(() => {
    showPresensi();
    checkUserPresence();
  }, []);

  const handlePresen = (e, idPresen) =>{
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data;',
      },
    };

    const presen = {
      id_user : akun.id,
      id_presensi : idPresen,
      date : tanggal
    };

    console.log(presen)

    axios.post('http://127.0.0.1:8000/api/recap', presen, config)
        .then(response => {
          console.log(response.data);
            alert('Check-in successful');
            setHasCheckedIn({ ...hasCheckedIn, [idPresen]: true });
        })
        .catch(error => {
          if (error.response && error.response.status === 400) {
            alert('User has already checked in for today.');
          } else {
              console.error('There was an error checking in!', error);
              alert('Failed to check in');
          }
        })
  }

  return (
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 className="m-0">Presentasi</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item">
                  <a href="#">Beranda</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section class="content">
        <div class="container-fluid">
          
          <div class="row">
      {data.length === 0 ? (
        <p>No open presensi available.</p>
        ) : (
          data.map((item, index) => (
            
            <div class="col-md-4" key={index}>
              <div className="card card-primary card-outline ">
                <div className="card-body box-profile">
                  <h2 className=" mb-4">{item.categori}</h2>

                  <ul className="list-group list-group-unbordered mb-4">
                    <li className="list-group-item">
                      <i>Nama Pengajar</i>
                      <p className="float-right">{item.teacher}</p>
                    </li>
                    <li className="list-group-item">
                      <i>Jadwal</i>
                      <p className="float-right">{ moment(item.date, 'YYYY-MM-DD HH-mm-dd').format("dddd") } (Jam { moment(item.fromHour, 'HH:mm:ss').format("HH:mm") } - { moment(item.untilHour, 'HH:mm:ss').format("HH:mm") })</p>
                    </li>
                    <li className="list-group-item">
                      <i>Tanggal</i>
                      <p className="float-right">
                      { moment(item.date, 'YYYY-MM-DD HH-mm-dd').format("dddd, DD MMMM YYYY - HH:mm") }
                      </p>
                    </li>
                  </ul>

                  <button onClick={e => handlePresen(e, item.id)}  disabled={hasCheckedIn[item.id] || item.status !== 0} className="btn btn-success btn-block">
                    <b>Presensi</b>
                  </button>
                </div>
              </div>
            </div>
            ))
)}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default UsrPresence;
