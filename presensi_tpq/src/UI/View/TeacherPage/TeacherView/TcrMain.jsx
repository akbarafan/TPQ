import React from 'react'

const TcrMain = () => {
  return (
    <div >
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <h1 className="m-0 mb-4">Selamat Datang</h1>
          </div>
          {/* /.container-fluid */}
        </div>

        <section class="content">
          <div class="container-fluid">
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

export default TcrMain
