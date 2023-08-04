import { File as FileType } from '@/components/filemanager/types'
import { human } from '@/functions/functions'
import React from 'react'

type Props = {
  file: FileType
  onSelect: (file: FileType) => void
  onDelete: (file: FileType) => void
}

export function File({ file, onSelect, onDelete }: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(file.url)
  }
  const handleDelete = () => {
    if (confirm('Voulez vous vraiment supprimer ce fichier ?')) {
      onDelete(file)
    }
  }

  return (
    <tr>
      <td onClick={() => onSelect(file)}>
        {file.thumbnail.includes('json') ? (
          <dotlottie-player
            autoplay
            loop
            src={`/storage/attachments/${file.name}`}
          ></dotlottie-player>
        ) : (
          <img src={file.thumbnail} alt={file.thumbnail} loading='lazy' />
        )}
      </td>
      <td onClick={() => onSelect(file)}>{file.name}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{human(file.size)}</td>
      <td>
        <button className='copy' onClick={handleCopy}>
          <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
          >
            <path
              d='M7 8H1c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1z'
              fill='currentColor'
            />
            <path d='M11 4H2v2h8v8h2V5c0-.6-.4-1-1-1z' fill='currentColor' />
            <path d='M15 0H6v2h8v8h2V1c0-.6-.4-1-1-1z' fill='currentColor' />
          </svg>
        </button>
        <button className='delete' onClick={handleDelete}>
          <svg
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1 0h14c.6 0 1 .4 1 1v14c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V1c0-.6.4-1 1-1zm9.1 11.5l1.4-1.4L9.4 8l2.1-2.1-1.4-1.4L8 6.6 5.9 4.5 4.5 5.9 6.6 8l-2.1 2.1 1.4 1.4L8 9.4l2.1 2.1z'
              fill='currentColor'
            />
          </svg>
        </button>
      </td>
    </tr>
  )
}
