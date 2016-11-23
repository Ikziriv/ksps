<div class="container-fluid">
    <section class="container">
    <div class="container-page">        
      <div class="col-md-6">
        <div class="form-group col-lg-12">
          <label>NO KTP</label>
          <input type="text" name="ktp" class="form-control" ng-model="data.no_ktp">
        </div>
        
        <div class="form-group col-lg-12">
          <label>Nama</label>
          <input type="text" name="nama" class="form-control" ng-model="data.nama">
        </div>

        <div class="form-group col-lg-12">
          <label>Jenis Kelamin</label>
          <select name="data.id" name="jenkel" class="form-control" tabindex="-1" ng-model="data.jenkel">
            <option value="">Pilih</option>
            <option ng-repeat="unit in jenkel" ng-selected="unit.id == {{$data->jenkel}}" value="<% unit.id %>"><% unit.label %></option>
          </select>
        </div>

        <div class="form-group col-lg-6">
          <label>Tempat Lahir</label>
          <input type="text" name="tempat_lahir" class="form-control" ng-model="data.tempat_lahir">
        </div>
        
        <div class="form-group col-lg-6" id="sandbox-container">
          <label>Tanggal Lahir</label>
          <div class="input-group date">
            <input type="text" name="tanggal_lahir" ng-model="data.tanggal_lahir" class="form-control"><span class="input-group-addon"><i class="fa fa-calendar"></i></span>
          </div>
        </div>

        <div class="form-group col-lg-12">
          <label>Alamat</label>
          <textarea type="text" name="alamat" class="form-control" ng-model="data.alamat"> </textarea> 
        </div>

      </div>
    {{-- end div --}}
      <div class="col-md-6">

        <div class="form-group col-lg-6">
          <label>Kelurahan</label>
          <input type="text" name="kelurahan" class="form-control" ng-model="data.kelurahan">
        </div>
        
        <div class="form-group col-lg-6">
          <label>Kecamatan</label>
          <input type="text" name="kecamatan" class="form-control" ng-model="data.kecamatan">
        </div>

        <div class="form-group col-lg-6">
          <label>Kabupaten</label>
          <input type="text" name="kabupaten" class="form-control" ng-model="data.kabupaten">
        </div>
        
        <div class="form-group col-lg-6">
          <label>Kode Pos</label>
          <input type="text" name="kodepos" class="form-control" ng-model="data.kodepos">
        </div>

        <div class="form-group col-lg-12">
          <label>Telphone</label>
          <input type="text" name="tlp" class="form-control" ng-model="data.tlp">  
        </div>
      </div>    

      </div>
    </div>
  </section>
</div>