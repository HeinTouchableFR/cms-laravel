/**
 * Vérifie si l'utilisateur est admin
 * @return {boolean}
 */
export function isAdmin() {
  return window.cms.ADMIN === true
}

/**
 * Vérifie si l'utilisateur est connecté
 * @return {boolean}
 */
export function isAuthenticated() {
  return window.cms.USER !== null
}

/**
 * Vérifie si l'utilisateur est connecté
 * @return {boolean}
 */
export function lastNotificationRead() {
  return window.cms.NOTIFICATION
}

/**
 * Renvoie l'id de l'utilisateur
 * @return {number|null}
 */
export function getUserId() {
  return window.cms.USER
}

/**
 * Vérifie si l'utilisateur connecté correspond à l'id passé en paramètre
 * @return {boolean}
 */
export function canManage(userId?: string) {
  if (isAdmin()) {
    return true
  }
  if (!userId) {
    return false
  }
  return window.cms.USER === parseInt(userId, 10)
}
