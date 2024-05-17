import React from 'react'
import { Link } from 'react-router-dom'

const UsrMain = () => {
  return (
    <div >
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <h1 className="m-0 mb-2">Selamat Datang</h1>
          </div>
        </div>

        <section class="content">
          <div class="container-fluid">

            {/* <div class="row mb-4">
              <div class="col-md-4">
                <div className="card" >
                  <div class="card-body">
                    <h3 class="card-text mb-0">Tahfid</h3>
                    <p class="card-text">Sutarno</p>
                    <p class="card-text">Senin, 17.00 - 18.00</p>
                    <a href="#" class="text-primary nav justify-content-end">Akses Presensi ➜</a>
                  </div>
                </div>
              </div>
            </div> */}

          <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header callout callout-info">
                <h5><i class="fas fa-info"></i> Jadwal Aktif TPQ Duafa:</h5>
                hari senin sampai hari kamis
              </div>
              <div class="card-body">
                <table class="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Waktu</th>
                      <th>Mapel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-widget="expandable-table" aria-expanded="false">
                      <td>15.00-16.00</td>
                      <td>Tarjim Terjemah Al-Quran</td>
                    </tr>
                    <tr data-widget="expandable-table" aria-expanded="true">
                      <td>16.00-16.30</td>
                      <td>Tajwid</td>
                    </tr>
                    <tr data-widget="expandable-table" aria-expanded="true">
                      <td>16.30-17.00</td>
                      <td>Ngaji Al-Quran</td>
                    </tr>
                    <tr data-widget="expandable-table" aria-expanded="false">
                      <td>17.00-18.00</td>
                      <td>Tahfid</td>
                    </tr>
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

export default UsrMain
