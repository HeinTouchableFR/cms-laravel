import { jsonFetch } from "@heintouchable/functions/";

/**
 * Trouve tous les commentaires de la cible
*/
export async function findAllComments(target: number) {
  return await jsonFetch(`/api/comments?content=${target}`);
}

type bodyProps = {
  target: number;
  username?: string;
  email?: string;
  content: string;
};
/**
 * Ajoute un commentaire
*/
export async function addComment(body: bodyProps) {
  return jsonFetch("/api/comments", {
    method: "POST",
    body,
  });
}

/**
 * Supprime un commentaire
*/
export async function deleteComment(id: number) {
  return jsonFetch(`/api/comments/${id}`, {
    method: "DELETE",
  });
}

/**
 * Met à jour un commentaire
*/
export async function updateComment(id: number, content: string) {
  return jsonFetch(`/api/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify({ content }),
  });
}
