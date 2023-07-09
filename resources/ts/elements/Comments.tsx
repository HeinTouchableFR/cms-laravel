import {
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  addComment,
  deleteComment,
  findAllComments,
  updateComment,
} from '@/api/comments'
import { Flex } from '@/components/Layout'
import { useAsyncEffect, useVisibility } from '@/functions/hooks'
import { canManage, isAuthenticated } from '@/functions/auth'
import { catchViolations } from '@/functions/api'
import Icon from '@/components/Icon'
import { Field } from '@/components/Form/Field/Field'
import { Button } from '@/components/Button'

type CommentsProps = {
  target: number
  parent?: number
}

type Comment = {
  created_at: number
  parent: number
  id: number
  user_id: number
  content: string
  username: string
  avatar: string
}

type StateProps = {
  comments: Comment[]
  editing?: string | number | null
  focus?: string | number | null
  reply?: string | number | null
}

/**
 * Affiche les commentaires associés à un contenu
 *
 * @param {{target: number}} param0
 */
export default function Comments({ target, parent }: CommentsProps) {
  const element = useRef(null)
  const [state, setState] = useState<StateProps>({
    editing: null, // ID du commentaire en cours d'édition
    comments: [], // Liste des commentaires
    focus: null, // Commentaire à focus
    reply: null, // Commentaire auquel on souhaite répondre
  })
  const count = state.comments ? state.comments.length : null
  const isVisible = useVisibility(parent)
  const comments = useMemo(() => {
    if (state.comments === null) {
      return null
    }
    return state.comments
      .filter(c => c.parent === null)
      .sort((a, b) => b.created_at - a.created_at)
  }, [state.comments])

  // Trouve les commentaires enfant d'un commentaire
  function repliesFor(comment: Comment) {
    return state.comments?.filter(
      c => c.parent?.toString() === comment.id.toString(),
    )
  }

  // On commence l'édition d'un commentaire
  const handleEdit = useCallback((comment: Comment) => {
    setState(s => ({
      ...s,
      editing: s.editing === comment.id ? null : comment.id,
    }))
  }, [])

  // On met à jour (via l'API un commentaire)
  const handleUpdate = useCallback(
    async (comment: Comment, content: string) => {
      const newComment = {
        ...(await updateComment(comment.id, content)),
        parent: comment.parent,
      }
      setState(s => ({
        ...s,
        editing: null,
        comments: s.comments.map(c => (c === comment ? newComment : c)),
      }))
    },
    [],
  )

  // On supprime un commentaire
  const handleDelete = useCallback(async (comment: Comment) => {
    await deleteComment(comment.id)
    setState(s => ({
      ...s,
      comments: s.comments.filter(c => c !== comment),
    }))
  }, [])

  // On répond à un commentaire
  const handleReply = useCallback((comment: Comment) => {
    setState(s => ({ ...s, reply: comment.parent || comment.id }))
  }, [])
  const handleCancelReply = useCallback(() => {
    setState(s => ({ ...s, reply: null }))
  }, [])

  // On crée un nouveau commentaire
  const handleCreate = useCallback(
    async (data: any, parent: string | undefined) => {
      data = { ...data, target, parent }
      const newComment = await addComment(data)
      setState(s => ({
        ...s,
        focus: newComment.id,
        reply: null,
        comments: [...s.comments, newComment],
      }))
    },
    [target],
  )

  // On scroll jusqu'à l'élément si l'ancre commence par un "c"
  useAsyncEffect(async () => {
    if (window.location.hash.startsWith('#c')) {
      const comments = await findAllComments(target)
      setState(s => ({
        ...s,
        comments,
        focus: window.location.hash.replace('#c', ''),
      }))
    }
  }, [element])

  // On charge les commentaires dès l'affichage du composant
  useAsyncEffect(async () => {
    if (isVisible) {
      const comments = await findAllComments(target)
      setState(s => ({ ...s, comments }))
    }
  }, [target, isVisible])

  // On se focalise sur un commentaire
  useEffect(() => {
    if (state.focus && comments) {
      const element = document.getElementById(`c${state.focus}`)
      if (element) {
        element.scrollTo()
      }
      setState(s => ({ ...s, focus: null }))
    }
  }, [state.focus, comments])

  // On rend la liste des commentaires
  return (
    <div className='comment-area' ref={element}>
      <div className='comments__title'>
        {count === null ? (
          <skeleton-box text='3 Commentaires' />
        ) : (
          <>
            {count} commentaire{count > 1 ? 's' : ''}
          </>
        )}
      </div>
      <CommentForm onSubmit={handleCreate} parent={null} />
      <hr />
      <div className='comment-list'>
        {comments ? (
          comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              editing={state.editing === comment.id}
              onEdit={handleEdit}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onReply={handleReply}
            >
              {repliesFor(comment)?.map(reply => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  editing={state.editing === reply.id}
                  onEdit={handleEdit}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                  onReply={handleReply}
                />
              ))}
              {state.reply === comment.id && (
                <CommentForm
                  onSubmit={handleCreate}
                  parent={comment.id}
                  onCancel={handleCancelReply}
                />
              )}
            </Comment>
          ))
        ) : (
          <>
            <FakeComment />
            <FakeComment />
            <FakeComment />
          </>
        )}
      </div>
    </div>
  )
}

