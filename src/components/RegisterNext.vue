<template>
  <div class="container">
    <p class="block px-7 text-xl font-bold mb-4 text-start">
      C'est la première et la dernière fois que nous vous demandons ces
      renseignements.
    </p>
    <hr /><br><br>
    <form action="">
      <div class=" grid grid-rows-2 grid-cols-3  grid-flow-col gap-4">
        <div class="row-span-3">
          <label for="" class=" block text-start px-16 font-bold text-gray-700"
            >Pays</label>
          <select class=" w-3/4 border border-gray-300 mx-4 mt-2 px-5  py-2 rounded-lg  shadow-sm  focus:outline-none focus:border-indigo-500 focus:ring-indigo-500">
            <option>Sélectionner un pays </option>
            <option>COTE DIVOIRE </option>
            <option>FRANCE </option>
            <option>BELGIQUE </option>
            <option>ETATS-UNIS </option>
            <option>ALLEMAGNE </option>
            <option>SENEGAL </option>
            <option>CAMEROUN </option>
          </select>
          
        </div>
        <div class="row-span-3">
          <label for="" class="block text-start px-10 font-bold text-gray-700"
            >Ville</label
          >
          <input
            type="text"
            placeholder=""
            class="border border-gray-300 w-3/4 flex flex-initial mx-4 mt-2 px-2  py-2 rounded-lg shadow-sm focus:outline-one focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div> 
        <!-- <div class="col-span-3">
          <label for="" class=" block text-start px-10 text-gray-700"
            >Mot de passe</label
          >
          <input
            type="email"
            placeholder=""
            class="border border-gray-300 w-full flex flex-initial mx-4 px-2  py-2 rounded-lg shadow-sm focus:outline-one focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          
        </div> 
        <div class="row-span-3">
          <label for="" class="block text-start px-10 text-gray-700"
            >Retaper votre mot de passe</label
          >
          <input
            type="email"
            placeholder=""
            class="border border-gray-300 w-full flex flex-initial mx-4 px-2 py-2 rounded-lg shadow-sm focus:outline-one focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div> -->
      </div> <br>
      <div class=" grid grid-rows-2 grid-cols-3  grid-flow-col gap-4">
      
        <div class="row-span-3">
          <label for="" class=" block text-start px-16  font-bold text-gray-700"
            >Mot de passe</label
          >
          <input
            type="password"
            placeholder=""
            class="border border-gray-300 w-3/4  mx-4 mt-2 px-2  py-2 rounded-lg shadow-sm focus:outline-one focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
          
        </div> 
        <div class="row-span-3">
          <label for="" class="block text-start px-10 font-bold text-gray-700"
            >Retaper votre mot de passe</label
          >
          <input
            type="password"
            placeholder=""
            class="border border-gray-300 w-3/4 flex flex-initial mx-4 mt-2 px-4 py-2 rounded-lg shadow-sm focus:outline-one focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>    
     
      <div class="grid grid-rows-3 gri-cols-3 gap-4">
        <div class="row mx-10 flex flex-1 gap-3">
          <button
            class="border-2 border-slate-500 mt-5 w-2/12 px-3 py-2 rounded-sm"
          >
            Retour
          </button>
          <button
            class="bg-green-700 w-2/12 mt-5 px-3 py-2 rounded-md text-white text-xl"
          >
            Terminer
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterNext",
};
</script>
