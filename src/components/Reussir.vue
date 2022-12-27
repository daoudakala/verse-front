<template>
    <div class="container">
      <h1 class="block px-7 text-7xl text-green-700 font-bold mb-4 text-start">
        BIENVENUE au tirage de verset de l'année Réussir 2023.
      </h1><br><br>
      <form action="">
        <div class=" grid grid-rows-2 grid-cols-3  grid-flow-col gap-4">
          <div class="row-span-3">
           
            <label for="" class=" block text-start px-16 font-bold text-gray-700"
              >N° Téléphone</label>
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
           
       
        <div class="grid grid-rows-3 gri-cols-3 gap-4">
          <div class="row mx-10 flex flex-1 gap-3">
            <button
              class="bg-yellow-700 w-2/12 mt-5 px-3 py-2 rounded-md text-white text-xl"
            >
              Suivant
            </button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ReussirYear",
  };
  </script>
  