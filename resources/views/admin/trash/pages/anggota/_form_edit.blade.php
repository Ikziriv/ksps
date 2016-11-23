<div class="container-fluid">
    <section class="container">
    <div class="container-page">    
      <div class="col-md-6">
        <div class="form-group col-lg-12">
          <label>NO KTP</label>
          <input type="text" name="ktp" class="form-control">
        </div>
        
        <div class="form-group col-lg-12">
          <label>Nama</label>
          <input type="text" name="nama" class="form-control">
        </div>

        <div class="form-group col-lg-12">
          <label>Jenis Kelamin</label>
          <select name="id" name="jenkel" class="form-control" tabindex="-1">
            <option value="">Select</option>
            <option value="L">Laki - Laki</option>
            <option value="P">Perempuan</option>
          </select>
        </div>

        <div class="form-group col-lg-6">
          <label>Tempat Lahir</label>
          <input type="text" name="tempat_lahir" class="form-control">
        </div>
        
        <div class="form-group col-lg-6" id="sandbox-container">
          <label>Tanggal Lahir</label>
          <div class="input-group date">
            <input type="text" name="tanggal_lahir" class="form-control"><span class="input-group-addon"><i class="fa fa-calendar"></i></span>
          </div>
        </div>

        <div class="form-group col-lg-12">
          <label>Alamat</label>
          <textarea type="text" name="alamat" class="form-control"> </textarea> 
        </div>

      </div>
    {{-- end div --}}
      <div class="col-md-6">

        <div class="form-group col-lg-6">
          <label>Kelurahan</label>
          <input type="text" name="kelurahan" class="form-control">
        </div>
        
        <div class="form-group col-lg-6">
          <label>Kecamatan</label>
          <input type="text" name="kecamatan" class="form-control">
        </div>

        <div class="form-group col-lg-6">
          <label>Kabupaten</label>
          <input type="text" name="kabupaten" class="form-control">
        </div>
        
        <div class="form-group col-lg-6">
          <label>Kode Pos</label>
          <input type="text" name="kodepos" class="form-control">
        </div>

        <div class="form-group col-lg-12">
          <label>Telphone</label>
          <input type="text" name="tlp" class="form-control">  
        </div>
        
      </div>    

    </div>
  </section>
</div>