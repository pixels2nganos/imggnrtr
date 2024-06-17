function genererImage() {
  const description = document.getElementById("description").value;
  const apiKey = "c6c94851-60fd-4e60-884d-6c6b404e0c1a"; // Remplacez par votre clé API DeepAI

  // Afficher un indicateur de chargement (à adapter selon votre HTML)
  document.getElementById("imageGeneree").src = "images/loading.gif"; 

  const data = {
    "text": description
  };

  fetch("https://api.deepai.org/api/text2img", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.output_url;

    // Créer un élément <img> pour précharger l'image
    const image = new Image();
    image.src = imageUrl;

    // Attendre que l'image soit complètement chargée
    image.onload = () => {
      // Afficher l'image générée
      document.getElementById("imageGeneree").src = imageUrl;
    };
  })
  .catch(error => {
    console.error("Erreur:", error);
    // Afficher un message d'erreur à l'utilisateur (à adapter)
    document.getElementById("imageGeneree").src = "images/error.png"; 
  });
}
