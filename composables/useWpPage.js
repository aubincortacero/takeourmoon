// Données ACF de la page WordPress (ID 7), partagées entre tous les composants.
// La clé commune évite de refaire la même requête dans chaque section.
export const useWpPage = async () => {
  const config = useRuntimeConfig()
  const wpApi = config.public.wpApi

  // Sans URL d'API, `useFetch` appellerait `undefined/acf/...` en relatif,
  // c'est-à-dire le serveur Nuxt lui-même → boucle infinie (EMFILE).
  if (!wpApi) {
    console.error('NUXT_PUBLIC_WP_API n\'est pas défini : contenu WordPress non chargé.')
    return computed(() => null)
  }

  const { data, error } = await useFetch(`${wpApi}/acf/v3/pages/7`, { key: 'wp-page-7' })
  if (error.value) {
    console.error('Erreur lors de la récupération des données WordPress :', error.value)
  }

  return computed(() => data.value?.acf ?? null)
}
