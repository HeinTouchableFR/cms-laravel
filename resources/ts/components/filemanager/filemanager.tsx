import {
  File as FileType,
  Folder as FolderType,
} from '@/components/filemanager/types'
import { useEffect, useRef, useState } from 'react'
import { jsonFetch } from '@/functions/api'
import { objToSearchParams } from '@/functions/url'
import { useAsyncEffect } from '@/functions/hooks'
import { classNames } from '@/functions/dom'
import { Folder } from '@/components/filemanager/folder'
import { File } from '@/components/filemanager/file'
import { pathsToTree } from '@/functions/path'

type Props = {
  dragOver: boolean
  apiEndpoint: string
  onSelectFile: (file: FileType) => void
}

export function FileManager({ dragOver, apiEndpoint, onSelectFile }: Props) {
  const searchInput = useRef<HTMLInputElement>(null)
  const inputAttachmentRef = useRef<HTMLInputElement>(null)
  const [folders, setFolders] = useState<FolderType[] | []>([])
  const [files, setFiles] = useState<FileType[] | []>([])
  const [currentFolder, setCurrentFolder] = useState<FolderType | undefined>()

  const handleNewfile = (e: CustomEvent) => {
    setFiles(files => [e.detail, ...files])
  }
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!searchInput.current) {
      return
    }
    loadFiles({ q: searchInput.current.value })
  }
  const handleSelectFolder = (folder: FolderType) => {
    if (currentFolder === folder) {
      return
    }
    setCurrentFolder(folder)
    if (folder.children.length === 0) {
      loadFiles({ path: folder.path })
    }
  }
  const handleDelete = async (file: FileType) => {
    await jsonFetch(`${apiEndpoint}/${file.id}`, { method: 'DELETE' })
    if (files === null) {
      return
    }
    setFiles(files => files.filter(f => file !== f))
  }

  const loadFiles = async (params: { q?: string; path?: string }) => {
    setFiles([])
    const url = new URL(`${apiEndpoint}/files`, location.href)
    url.search = objToSearchParams(params).toString()
    const files = await jsonFetch(url)
    setFiles(files)
  }

  useAsyncEffect(async () => {
    const folders = await jsonFetch(`${apiEndpoint}/folders`)
    setFolders(pathsToTree(folders))
  }, [])

  useAsyncEffect(async () => {
    const files = await jsonFetch(`${apiEndpoint}/files`)
    setFiles(files)
  }, [])

  useEffect(() => {
    if (inputAttachmentRef.current) {
      inputAttachmentRef.current.addEventListener('attachment', e => {
        handleNewfile(e as CustomEvent)
      })
    }
  }, [inputAttachmentRef])

  return (
    <div className={classNames('filemanager', dragOver ? 'has-dragover' : '')}>
      <input
        ref={inputAttachmentRef}
        type='text'
        is='input-attachment'
        data-endpoint={apiEndpoint}
      />
      <aside>
        <form onSubmit={handleSearch} className='form-group'>
          <label htmlFor='file-search' className='bloc__title'>
            Rechercher
          </label>
          <input
            type='search'
            placeholder='e.g. image.png'
            id='file-search'
            name='q'
            ref={searchInput}
          />
        </form>
        <hr />
        <div className='bloc'>
          <div className='bloc__title'>Dossiers</div>
          <div className='hierarchy'>
            {folders === null ? (
              <div className='loader'></div>
            ) : (
              folders.map(folder => (
                <Folder
                  key={folder.folder}
                  folder={folder}
                  currentFolder={currentFolder}
                  onSelect={handleSelectFolder}
                />
              ))
            )}
          </div>
        </div>
      </aside>
      <main className='relative'>
        {files === null ? (
          <div className='loader'></div>
        ) : (
          <table cellSpacing='0'>
            <thead>
              <tr>
                <th className='th-image'>Image</th>
                <th>Nom</th>
                <th>Taille</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map(file => (
                <File
                  key={file.id}
                  file={file}
                  onDelete={handleDelete}
                  onSelect={onSelectFile}
                />
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  )
}
