<template>
  <div class="container">
    <div>
      <p class="titre">Remplissez vos informations afin de procéder</p>
      <p class="titre">au tirage de verset</p>
    </div>
    <hr />
    <br />
    <form class="row g-3">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label labelise"
          >Nom et prénoms
        </label>
        <input
          style=" width: 40%;"
          type="email"
          class="form-control taille"
          id="exampleFormControlInput1"
          placeholder=""
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label labelise"
          >Adresse E-mail</label
        >
        <input 
          style=" width: 40%;"
          type="email"
          class="form-control taille"
          id="exampleFormControlInput1"
          placeholder="facultatif"
        />
      </div>
    </form>
    <div class="row btn g-3 d-grid gap-2 d-md-flex justify-content-md-start">
      <button class="btn btn-outline-secondary ret text-center">Retour</button>
      <button class="btn suiv text-white">Suivant</button>
    </div>
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
  background-color: #BF7B0B;
  width: 11%;
  padding: 7px;
  text-align: center;

}
</style>
