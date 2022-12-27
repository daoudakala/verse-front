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
          type="email"
          class="form-control taille"
          id="exampleFormControlInput1"
          placeholder="facultatif"
        />
      </div>
    </form>
    
    <div class="row btn g-3">
      <button class="btn btn-outline-secondary ret text-center">Retour</button>
      <button class="btn suiv text-white text-center">Suivant</button>
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
  font-weight: bold;
}
hr {
  width: 55%;
  background-color: #131312;
  margin-top: 15px;
}
.labelise {
  font-weight: bold;
}

.btn {
  display: flex;
}
.btn .ret {
  width: 10%;
}
.btn .suiv {
  background-color: #b9b308;
  width: 10%;
}
</style>
