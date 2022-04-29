<script setup>
  import { doc, getDocs, setDoc } from 'firebase/firestore'

  const getDocuments = async () => {
    const { $teamMembersCollectionRef } = useNuxtApp()
    const docs = await getDocs($teamMembersCollectionRef);
    docs.forEach(doc => console.log(doc.data()));
  };

  const writeToFirestore = async () => {
    console.log(useNuxtApp());
    const { $firestore } = useNuxtApp()
    const ref = doc($firestore, "teamMembers", "PTQNndHhBefKdiHrpGgI")
    const document = {
      name: "Taartpunten!",
    };
  try {
      await setDoc(ref, document)
      alert("Success!")
  } catch (e) {
      alert("Error!")
      console.error(e)
    }
  };
</script>

<template>
  <section class="container">
    <div>
      <h2>
        Write to Firestore.
      </h2>
      <div>
        <button @click="getDocuments">
          <span>Write now</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  methods: {
    
  },
}
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>