<template>
  <div class="container">
    <div>
      <p class="titre">Renseignez votre mot de passe afin</p>
      <p class="titre">de poursuivre</p>
    </div>
    <hr />
    <br />
    <form class="row">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label labelise"
        >N° de téléphone
      </label>
      <div class="input-group" style="width: 40%;">
        <span
          class="input-group-text"
          id="basic-addon1"
          style="background-color: #fff"
        >
          <select name="" id="">
            <option value="">+225</option>
            <option value="">+225</option>
            <option value="">+225</option>
            <option value="">+225</option>
            <option value="">+225</option>
            <option value="">+225</option>
            <option value="">+225</option>
          </select>
        </span>
        <input
          style="width:40%;"
          type="text"
          class="form-control taille"
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>
        </div>
     
      <div class="mb-3">
        <label
          for="exampleFormControlTextarea1"
          class="form-label labelise"
        ></label>
        <input
          style="width: 40%"
          type="password"
          class="form-control taille"
          id="exampleFormControlInput1"
          placeholder="Mot de passe"
        />
      </div>
      <div class="form-check bouger">
        <input
          class="form-check-input "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Mot de passe oublié ? 
        </label>
      </div>
      <div class="form-check bouger ">
        <input
          class="form-check-input "
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Se souvenir de moi 
        </label>
      </div>
      <div class="connecter">
        <button class="btn btn-success text-center"  style="width: 40%; padding: 10px; display: flex; justify-content: center; background-color: #AA7E12; border:none;"> Se Connecter</button>
      </div> 
    </form>
  </div>
</template>

<script>
export default {
  name: "AccueilNext",
};
</script>

<style>
div .taille {
  width: 40%;
}

.titre {
  font-size: 1.5em;
  font-weight: 500;
  line-height: 38px;
}
hr {
  width: 55%;
  color: #000;
  margin-top: 15px;
}
.connecter{
    margin-top: 20px;
}
.bouger{
    margin-left: 1em;
}
.labelise {
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
}

.btn {
  display: flex;
}

.btn .ret {
  width: 11%;
  padding: 7px;
  text-align: center;
}
.btn .suiv {
  background-color: #bf7b0b;
  width: 11%;
  padding: 7px;
  text-align: center;
}
</style>