const FakeComment = memo(() => {
  return (
    <div class='comment'>
      <skeleton-box
        className='comment__avatar'
        width='40'
        height='40'
        rounded
      />
      <div className='comment__meta'>
        <skeleton-box className='comment__author' text='John Doe comm' />
        <div className='comment_actions'>
          <skeleton-box className='comment__date' text='Il y a 9 mois' />
        </div>
      </div>
      <skeleton-box className='comment__content' width='921' height='90' />
    </div>
  )
})

type CommentProps = PropsWithChildren<{
  comment: Comment
  editing: boolean
  onEdit: (comment: Comment) => void
  onUpdate: (comment: Comment, content: string) => Promise<void>
  onDelete: (comment: Comment) => void
  onReply: (comment: Comment) => void
}>

/**
 * Affiche un commentaire
 */
const Comment = memo(
  ({
    comment,
    editing,
    onEdit,
    onUpdate,
    onDelete,
    onReply,
    children,
  }: CommentProps) => {
    const anchor = `#c${comment.id}`
    const canEdit = canManage(comment.user_id.toString())
    const className = ['comment']
    const textarea = useRef<HTMLTextAreaElement>(null)
    const [loading, setLoading] = useState(false)

    const handleEdit = () => {
      if (canEdit) {
        onEdit(comment)
      }
    }

    async function handleUpdate(e: any) {
      e.preventDefault()
      setLoading(true)
      await onUpdate(comment, textarea.current?.value ?? '')
      setLoading(false)
    }

    async function handleDelete(e: any) {
      e.preventDefault()
      if (confirm('Voulez vous vraiment supprimer ce commentaire ?')) {
        setLoading(true)
        await onDelete(comment)
      }
    }

    function handleReply(e: any) {
      e.preventDefault()
      onReply(comment)
    }

    // On focus automatiquement le champ quand il devient visible
    useEffect(() => {
      if (textarea.current) {
        textarea.current.focus()
      }
    }, [editing])

    let content: JSX.Element | string = comment.content
    if (editing) {
      content = (
        <form onSubmit={handleUpdate} className='form-group stack'>
          <textarea
            is='textarea-autogrow m-bottom-2'
            ref={textarea}
            defaultValue={comment.content}
          />
          <Flex>
            <Button type='submit' loading={loading}>
              Modifier
            </Button>
            <Button type='reset' onClick={handleEdit}>
              Annuler
            </Button>
          </Flex>
        </form>
      )
    }
    if (loading) {
      className.push('is-loading')
    }

    return (
      <div className={className.join(' ')} id={`c${comment.id}`}>
        <img src={comment.avatar} alt='' className='comment__avatar' />
        <div className='comment__meta'>
          <div className='comment__author'>{comment.username}</div>
          <div className='comment__actions'>
            <a className='comment__date' href={`#c${comment.id}`}>
              <time-ago time={comment.created_at} />
            </a>
            <a href={anchor} onClick={handleReply}>
              <Icon name='reply' />
              Répondre
            </a>
            {canEdit && (
              <a onClick={handleEdit}>
                <Icon name='edit' />
                Editer
              </a>
            )}
            {canEdit && (
              <a href={anchor} onClick={handleDelete} className='text-danger'>
                <Icon name='trash' />
                Supprimer
              </a>
            )}
          </div>
        </div>
        <div className='comment__content'>{content}</div>
        <div className='comment__replies'>{children}</div>
      </div>
    )
  },
)

type CommentFormProps = {
  onSubmit: (data: any, parent: string | undefined) => Promise<void>
  onCancel?: () => void
  parent: number | null
}

type Error = {
  username?: string
  content?: string
}

/**
 * Formulaire de commentaire
 * @params {{onSubmit: function, parent: number}} props
 */
function CommentForm({ onSubmit, parent, onCancel }: CommentFormProps) {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Error>({})
  const ref = useRef(null)

  const handleSubmit = useCallback(
    async (e: any) => {
      const form = e.target
      e.preventDefault()
      setLoading(true)
      const errors = (
        await catchViolations(
          onSubmit(Object.fromEntries(new FormData(form)), parent?.toString()),
        )
      )[1]
      if (errors) {
        setErrors(errors)
      } else {
        form.reset()
      }
      setLoading(false)
    },
    [onSubmit, parent],
  )

  const handleCancel = function () {
    if (onCancel) {
      onCancel()
    }
  }

  useEffect(() => {
    if (parent && ref.current) {
      scrollTo(ref.current)
    }
  }, [parent])

  return (
    <form
      className='grid'
      style={{ '--gap': 2 }}
      onSubmit={handleSubmit}
      ref={ref}
    >
      {!isAuthenticated() && (
        <>
          <Field name='username' error={errors.username} required>
            Nom d'utilisateur
          </Field>
        </>
      )}
      <div className='full'>
        <Field type='textarea' name='content' error={errors.content} required>
          Votre message
        </Field>
      </div>
      <Flex className='full'>
        <Button type='submit' loading={loading}>
          Envoyer
        </Button>
        {onCancel ? (
          <Button className='secondary' onClick={handleCancel}>
            Annuler
          </Button>
        ) : (
          <></>
        )}
      </Flex>
    </form>
  )
}
