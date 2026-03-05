var episodes = {
  '1-1':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E01_S01_E01%20-%20Los%20cazadores%20del%20suspensorio%20perdido.mp4',
  '1-2':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E02_S01_E02%20-%20El%20sill%C3%B3n%20delator.mp4',
  '1-3':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E03_S01_E03%20-%20El%20d%C3%ADa%20que%20Rico%20se%20volvi%C3%B3%20inteligente.mp4',
  '1-4':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E04_S01_E04%20-%20Qu%C3%A9%20verde%20era%20la%20carne%20de%20mi%20almuerzo.mp4',
  '1-5':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E05_S01_E05%20-%20El%20proyecto%20de%20la%20bruja%20de%20Moville.mp4',
  '1-6':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E06_S01_E06%20-%20Un%20enjambre%20de%20problemas.mp4',
  '1-7':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E07_S01_E07%20-%20Aquellos%20fueron%20los%20buenos%20tiempos.mp4',
  '1-8':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E08_S01_E08%20-%20La%20maldici%C3%B3n%20de%20las%20momias.mp4',
  '1-9':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E09_S01_E09%20-%20Goool.mp4',
  '1-10':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E10_S01_E10%20-%20El%20chico%20de%20las%20novedades.mp4',
  '1-11':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E11_S01_E11%20-%20El%20monstruo%20de%20al%20lado.mp4',
  '1-12':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E12_S01_E12%20-%20El%20golpe%20de%20un%20%C3%A1ngel.mp4',
  '1-13':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S01E13_S01_E13%20-%20Mira%2C%20una%20vaca%20que%20maulla.mp4',
  '2-1':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E01_S02_E01%20-%20Noche%20y%20d%C3%ADa%20y%20noche%20del%20cazador.mp4',
  '2-2':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E02_S02_E02%20-%20Sigan%20a%20ese%20Mo.mp4',
  '2-3':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E03_S02_E03%20-%20Gran%20pulgar%2C%20gran%20maldad.mp4',
  '2-4':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E04_S02_E04%20-%20Espejito%2C%20espejito%20de%20la%20pared.mp4',
  '2-5':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E05_S02_E5%20-%20Hay%20algo%20extra%C3%B1o%20en%20el%20lago%20Dame-Dame-Tetengo.mp4',
  '2-6':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E06_S02_E06%20-%20Mascotas%20de%20pesadilla.mp4',
  '2-7':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E07_S02_E07%20-%20No%20toques%20el%20dial.mp4',
  '2-8':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E08_S02_E08%20-%20%C2%BFVendiste%20tu%20alma%20por%20qu%C3%A9_.mp4',
  '2-9':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E09_S02_E09%20-%20Qu%C3%A9%20mala%20suerte.mp4',
  '2-10':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E10_S02_E10%20-%20El%20reloj%20m%C3%A1gico.mp4',
  '2-11':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E11_S02_E11%20-%20Limpieza%20peligrosa.mp4',
  '2-12':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E12_S02_E12%20-%20El%20gnomo%20vengador.mp4',
  '2-13':
    'https://archive.org/download/los-misterios-de-moville-serie-completa/Los%20misterios%20de%20Moville_S02E13_S02_E13%20-%20El%20oro%20del%20duende.mp4',
};

function getStreams(tmdbId, mediaType, season, episode) {
  var key = season + '-' + episode;
  var url = episodes[key];
  if (!url) {
    return Promise.resolve([]);
  }
  return Promise.resolve([
    {
      name: 'Moville ES',
      title: 'Temporada ' + season + ' Episodio ' + episode,
      url: url,
      quality: 'SD',
    },
  ]);
}

// Export for Nuvio scraper runtime
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getStreams: getStreams };
}
