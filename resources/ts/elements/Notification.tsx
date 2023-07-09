import { useRef, useState } from 'react'
import { SlideIn } from '@/components/Animation/SlideIn'
import { loadNotifications } from '@/api/notifications'
import { isAuthenticated, lastNotificationRead } from '@/functions/auth'
import {
  useAsyncEffect,
  useClickOutside,
  useNotificationCount,
  usePrepend,
} from '@/functions/hooks'
import { jsonFetch } from '@/functions/api'
import Loader from '@/components/Loader'
import Icon from '@/components/Icon'

type Notification = {
  id: number
  message: string
  url: string
  created_at: string
}

const OPEN = 0
const CLOSE = 1
let notificationsCache: Notification[] = []
let notificationsLoaded = false

function countUnread(
  notifications: Notification[],
  notificationReadAt: number,
) {
  return notifications.filter(({ created_at }) => {
    return notificationReadAt < Date.parse(created_at)
  }).length
}

/**
 * Contient les notifications
 *
 * @return {*}
 * @constructor
 */
export default function Notifications() {
  // Hooks
  const [state, setState] = useState(CLOSE)
  const [notifications, pushNotification] = usePrepend(notificationsCache)
  const [notificationReadAt, setNotificationReadAt] = useState(
    lastNotificationRead(),
  )
  const [loading, setLoading] = useState(!notificationsLoaded)
  const unreadCount = countUnread(notifications, notificationReadAt)
  useNotificationCount(unreadCount)
  notificationsCache = notifications

  // Méthodes
  const openMenu = (e: any) => {
    e.preventDefault()
    setState(OPEN)
    if (unreadCount > 0) {
      setNotificationReadAt(new Date())
      jsonFetch('/api/notifications/read', { method: 'post' }).catch(
        console.error,
      )
    }
  }
  const closeMenu = () => {
    setState(CLOSE)
  }

  // On charge les notifications la première fois
  useAsyncEffect(async () => {
    if (isAuthenticated() && !notificationsLoaded) {
      await loadNotifications(pushNotification)
      setLoading(false)
      notificationsLoaded = true
    }
  }, [])

  // Le système de notification ne fonction que pour les utilisateurs
  if (!isAuthenticated()) return null

  return (
    <>
      <button onClick={openMenu} aria-label='Voir les notifications'>
        <Icon name='bell' />
      </button>
      <Badge count={unreadCount} />
      <SlideIn className='notifications' show={state === OPEN}>
        <Popup
          loading={loading}
          onClickOutside={closeMenu}
          notifications={notifications}
          notificationReadAt={notificationReadAt}
        />
      </SlideIn>
    </>
  )
}

type BadgeProps = {
  count: number
}

/**
 * Badge contenant le nombre de notifications
 */
function Badge({ count }: BadgeProps) {
  if (count <= 0) {
    return null
  }
  return count < 10 ? (
    <span className='notification-badge'>{count}</span>
  ) : (
    <span className='notification-badge'>9+</span>
  )
}

type PopupProps = {
  notifications: Notification[]
  onClickOutside: () => void
  loading: boolean
  notificationReadAt: number
}

/**
 * Popup contenant les notifications
 */
function Popup({
  notifications = [],
  onClickOutside = () => {},
  loading = false,
  notificationReadAt,
  ...props
}: PopupProps) {
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, onClickOutside)

  return (
    <div ref={ref} {...props}>
      <div className='notifications_title'>
        Nouveaux messages
        <button aria-label='Fermer' onClick={onClickOutside}>
          <Icon name='cross' />
        </button>
      </div>
      <div className='notifications_body'>
        {loading && <Loader />}
        {notifications.length === 0 ? (
          <span className='notifications_body-empty'>
            Vous n'avez aucune notification :(
          </span>
        ) : (
          notifications.map(n => (
            <NotificationComponent
              key={n.id}
              notificationReadAt={notificationReadAt}
              {...n}
            />
          ))
        )}
      </div>
      <a href='/profile' className='notifications_footer'>
        Toutes les notifications
      </a>
    </div>
  )
}

type NotificationComponentProps = {
  url: string
  message: string
  created_at: string
  notificationReadAt: number
}

/**
 * Représente une notification
 */
function NotificationComponent({
  url,
  message,
  created_at,
  notificationReadAt,
}: NotificationComponentProps) {
  const isRead = notificationReadAt > Date.parse(created_at)
  const className = `notifications_item ${isRead ? 'is-read' : ''}`
  const time = Date.parse(created_at) / 1000
  return (
    <a href={url} className={className}>
      <div dangerouslySetInnerHTML={{ __html: message }} />
      <small className='text-muted'>
        <time-ago time={time} />
      </small>
    </a>
  )
}
