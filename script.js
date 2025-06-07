function verificarLocalizacao() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const lat = position.coords.latitude.toFixed(4);
        const lon = position.coords.longitude.toFixed(4);
        document.getElementById('resultado-localizacao').innerHTML =
          `Sua localização aproximada:<br>Latitude: <b>${lat}</b><br>Longitude: <b>${lon}</b>`;
      },
      function (error) {
        document.getElementById('resultado-localizacao').innerHTML =
          "Não foi possível obter sua localização.";
      }
    );
  } else {
    document.getElementById('resultado-localizacao').innerHTML =
      "Geolocalização não é suportada pelo seu navegador.";
  }
}