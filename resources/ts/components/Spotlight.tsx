import { useEffect, useState } from 'react'
import '@css/modules/admin/_spotlight.scss'
import { useToggle } from '@/functions/hooks'
import { classNames } from '@/functions/dom'
import { Field } from '@/components/Form/Field/Field'
import { Modal } from '@/components/Modal'

type Link = {
  link: string | null
  name: string
}

export function Spotlight({}) {
  const [links, setLinks] = useState<Link[]>([])
  const [isVisible, toggleVisibility] = useToggle()
  const [search, setSearch] = useState('')
  const [index, setIndex] = useState(0)
  const matches = getMatches(links, search)

  const handleInput = (e: any) => {
    setIndex(0)
    setSearch(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    let direction
    if (e.key === 'ArrowUp') {
      direction = -1
    } else if (e.key === 'ArrowDown') {
      direction = 1
    } else if (e.key === 'Enter') {
      window.location.href = matches[index]?.link || ''
      return
    } else {
      return
    }
    const newIndex = index + direction
    if (newIndex >= 0 && newIndex < matches.length) {
      setIndex(newIndex)
    }
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (['k', ' '].includes(e.key) && e.ctrlKey) {
        e.preventDefault()
        toggleVisibility()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [toggleVisibility])

  useEffect(() => {
    setLinks(
      Array.from(document.querySelectorAll('.admin nav a')).map(a => {
        const text = (a as HTMLElement).innerText.trim()
        return {
          link: a.getAttribute('href'),
          name: text === '' ? 'Dashboard' : text,
        }
      }),
    )
  }, [])

  return isVisible ? (
    <Modal className='spotlight' onClose={toggleVisibility}>
      <Field
        placeholder='Où voulez vous aller ?'
        onInput={handleInput}
        onKeyDown={handleKeyPress}
        autofocus
      />
      {matches.length > 0 && (
        <ul className='spotlight-suggestions'>
          {matches.map((match, i: number) => (
            <li key={match?.link}>
              <a
                className={classNames(i === index ? 'active' : '')}
                href={match?.link || '#'}
              >
                {match?.highlight}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Modal>
  ) : (
    <></>
  )
}

function getMatches(links: Link[], search: string) {
  if (!search) {
    return []
  }
  let regexp = '\\b(.*)'
  for (const i in Array.from(search)) {
    regexp += `(${search[i]})(.*)`
  }
  regexp += '\\b'

  return links
    .map(link => {
      const results = link.name.match(new RegExp(regexp, 'i'))
      if (results) {
        const highlight: any[] = []
        for (const i in results) {
          if (parseInt(i, 10) > 0) {
            highlight.push(
              parseInt(i, 10) % 2 === 0 ? (
                <mark>{results[i]}</mark>
              ) : (
                results[i]
              ),
            )
          }
        }
        return {
          ...link,
          highlight,
        }
      }
      return null
    })
    .filter(link => link !== null)
}
