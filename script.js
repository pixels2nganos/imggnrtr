function genererImage() {
  const description = document.getElementById("description").value;
  const apiKey = "c6c94851-60fd-4e60-884d-6c6b404e0c1a"; // Remplacez par votre clé API DeepAI

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
    document.getElementById("imageGeneree").src = data.output_url;
  })
  .catch(error => {
    console.error("Erreur:", error);
  });
}