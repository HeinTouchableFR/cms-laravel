import {jsonFetch} from '@/functions/api'

/**
 * Trouve tous les commentaires de la cible
 */
export async function findAllComments(target: number) {
  const response = await jsonFetch(`/api/comments?content=${target}`)
  return response['data']
}

type bodyProps = {
  target: number
  username?: string
  email?: string
  content: string
}

/**
 * Ajoute un commentaire
 */
export async function addComment(body: bodyProps) {
  const response = await jsonFetch('/api/comments', {
    method: 'POST',
    body,
  })
  return response['data']
}

/**
 * Supprime un commentaire
 */
export async function deleteComment(id: number) {
  return jsonFetch(`/api/comments/${id}`, {
    method: 'DELETE',
  })
}

/**
 * Met à jour un commentaire
 */
export async function updateComment(id: number, content: string) {
  const response = await jsonFetch(`/api/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ content }),
  })
  return response['data']
}
