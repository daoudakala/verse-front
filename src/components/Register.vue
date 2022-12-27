<template>
  <div class="container">
    <p class=" block px-7 text-xl font-bold mb-4 text-start">Remplissez vos informations afin de procéder au tirage de verset</p>
    <hr />
    <form action="" class=" ">
      <div class="mt-6">
        <label for="" class="block text-start px-10 font-bold text-gray-700"
          >Nom et prénoms</label
        >
        <div class="mt-1 mx-5 px-5">
          <input type="text" class="w-1/3 flex flex-initial border border-gray-300 px-3 py-2 rounded-lg shadow-sm 
          focus:outline-one focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
        </div>
        <br />
        <label for="" class="block text-start px-10 font-bold text-gray-700">Adresse E-mail</label>
        <div class="mx-5 px-5">
          <input type="email" placeholder="facultatif" class="w-1/3 flex flex-initial border border-gray-300 px-3 py-2 rounded-lg shadow-sm 
          focus:outline-one focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
        </div>
        <div class="row mx-10 flex flex-1  gap-3">
            <button class="border-2 border-slate-500 mt-5 w-2/12 px-3 py-2 rounded-sm ">Retour </button>
            <button class="bg-yellow-500  w-2/12 mt-5 px-3 py-2 rounded-md text-white text-xl">Suivant </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterAccount",
};
</script>
