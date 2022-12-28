<template>
  <div class="container">
    <div>
      <p class="titreattente">Vous pouvez procéder dès à présent au</p>
      <p class="titreattente">tirage de votre verset.</p>
      <p class="titremilieu">Merci de patienter.</p>
    </div>
    <br />
    <div class="spinner-border text-success spin" role="status">
      <span class="visually-hidden">Loading...</span>
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

.spin{
    display: flex;
    margin: 0 auto;
}
.titreattente {
  display: flex;
  justify-content: center;
  color: #000;
  font-family: "inter";
  font-size: 1.5em;
  font-weight: 500;
  line-height: 38px;
}
.titremilieu {
  display: flex;
  justify-content: center;
  color: #000;
  font-family: "inter";
  font-size: 1.5em;
  font-weight: 500;
  line-height: 38px;
}
hr {
  width: 55%;
  color: #000;
  margin-top: 15px;
}
.connecter {
  margin-top: 20px;
}
.bouger {
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
