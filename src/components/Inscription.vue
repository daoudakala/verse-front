<template>
  <div class="container">
    <div>
      <p class="titre">C'est la première et la dernière qu'on vous</p>
      <p class="titre">demande ces renseignements</p>
    </div>
    <hr />
    <br />
    <div class="row g-3">
        <div class="col-md-3">
        <label for="exampleFormControlInput1" class="form-label labelise"
          >Pays 
        </label>
         <select name="" class="form-select " id="">
            <option value="">COTE DIVOIRE</option>
            <option value="">COTE DIVOIRE</option>
            <option value="">COTE DIVOIRE</option>
            <option value="">COTE DIVOIRE</option>
            <option value="">COTE DIVOIRE</option>
            <option value="">COTE DIVOIRE</option>
            <option value="">COTE DIVOIRE</option>
            <option value="">COTE DIVOIRE</option>
            <option value="">COTE DIVOIRE</option>
         </select>
      </div>
      <div class="col-md-3">
        <label for="exampleFormControlInput1" class="form-label labelise"
          >Ville
        </label>
        <input
          type="text"
          class="form-control "
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>

    </div> <br> 
    <div class="row g-3">
        <div class="col-md-3">
        <label for="exampleFormControlInput1" class="form-label labelise"
          >Mot de passe 
        </label>
        <input
          type="password"
          class="form-control "
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>
      <div class="col-md-3">
        <label for="exampleFormControlInput1" class="form-label labelise"
          >Retaper mot de passe 
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>

    </div>
    <br>
    <div class="row btn g-3 d-grid gap-2 d-md-flex justify-content-md-start">
      <button class="btn btn-outline-secondary ret text-center" style="display: flex; justify-content: center; ">Retour</button>
      <button class="btn suiv text-white" style="display: flex; justify-content: center; background-color: #AA7E12; padding: 10px; border:none;">Terminer</button>
    </div>
    <form class="row g-3">
      
    </form> <br>
    
  </div>
</template>

<script>
export default {
  name: "AccueilNext",
};
</script>

<style>
div .taille {
  width: 100%;
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
.labelise {
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #000;
}
.hori{
    width: 30%;
    display: flex;
    flex-direction: column;
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
background-color: #0E762C;
  width: 11%;
  height: 50%;
  padding: 7px;
  text-align: center;
}
</style>
