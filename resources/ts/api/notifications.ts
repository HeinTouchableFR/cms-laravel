import { jsonFetch } from "@heintouchable/functions";

type NotificationType = {
  id: number;
  message: string;
  url: string;
  created_at: string;
};

/**
 * Charge les notifications (en Ajax) et se connecte au SSE
 */
export async function loadNotifications(
  callback: (notification: NotificationType) => NotificationType
) {
  // On récupère les dernières notifications
  const notifications = await jsonFetch(`/api/notifications?count=15`);
  notifications['data'].reverse();
  notifications['data'].forEach((notification: NotificationType) =>
    callback(notification)
  );
}
