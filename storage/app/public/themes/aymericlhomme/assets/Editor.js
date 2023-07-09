var __defProp = Object.defineProperty
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value)
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value)
  return value
}

// react-shim.js
// src/components/ui/Spinner.tsx
import {
  ClassNames,
  css,
  Global,
  keyframes as keyframes3,
  keyframes as keyframes4,
  keyframes as keyframes5,
  keyframes,
  keyframes as keyframes2,
} from '@emotion/react'
// src/Editor.tsx
// src/components/ui/Tabs.tsx
// src/components/ui/Flex.tsx
// src/components/ui/Animation/AnimatedPresence.tsx
// src/components/ui/Animation/PresenceChild.tsx
// src/components/ui/Animation/LayoutGroupContext.tsx
// src/components/Sidebar/SidebarBloc.tsx
// src/components/Sidebar/SidebarHeading.tsx
// src/components/Sidebar/FieldsRenderer.tsx
// src/components/Sidebar/Sidebar.tsx
// src/components/Preview/Preview.tsx
// src/components/Preview/PreviewItem.tsx
// src/hooks/usePreview.ts
// src/components/ResizeBar.tsx
// src/components/Blocs/BlocSelector.tsx
// src/hooks/useClipboardPaste.ts
// src/components/Editor/TiptapEditor/TiptapToolbar.tsx
// src/components/Editor/TiptapEditor/TiptapColorPicker.tsx
// src/fields/Tabs.tsx
import React10 from 'react'
import React, * as React2 from 'react'
import {
  Children,
  cloneElement as cloneElement2,
  cloneElement as cloneElement3,
  createContext,
  forwardRef,
  forwardRef as forwardRef2,
  isValidElement,
  memo,
  useCallback,
  useCallback as useCallback2,
  useCallback as useCallback3,
  useCallback as useCallback5,
  useCallback as useCallback4,
  useContext,
  useEffect as useEffect10,
  useEffect as useEffect2,
  useEffect,
  useEffect as useEffect3,
  useEffect as useEffect4,
  useEffect as useEffect5,
  useEffect as useEffect6,
  useEffect as useEffect8,
  useEffect as useEffect7,
  useEffect as useEffect9,
  useMemo as useMemo6,
  useMemo,
  useMemo as useMemo2,
  useMemo as useMemo3,
  useMemo as useMemo4,
  useMemo as useMemo5,
  useRef as useRef10,
  useRef as useRef2,
  useRef,
  useRef as useRef4,
  useRef as useRef3,
  useRef as useRef7,
  useRef as useRef6,
  useRef as useRef5,
  useRef as useRef9,
  useState,
  useState as useState2,
  useState as useState3,
  useState as useState5,
  useState as useState4,
  useState as useState7,
  useState as useState6,
  useState as useState8,
  useState as useState9,
  useState as useState10,
  useState as useState11,
  useState as useState12,
  useState as useState13,
  useState as useState14,
} from 'react'
import { createRoot } from 'react-dom/client'

// src/components/Sortable.tsx
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers'
// src/functions/array.ts
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

// src/components/ui/Button.tsx
// src/components/ui/UnstyledButton.tsx
// src/components/ui/DragHandle.tsx
// src/components/ui/Field.tsx
// src/components/ui/Flash.tsx
// src/components/ui/Card.tsx
// src/components/Sidebar/SidebarBlocWrapper.tsx
// src/components/Sidebar/SidebarBlocs.tsx
// src/components/Sidebar/Sidebar.tsx
// src/components/Sidebar/SidebarFooter.tsx
// src/components/Sidebar/SidebarEmpty.tsx
// src/components/Sidebar/SidebarTemplates.tsx
// src/components/Blocs/BlocSelectorSearch.tsx
// src/components/Blocs/BlocSelectorGrid.tsx
// src/components/Layout.tsx
// src/components/BaseStyles.tsx
// src/components/Editor/TiptapEditor/TiptapToolbarButton.tsx
// src/components/Editor/TiptapEditor/TiptapDropdown.tsx
import styled from '@emotion/styled'
import styled2 from '@emotion/styled'
import styled3 from '@emotion/styled'
import styled4 from '@emotion/styled'
import styled5 from '@emotion/styled'
import styled6 from '@emotion/styled'
import styled7 from '@emotion/styled'
import styled8 from '@emotion/styled'
import styled9 from '@emotion/styled'
import styled10 from '@emotion/styled'
import styled11 from '@emotion/styled'
import styled12 from '@emotion/styled'
import styled13 from '@emotion/styled'
import styled14 from '@emotion/styled'
import styled15 from '@emotion/styled'
import styled19 from '@emotion/styled'
import styled16 from '@emotion/styled'
import styled17 from '@emotion/styled'
import styled18 from '@emotion/styled'
import styled20 from '@emotion/styled'
import styled21 from '@emotion/styled'
import styled22 from '@emotion/styled'
import styled23 from '@emotion/styled'
import styled24 from '@emotion/styled'
import styled25 from '@emotion/styled'
import styled29 from '@emotion/styled'
import styled26 from '@emotion/styled'
import styled27 from '@emotion/styled'
import styled28 from '@emotion/styled'
import styled30 from '@emotion/styled'
// src/components/ui/ButtonIcon.tsx
// src/components/ui/Animation/AnimatedPresence.tsx
// src/components/ui/Icons.tsx
// src/components/Sortable.tsx
// src/store.tsx
// src/components/Sidebar/SidebarFields.tsx
// src/components/Preview/PreviewAddFloating.tsx
// src/components/Preview/PreviewItems.tsx
// src/components/Blocs/BlocSelector.tsx
// src/components/RollbackMessage.tsx
// src/fields/Text.tsx
// src/fields/Checkbox.tsx
// src/fields/Repeater.tsx
// src/fields/ImageUrl.tsx
// src/components/Editor/TiptapEditor/TiptapIcons.tsx
// src/components/Editor/TiptapEditor/TiptapToolbar.tsx
// src/fields/Color.tsx
// src/fields/Row.tsx
// src/fields/shared/AlignmentButton.tsx
// src/fields/shared/AlignmentButtons.tsx
// src/fields/Alignment.tsx
// src/fields/Range.tsx
// src/fields/DatePicker.tsx
// src/Editor.tsx
import {
  Fragment as Fragment2,
  Fragment as Fragment3,
  Fragment as Fragment4,
  Fragment as Fragment5,
  Fragment as Fragment6,
  Fragment as Fragment7,
  Fragment as Fragment8,
  Fragment as Fragment9,
  Fragment as Fragment10,
  jsx as jsx2,
  jsx as jsx3,
  jsx as jsx4,
  jsx as jsx5,
  jsx as jsx6,
  jsx as jsx7,
  jsx as jsx8,
  jsx as jsx9,
  jsx as jsx10,
  jsx as jsx11,
  jsx as jsx12,
  jsx as jsx13,
  jsx as jsx14,
  jsx as jsx15,
  jsx as jsx16,
  jsx as jsx17,
  jsx as jsx18,
  jsx as jsx19,
  jsx as jsx20,
  jsx as jsx21,
  jsx as jsx22,
  jsx as jsx23,
  jsx as jsx24,
  jsx as jsx25,
  jsx as jsx26,
  jsx as jsx27,
  jsx as jsx28,
  jsx as jsx29,
  jsx as jsx30,
  jsx as jsx31,
  jsx as jsx32,
  jsx as jsx33,
  jsx as jsx34,
  jsx as jsx35,
  jsx as jsx36,
  jsx as jsx37,
  jsx as jsx38,
  jsx as jsx39,
  jsx as jsx40,
  jsx as jsx41,
  jsx as jsx42,
  jsx as jsx43,
  jsx as jsx44,
  jsx as jsx45,
  jsx as jsx46,
  jsx as jsx47,
  jsx as jsx48,
  jsx as jsx49,
  jsx as jsx50,
  jsx as jsx51,
  jsx as jsx52,
  jsx as jsx53,
  jsx as jsx54,
  jsx as jsx55,
  jsx as jsx56,
  jsx as jsx57,
  jsx as jsx58,
  jsx as jsx59,
  jsx as jsx60,
  jsx as jsx61,
  jsx as jsx62,
  jsxs,
  jsxs as jsxs2,
  jsxs as jsxs3,
  jsxs as jsxs4,
  jsxs as jsxs5,
  jsxs as jsxs6,
  jsxs as jsxs7,
  jsxs as jsxs8,
  jsxs as jsxs9,
  jsxs as jsxs10,
  jsxs as jsxs11,
  jsxs as jsxs12,
  jsxs as jsxs13,
  jsxs as jsxs14,
  jsxs as jsxs15,
  jsxs as jsxs16,
  jsxs as jsxs17,
  jsxs as jsxs18,
  jsxs as jsxs19,
  jsxs as jsxs20,
  jsxs as jsxs21,
  jsxs as jsxs22,
  jsxs as jsxs23,
  jsxs as jsxs24,
  jsxs as jsxs25,
  jsxs as jsxs26,
  jsxs as jsxs27,
  jsxs as jsxs28,
  jsxs as jsxs29,
  jsxs as jsxs30,
  jsxs as jsxs31,
  jsxs as jsxs32,
  jsxs as jsxs33,
  jsxs as jsxs34,
  jsxs as jsxs35,
} from '@emotion/react/jsx-runtime'
// src/components/ui/Tooltip.tsx
import Tippy from '@tippyjs/react'
import {
  Alert,
  Field as FieldUi,
  Field as FieldUi2,
  Loader as Loader2,
  Loader,
} from '@heintouchable/ui'
// src/components/ui/Modal.tsx
import { Content, Overlay, Root, Title } from '@radix-ui/react-dialog'
// src/components/Sidebar/SidebarBlocMissing.tsx.tsx
// src/components/Sidebar/SidebarBloc.tsx
// src/components/Sidebar/Actions/CopyAction.tsx
// src/components/Sidebar/SidebarBloc.tsx
// src/components/Sidebar/SidebarHeader.tsx
// src/components/Sidebar/Sidebar.tsx
// src/components/Preview/PreviewAddFloating.tsx
// src/components/Preview/PreviewItem.tsx
// src/components/Preview/PreviewAddButton.tsx
// src/components/Preview/Preview.tsx
// src/components/Blocs/BlocSelectorItem.tsx
// src/Editor.tsx
// src/Editor.tsx
// src/fields/Text.tsx
// src/fields/utils.ts
// src/fields/Checkbox.tsx
// src/fields/Repeater.tsx
// src/fields/ImageUrl.tsx
// src/components/Editor/TiptapEditor/TiptapToolbarAlign.tsx
// src/components/Editor/TiptapEditor/TiptapToolbarHeadings.tsx
// src/fields/HTMLText.tsx
// src/fields/Color.tsx
// src/fields/shared/AlignmentButton.tsx
// src/fields/Select.tsx
// src/fields/Number.tsx
// src/fields/TextAlign.tsx
import {
  capitalize,
  capitalize as capitalize2,
  cast,
  clamp,
  colorToProperty,
  colorToProperty as colorToProperty2,
  colorToProperty as colorToProperty3,
  copyToClipboard,
  deepSet,
  deepSet as deepSet2,
  indexify,
  indexify as indexify3,
  indexify as indexify2,
  offsetTop,
  prevent,
  prevent as prevent2,
  prevent as prevent4,
  prevent as prevent3,
  prevent as prevent5,
  prevent as prevent6,
  prevent as prevent7,
  prevent as prevent8,
  prevent as prevent9,
  prevent as prevent10,
  prevent as prevent11,
  prevent as prevent12,
  prevent as prevent13,
  prevent as prevent17,
  prevent as prevent14,
  prevent as prevent15,
  prevent as prevent16,
  prevent as prevent18,
  prevent as prevent19,
  stringifyFields,
  stringifyFields as stringifyFields2,
  strToDom,
  textContent,
  uniqId,
  uniqId as uniqId2,
  useAsyncEffect,
  useEffectDebounced,
  useStateDelayed,
  useStopPropagation,
  useToggle,
  useToggle as useToggle2,
  useToggle as useToggle3,
  useToggle as useToggle4,
  useUniqId,
  useUniqId as useUniqId2,
  useUniqId as useUniqId3,
  useUniqId as useUniqId4,
  useUniqId as useUniqId5,
  useUniqId as useUniqId6,
  useUniqId as useUniqId7,
  useUpdateEffect,
  useUpdateEffect as useUpdateEffect2,
} from '@heintouchable/functions'
import {
  Tabs as RadixTabs,
  TabsContent,
  TabsList as RadixTabsList,
  TabsTrigger,
} from '@radix-ui/react-tabs'

// src/components/ui/Animation/hooks.ts
import sync from 'framesync'
// src/store.tsx
import create from 'zustand'
import { combine, devtools } from 'zustand/middleware'
import createContext2 from 'zustand/context'
import { createPortal } from 'react-dom'
import { useWindowSize } from 'react-use'
// src/components/Preview/PreviewItems.tsx
import { Flipped, Flipper } from 'react-flip-toolkit'
// src/Editor.tsx
import '@heintouchable/ui/style.css'
// src/components/Editor/TiptapEditor/TiptapEditor.tsx
// src/components/Editor/TiptapEditor/TiptapToolbar.tsx
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import { Node } from '@tiptap/core'
import Text2 from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Highlight from '@tiptap/extension-highlight'
// src/components/Editor/TiptapEditor/TiptapEditor.tsx
import Paragraph from '@tiptap/extension-paragraph'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Document from '@tiptap/extension-document'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import HardBreak from '@tiptap/extension-hard-break'
import History from '@tiptap/extension-history'
import Blockquote from '@tiptap/extension-blockquote'
import * as Popover from '@radix-ui/react-popover'
// src/fields/Range.tsx
import * as Slider from '@radix-ui/react-slider'
// src/fields/DatePicker.tsx
import ReactDatePicker from 'react-datepicker'

function Button({
  children,
  icon: IconElement,
  size = 'default',
  secondary = false,
  outline = false,
  ...props
}) {
  return /* @__PURE__ */ jsxs(BaseButton, {
    css: [
      secondary && Secondary,
      size === 'small' && Small,
      outline && Outline,
    ],
    ...props,
    children: [
      IconElement &&
        /* @__PURE__ */ jsx2(IconElement, {
          size: 20,
        }),
      children,
    ],
  })
}

var BaseButton = styled.button({
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
  fontWeight: 700,
  backgroundColor: 'var(--contrast)',
  border: 'none',
  color: '#fff',
  alignSelf: 'flex-end',
  fontSize: '0.9rem',
  height: 48,
  padding: '0 1em',
  lineHeight: '1.25rem',
  cursor: 'pointer',
  borderRadius: 4,
  transition: 'background-color 0.3s',
  '&:hover, &:focus': { backgroundColor: 'var(--color-dark)' },
})
var Secondary = {
  backgroundColor: 'transparent',
  color: 'var(--contrast)',
  '&:hover, &:focus': { backgroundColor: 'var(--color-light)' },
}
var Small = {
  height: 40,
}
var Outline = {
  border: 'solid 1px var(--contrast)',
  background: 'transparent',
  color: 'var(--contrast)',
  '&:hover, &:focus': { backgroundColor: 'var(--contrast)', color: '#FFF' },
}

var UnstyledButton = styled2.button({
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  margin: 0,
  color: 'inherit',
})

function Tooltip({ content, children, visible, trigger }) {
  const tippyProps = {}
  if (trigger === 'click') {
    tippyProps.trigger = trigger
    tippyProps.hideOnClick = true
    tippyProps.interactive = true
  }
  return /* @__PURE__ */ jsx3(StyledTippy, {
    content,
    visible,
    ...tippyProps,
    children,
  })
}

var StyledTippy = styled3(Tippy)({
  backgroundColor: '#202227',
  color: '#FFF',
  padding: '.2em .5em',
  position: 'relative',
  borderRadius: '4px',
  fontSize: '.75em',
  lineHeight: 1.4,
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px',
  outline: '0',
  transitionProperty: 'transform, visibility, opacity',
  '&[data-animation=fade][data-state=hidden]': {
    transform: 'translateY(-5px)',
    opacity: 0,
  },
  '&[data-placement^=top] > .tippy-arrow': { bottom: '0' },
  '& .tippy-arrow': {
    width: '16px',
    height: '16px',
    color: '#202227',
  },
  '&[data-placement^=top] > .tippy-arrow::before': {
    bottom: '-7px',
    left: '0',
    borderWidth: '8px 8px 0',
    borderTopColor: 'initial',
    transformOrigin: 'center top',
  },
  '& .tippy-arrow::before': {
    content: '""',
    position: 'absolute',
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
  '&[data-placement^=bottom] > .tippy-arrow::before': {
    top: '-19px',
    left: '0',
    borderWidth: '8px 8px 0',
    borderTopColor: 'initial',
    transform: 'rotate(180deg)',
    transformOrigin: 'center top',
  },
})

// src/styles/ui/ButtonIcon.module.scss
var _default = {}

function ButtonIcon({
  danger,
  success,
  rotate,
  title,
  additionalStyle,
  ...props
}) {
  const style = rotate
    ? { transform: `rotate(${rotate}deg)`, ...additionalStyle }
    : additionalStyle
  const button = /* @__PURE__ */ jsx4('button', {
    ...props,
    className: `${_default['button__icon']} ${danger && _default.danger} ${
      success && _default.success
    }`,
    'aria-label': title,
    style,
  })
  if (title) {
    return /* @__PURE__ */ jsx4(Tooltip, {
      content: title,
      trigger: 'focus',
      children: button,
    })
  }
  return button
}

var DragHandle = styled4.div({
  width: 10,
  position: 'absolute',
  top: '.5rem',
  left: 3,
  bottom: '.5rem',
  cursor: 'move',
  background:
    'radial-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1) 30%, rgba(0,0,0,0) 31%, rgba(0,0,0,0.0)) left top / 5px 5px repeat',
})

function Field({
  children,
  label,
  help,
  type = 'text',
  options,
  tooltip,
  icon,
  ...props
}) {
  if (!children) {
    if (options) {
      children = /* @__PURE__ */ jsx5(FieldUi, {
        children: label,
        type: 'select',
        options,
        ...props,
      })
    } else if (['text', 'number', 'textarea'].includes(type)) {
      children = /* @__PURE__ */ jsx5(FieldUi, {
        children: label,
        type,
        ...props,
      })
    } else {
      throw new Error('Cannot render this type of field : ' + type)
    }
  }
  if (tooltip) {
    children = /* @__PURE__ */ jsx5(Tooltip, {
      content: tooltip,
      children,
    })
  }
  return /* @__PURE__ */ jsxs2('div', {
    style: { position: 'relative' },
    children: [
      /* @__PURE__ */ jsxs2('div', {
        children: [
          children,
          icon &&
            /* @__PURE__ */ jsx5(Icon, {
              children: icon,
            }),
        ],
      }),
      help &&
        /* @__PURE__ */ jsx5(HelpMessage, {
          children: help,
        }),
    ],
  })
}

var HelpMessage = styled5.div({
  fontStyle: 'italic',
  marginTop: '.5em',
  fontSize: '.8em',
})
var Wrapper = styled5.div({
  position: 'relative',
})
var Icon = styled5.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--color)',
  cursor: 'pointer',
  height: 40,
  position: 'absolute',
  right: 0,
  top: 'calc(50% - 16px)',
  width: 40,
})

function Modal({ children, title, visible, onVisibilityChange }) {
  return /* @__PURE__ */ jsxs3(Root, {
    open: visible,
    onOpenChange: onVisibilityChange,
    children: [
      /* @__PURE__ */ jsx6(ModalOverlay, {}),
      /* @__PURE__ */ jsxs3(ModalContent, {
        children: [
          /* @__PURE__ */ jsx6(ModalTitle, {
            children: title,
          }),
          /* @__PURE__ */ jsx6('div', {
            children,
          }),
          /* @__PURE__ */ jsx6(ModalClose, {
            onClick: prevent(() => onVisibilityChange(false)),
            children: /* @__PURE__ */ jsx6(IconCross, {
              size: 16,
            }),
          }),
        ],
      }),
    ],
  })
}

var FadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})
var ContentIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-48%) scale(.96)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(-50%) scale(1)',
  },
})
var ModalOverlay = styled6(Overlay)({
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  overflow: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  animation: `${FadeIn} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
})
var ModalContent = styled6(Content)({
  position: 'fixed',
  top: '50%',
  left: '0',
  right: '0',
  zIndex: 51,
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 'calc(100% - 2rem)',
  maxWidth: '1290px',
  borderRadius: '8px',
  backgroundColor: 'var(--background)',
  padding: '1.5rem 2rem',
  transform: 'translateY(-50%)',
  animation: `${ContentIn} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
})
var ModalTitle = styled6(Title)({
  fontSize: '1.5rem',
  fontWeight: 500,
  margin: 0,
  padding: 0,
  color: 'var(--color-dark)',
})
var ModalClose = styled6(ButtonIcon)({
  position: 'absolute',
  top: '1.2rem',
  right: '1.5rem',
})

var TabsList = styled7(RadixTabsList)({
  display: 'flex',
  gap: '.5rem',
  marginBottom: '1em',
})
var TabButton = styled7(TabsTrigger)({
  color: 'var(--color-dark)',
  backgroundColor: 'var(--color-light)',
  borderRadius: 56,
  padding: '.6rem 1rem',
  border: 'none',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'color .3s, background-color .3s',
})
var TabButtonSelected = {
  color: 'var(--color-light)',
  backgroundColor: 'var(--contrast)',
}

function Tabs({ children, ...props }) {
  const childrenArray = React.Children.toArray(children)
  const [currentTab, setCurrentTab] = useState(childrenArray[0]?.props.title)
  return /* @__PURE__ */ jsxs4(RadixTabs, {
    value: currentTab,
    onValueChange: setCurrentTab,
    children: [
      /* @__PURE__ */ jsx7(TabsList, {
        ...props,
        children: childrenArray.map(child =>
          /* @__PURE__ */ jsx7(
            TabButton,
            {
              css: [currentTab === child.props.title && TabButtonSelected],
              value: child.props.title,
              children: child.props.title,
            },
            child.props.title,
          ),
        ),
      }),
      childrenArray.map(child =>
        /* @__PURE__ */ jsx7(
          TabsContent,
          {
            value: child.props.title,
            children: child,
          },
          child.props.title,
        ),
      ),
    ],
  })
}

function Tab(props) {
  return /* @__PURE__ */ jsx7('div', {
    ...props,
  })
}

Tabs.Tab = Tab

var Flex = forwardRef(({ between, column, ...props }, ref) => {
  return /* @__PURE__ */ jsx8(Wrapper2, {
    ...props,
    ref,
    css: [between && Between, column && Column],
  })
})
Flex.displayName = 'Flex'
var Wrapper2 = styled8.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ({ gap = 1 }) => ({
    gap: gap + 'em',
    gridGap: gap + 'em',
  }),
)
var Between = {
  justifyContent: 'space-between',
}
var Column = {
  display: 'grid',
  alignContent: 'flex-start',
  gridTemplateColumns: '1fr',
  alignItems: 'flex-start',
}

function useUnmountEffect(callback) {
  return useEffect(() => () => callback(), [])
}

function useForceUpdate() {
  const isUnmountingRef = useRef(false)
  const [forcedRenderCount, setForcedRenderCount] = useState2(0)
  useUnmountEffect(() => (isUnmountingRef.current = true))
  const forceRender = useCallback(() => {
    !isUnmountingRef.current && setForcedRenderCount(forcedRenderCount + 1)
  }, [forcedRenderCount])
  const deferredForceRender = useCallback(
    () => sync.postRender(forceRender),
    [forceRender],
  )
  return [deferredForceRender, forcedRenderCount]
}

function useConstant(init) {
  const ref = useRef(null)
  if (ref.current === null) {
    ref.current = init()
  }
  return ref.current
}

var Base = {
  animationDuration: '.7s',
  animationTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
  animateFill: 'both',
}
var PresenceChild = ({
  children,
  isPresent,
  onExitComplete,
  in: inKeyframes,
  out: outKeyframes,
}) => {
  const presenceChildren = useConstant(newChildrenMap)
  const animationName = isPresent ? inKeyframes : outKeyframes
  useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false))
  }, [isPresent])
  return /* @__PURE__ */ jsx9(ClassNames, {
    children: ({ css: css2, cx }) =>
      React2.cloneElement(children, {
        className: cx(
          children.props.className,
          css2({
            ...Base,
            animationName: animationName.toString(),
          }),
        ),
        onAnimationEnd: isPresent ? null : onExitComplete,
      }),
  })
}

function newChildrenMap() {
  return /* @__PURE__ */ new Map()
}

var LayoutGroupContext = createContext({})

function getChildKey(child) {
  return child.key || ''
}

function updateChildLookup(children, allChildren) {
  const seenChildren = true ? /* @__PURE__ */ new Set() : null
  children.forEach(child => {
    const key = getChildKey(child)
    if (seenChildren) {
      if (seenChildren.has(key)) {
        console.warn(
          `Children of AnimatePresence require unique keys. "${key}" is a duplicate.`,
        )
      }
      seenChildren.add(key)
    }
    allChildren.set(key, child)
  })
}

function onlyElements(children) {
  const filtered = []
  Children.forEach(children, child => {
    if (isValidElement(child)) filtered.push(child)
  })
  return filtered
}

var AnimatePresence = ({
  children,
  in: inKeyframes,
  out: outKeyframes,
  exitBeforeEnter,
}) => {
  let [forceRender] = useForceUpdate()
  const forceRenderLayoutGroup = useContext(LayoutGroupContext).forceRender
  if (forceRenderLayoutGroup) forceRender = forceRenderLayoutGroup
  const isInitialRender = useRef2(true)
  const isMounted = useRef2(true)
  useEffect2(
    () => () => {
      isMounted.current = false
    },
    [],
  )
  const filteredChildren = onlyElements(children)
  const presentChildren = useRef2(filteredChildren)
  const allChildren = useRef2(/* @__PURE__ */ new Map()).current
  const exiting = useRef2(/* @__PURE__ */ new Set()).current
  updateChildLookup(filteredChildren, allChildren)
  if (isInitialRender.current) {
    isInitialRender.current = false
    return /* @__PURE__ */ jsx10(Fragment2, {
      children: filteredChildren.map(child =>
        /* @__PURE__ */ jsx10(
          PresenceChild,
          {
            isPresent: true,
            in: inKeyframes,
            out: outKeyframes,
            children: child,
          },
          getChildKey(child),
        ),
      ),
    })
  }
  let childrenToRender = [...filteredChildren]
  const presentKeys = presentChildren.current.map(getChildKey)
  const targetKeys = filteredChildren.map(getChildKey)
  const numPresent = presentKeys.length
  for (let i = 0; i < numPresent; i++) {
    const key = presentKeys[i] || ''
    if (targetKeys.indexOf(key) === -1) {
      exiting.add(key)
    } else {
      exiting.delete(key)
    }
  }
  if (exitBeforeEnter && exiting.size) {
    childrenToRender = []
  }
  exiting.forEach(key => {
    if (targetKeys.indexOf(key) !== -1) return
    const child = allChildren.get(key)
    if (!child) return
    const insertionIndex = presentKeys.indexOf(key)
    const onExit = () => {
      allChildren.delete(key)
      exiting.delete(key)
      const removeIndex = presentChildren.current.findIndex(
        presentChild => presentChild.key === key,
      )
      presentChildren.current.splice(removeIndex, 1)
      if (!exiting.size) {
        presentChildren.current = filteredChildren
        if (!isMounted.current) {
          return
        }
        forceRender()
      }
    }
    childrenToRender.splice(
      insertionIndex,
      0,
      /* @__PURE__ */ jsx10(
        PresenceChild,
        {
          isPresent: false,
          onExitComplete: onExit,
          in: inKeyframes,
          out: outKeyframes,
          children: child,
        },
        getChildKey(child),
      ),
    )
  })
  childrenToRender = childrenToRender.map(child => {
    const key = child.key
    return exiting.has(key)
      ? child
      : /* @__PURE__ */ jsx10(
          PresenceChild,
          {
            isPresent: true,
            in: inKeyframes,
            out: outKeyframes,
            children: child,
          },
          getChildKey(child),
        )
  })
  presentChildren.current = childrenToRender
  if (exitBeforeEnter && childrenToRender.length > 1) {
    console.warn(
      `You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.`,
    )
  }
  return /* @__PURE__ */ jsx10(Fragment2, {
    children: exiting.size
      ? childrenToRender
      : childrenToRender.map(child => cloneElement2(child)),
  })
}

function Flash({ children, action, onClick, duration, onHide }) {
  return /* @__PURE__ */ jsx11(AnimatePresence, {
    in: FlashIn,
    out: FlashOut,
    children:
      children &&
      /* @__PURE__ */ jsx11(Alert, {
        duration,
        isFloating: true,
        message: children.toString(),
        type: 'success',
      }),
  })
}

var Wrapper3 = styled9(Flex)({
  position: 'fixed',
  bottom: '1rem',
  right: '2rem',
  color: 'var(--background)',
  background: 'var(--color-dark)',
  zIndex: 1001,
  padding: '1em',
  borderRadius: '4px',
  width: '460px',
  fontWeight: 500,
})
var FlashButton = styled9(Button)({
  border: 'solid 1px var(--background)',
  backgroundColor: 'transparent',
})
var ProgressKeyframe = keyframes2({
  from: {
    transform: 'scaleX(0)',
  },
  to: {
    transform: 'scaleX(1)',
  },
})
var Progress = styled9.div({
  display: 'block',
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: '4px',
  transformOrigin: '0 0',
  backgroundColor: 'var(--contrast)',
  animation: `${ProgressKeyframe} 1s both linear`,
})
var FlashIn = keyframes2({
  from: {
    transform: 'translateX(3em);',
    opacity: 0,
  },
  to: {
    transform: 'translateX(0)',
    opacity: 1,
  },
})
var FlashOut = keyframes2({
  from: {
    transform: 'translateX(0)',
    opacity: 1,
  },
  to: {
    transform: 'translateX(-3em);',
    opacity: 0,
  },
})

// src/components/ui/Styles.ts
var Styles = {
  Mosaic: {
    backgroundColor: '#d0d0d0',
    backgroundImage:
      'linear-gradient(45deg, var(--color-transparent) 25%, transparent 25%), linear-gradient(-45deg, var(--color-transparent) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--color-transparent) 75%), linear-gradient(-45deg, transparent 75%, var(--color-transparent) 75%)',
    backgroundSize: '10px 10px',
    backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px',
  },
  FocusState: {
    borderColor: 'var(--contrast)',
    outline: 0,
    boxShadow: '0 0 0 0.25rem rgb(23 113 230 / 25%)',
  },
}

var Card = styled10.div(
  {
    padding: '.8em .6em .8em 1.4em',
    backgroundColor: '#fff',
    border: '1px solid rgba(0,0,0,0.06)',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
    transition: 'box-shadow .3s!important',
  },
  props =>
    props.hoverable
      ? {
          '&:hover': {
            zIndex: 10,
          },
        }
      : {},
)

var SpinnerKeyframes = keyframes3({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(-360deg)',
  },
})
var SpinnerWrapper = styled11.div(
  {
    position: 'absolute',
    top: 'calc(50% - var(--size) * 0.5)',
    left: 'calc(50% - var(--size) * 0.5)',
    width: 'var(--size)',
    height: 'var(--size)',
    animation: `${SpinnerKeyframes} 1.4s infinite linear`,
    svg: {
      display: 'block',
      width: 'var(--size)',
      height: 'var(--size)',
    },
  },
  ({ size = 30 }) => ({
    '--size': `${size}px`,
  }),
)

function Spinner(props) {
  return /* @__PURE__ */ jsx12(SpinnerWrapper, {
    ...props,
    children: /* @__PURE__ */ jsxs5('svg', {
      viewBox: '0 0 60 60',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        /* @__PURE__ */ jsx12('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM30 50C41.0457 50 50 41.0457 50 30C50 18.9543 41.0457 10 30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50Z',
          fill: 'url(#paint0_linear_313_15)',
        }),
        /* @__PURE__ */ jsx12('path', {
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          d: 'M10 30H0C0 46.5685 13.4315 60 30 60V50C18.9543 50 10 41.0457 10 30Z',
          fill: 'currentColor',
        }),
        /* @__PURE__ */ jsx12('defs', {
          children: /* @__PURE__ */ jsxs5('linearGradient', {
            id: 'paint0_linear_313_15',
            x1: '30',
            y1: '30',
            x2: '17',
            y2: '30',
            gradientUnits: 'userSpaceOnUse',
            children: [
              /* @__PURE__ */ jsx12('stop', {
                stopColor: 'currentColor',
                stopOpacity: '0',
              }),
              /* @__PURE__ */ jsx12('stop', {
                offset: '0.198062',
                stopColor: 'currentColor',
                stopOpacity: '0.217786',
              }),
              /* @__PURE__ */ jsx12('stop', {
                offset: '0.434425',
                stopColor: 'currentColor',
                stopOpacity: '0.477687',
              }),
              /* @__PURE__ */ jsx12('stop', {
                offset: '1',
                stopColor: 'currentColor',
              }),
            ],
          }),
        }),
      ],
    }),
  })
}

function IconPhone({ size = 18 }) {
  return /* @__PURE__ */ jsx13('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z',
    }),
  })
}

function IconDesktop({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z',
    }),
  })
}

function IconCheck({ size = 18 }) {
  return /* @__PURE__ */ jsxs6('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 16 16',
    children: [
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        d: 'M13.315 2.716A7.461 7.461 0 102.763 13.268 7.461 7.461 0 0013.315 2.716zM8.039 14.454a6.468 6.468 0 01-6.46-6.46 6.468 6.468 0 016.46-6.462A6.468 6.468 0 0114.5 7.992a6.468 6.468 0 01-6.46 6.461z',
      }),
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        d: 'M6.915 9.556L4.62 7.262l-.708.707 3.002 3.002 5.234-5.235-.707-.707-4.527 4.527z',
      }),
    ],
  })
}

function IconAlignLeft({ size = 24 }) {
  return /* @__PURE__ */ jsxs6('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    fill: 'none',
    viewBox: '0 0 24 24',
    children: [
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M10 6H5v13h5V6zM3 4v17h9V4H3z',
        clipRule: 'evenodd',
      }),
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        d: 'M22 7v2h-7V7h7zM22 11v2h-7v-2h7zM19 15v2h-4v-2h4z',
      }),
    ],
  })
}

function IconAlignRight({ size = 24 }) {
  return /* @__PURE__ */ jsxs6('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    children: [
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M19 6h-5v13h5V6zm-7-2v17h9V4h-9z',
        clipRule: 'evenodd',
      }),
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        d: 'M10 7v2H3V7h7zM10 11v2H3v-2h7zM7 15v2H3v-2h4z',
      }),
    ],
  })
}

function IconAlignTop({ size = 24 }) {
  return /* @__PURE__ */ jsxs6('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    children: [
      /* @__PURE__ */ jsx13('defs', {}),
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M19 5H5v5h14V5zM3 3v9h18V3H3z',
        clipRule: 'evenodd',
      }),
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        d: 'M20 14v2H3v-2h17zM14 18v2H3v-2h11z',
      }),
    ],
  })
}

function IconAlignBottom({ size = 24 }) {
  return /* @__PURE__ */ jsxs6('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    children: [
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M19 14H5v5h14v-5zM3 12v9h18v-9H3z',
        clipRule: 'evenodd',
      }),
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        d: 'M20 4v2H3V4h17zM14 8v2H3V8h11zM7 12v2H3v-2h4z',
      }),
    ],
  })
}

function IconTextLeft({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M3 8V6h8v2zM3 13v-2h18v2zM3 18v-2h14v2z',
    }),
  })
}

function IconTextCenter({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M8 8V6h8v2zM3 13v-2h18v2zM5 18v-2h14v2z',
    }),
  })
}

function IconTextRight({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M11 8V6h10v2zM3 13v-2h18v2zM6 18v-2h15v2z',
    }),
  })
}

function IconCirclePlus({ size = 24 }) {
  return /* @__PURE__ */ jsxs6('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: [
      /* @__PURE__ */ jsx13('path', {
        fill: 'none',
        d: 'M0 0h24v24H0z',
      }),
      /* @__PURE__ */ jsx13('path', {
        d: 'M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
        fill: 'currentColor',
      }),
    ],
  })
}

function IconDown({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx13('path', {
      d: 'M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z',
      fill: 'currentColor',
    }),
  })
}

function IconTrash({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx13('path', {
      d: 'M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z',
      fill: 'currentColor',
    }),
  })
}

function IconCross({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    width: size,
    height: size,
    viewBox: '0 0 14 14',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: /* @__PURE__ */ jsx13('path', {
      d: 'M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z',
      fill: 'currentColor',
    }),
  })
}

function IconSearch({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    width: size,
    height: size,
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: /* @__PURE__ */ jsx13('path', {
      d: 'm11.02 10.078 2.856 2.855-.943.943-2.855-2.855A6.002 6.002 0 0 1 .333 6.334c0-3.313 2.688-6 6-6a6.002 6.002 0 0 1 4.688 9.744Zm-1.337-.495a4.665 4.665 0 0 0-3.35-7.917 4.665 4.665 0 0 0-4.666 4.667 4.665 4.665 0 0 0 7.916 3.35l.1-.1Z',
      fill: 'currentColor',
    }),
  })
}

function IconCode({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z',
    }),
  })
}

function IconFolder({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3h-2V7h-7.414l-2-2H4v11.998L5.5 11h17l-2.31 9.243a1 1 0 0 1-.97.757H3zm16.938-8H7.062l-1.5 6h12.876l1.5-6z',
    }),
  })
}

function IconSave({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    children: /* @__PURE__ */ jsx13('path', {
      d: 'M7 19v-6h10v6h2V7.828L16.172 5H5v14h2zM4 3h13l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 12v4h6v-4H9z',
      fill: 'currentColor',
    }),
  })
}

function IconCalendar({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z',
    }),
  })
}

function IconPage({ size = 24 }) {
  return /* @__PURE__ */ jsx13('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx13('path', {
      fill: 'currentColor',
      d: 'M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z',
    }),
  })
}

function IconBlocs({ size = 24 }) {
  return /* @__PURE__ */ jsxs6('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: [
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        fillRule: 'evenodd',
        d: 'M4 4v5h16V4H4ZM3 2a1 1 0 0 0-1 1v7c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1H3ZM4 15v5h16v-5H4Zm-1-2a1 1 0 0 0-1 1v7c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1H3Z',
        clipRule: 'evenodd',
      }),
      /* @__PURE__ */ jsx13('path', {
        fill: 'currentColor',
        d: 'M5 5h6v1H5V5ZM5 16h6v1H5v-1Z',
      }),
    ],
  })
}

function SortableWrapper({ items, children, onMove }) {
  const ids = items.map(item => item._id)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragEnd(event) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      onMove(ids.indexOf(active.id.toString()), ids.indexOf(over.id.toString()))
    }
  }

  return /* @__PURE__ */ jsx14(DndContext, {
    sensors,
    collisionDetection: closestCenter,
    onDragEnd: handleDragEnd,
    modifiers: [restrictToVerticalAxis, restrictToParentElement],
    children: /* @__PURE__ */ jsx14(SortableContext, {
      items: ids,
      strategy: verticalListSortingStrategy,
      children,
    }),
  })
}

function Sortable({ item, children, className, ...props }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item._id })
  const style = {
    transform: CSS.Translate.toString(transform),
    transition: transition || void 0,
  }
  return /* @__PURE__ */ jsxs7('div', {
    className,
    'data-dragging': isDragging ? true : void 0,
    ref: setNodeRef,
    style,
    ...attributes,
    ...props,
    children: [
      /* @__PURE__ */ jsx14(DragHandle, {
        ...listeners,
      }),
      children,
    ],
  })
}

function moveItem(items, from, to) {
  return arrayMove(items, from, to)
}

function insertItem(items, index, value) {
  const clone = [...items]
  clone.splice(index, 0, value)
  return clone
}

// src/functions/fields.ts
function fillDefaults(data, fields) {
  let newData = { ...data }
  for (const field of fields) {
    if (field.group) {
      newData = fillDefaults(newData, field.fields)
      continue
    }
    const name = field.name
    if (data[name] === void 0 && 'default' in field.options) {
      newData[name] = field.options.default
    }
  }
  return newData
}

// src/functions/i18n.ts
function t(key) {
  return Editor.i18n[key]
}

var sidebarWidth =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem('veSidebarWidth')
    : 0
var createStore = (
  data = [],
  definitions,
  hiddenCategories = [],
  rootElement,
  templates2,
  insertPosition,
) =>
  create(
    devtools(
      combine(
        {
          data,
          definitions,
          hiddenCategories,
          rootElement,
          templates: templates2,
          insertPosition,
          previousData: [],
          rollbackMessage: null,
          addBlockIndex: null,
          focusIndex: null,
          previewMode: 1 /* DESKTOP */,
          sidebarWidth: clamp(
            sidebarWidth ? parseInt(sidebarWidth, 10) : 33,
            0,
            window.innerWidth - 375,
          ),
        },
        set => ({
          setSidebarWidth: function (width) {
            localStorage.setItem('veSidebarWidth', width.toString())
            set(() => ({
              sidebarWidth: width,
            }))
          },
          updateData: function (newData, path) {
            return set(state => ({
              data: deepSet(state.data, path, newData),
            }))
          },
          removeBloc: function (removedData) {
            return set(({ data: data2 }) => ({
              previousData: data2,
              data: data2.filter(d => d !== removedData),
              rollbackMessage: t('deleteItemConfirm'),
            }))
          },
          rollback: function () {
            return set(({ previousData }) => ({
              previousData: [],
              rollbackMessage: null,
              data: previousData,
            }))
          },
          voidRollback: function () {
            return set(() => ({
              rollbackMessage: null,
              previousData: [],
            }))
          },
          insertData: function (name, index, extraData) {
            const newData = {
              ...extraData,
              _name: name,
              _id: name + uniqId(),
            }
            set(state => {
              return {
                data: insertItem(state.data, index, newData),
                focusIndex: newData._id,
              }
            })
            return newData
          },
          setData: function (newData) {
            set(() => {
              return {
                data: indexify(newData),
                focusIndex: null,
              }
            })
          },
          setFocusIndex: function (id) {
            set(() => ({ focusIndex: id }))
          },
          setAddBlockIndex: function (index) {
            if (index === void 0) {
              set(state => ({
                addBlockIndex:
                  state.insertPosition === 'start' /* Start */
                    ? 0
                    : state.data.length,
              }))
              return
            }
            set(() => ({ addBlockIndex: index }))
          },
          togglePreviewMode: function () {
            set(({ previewMode }) => ({
              previewMode:
                previewMode === 1 /* DESKTOP */
                  ? 0 /* PHONE */
                  : 1 /* DESKTOP */,
            }))
          },
        }),
      ),
    ),
  )
var { Provider, useStore } = createContext2()

function StoreProvider({
  children,
  data,
  definitions,
  hiddenCategories,
  rootElement,
  templates: templates2,
  insertPosition,
}) {
  return /* @__PURE__ */ jsx15(Provider, {
    createStore: () =>
      createStore(
        data,
        definitions,
        hiddenCategories,
        rootElement,
        templates2,
        insertPosition,
      ),
    children,
  })
}

function useData() {
  return useStore(state => state.data)
}

function useRootElement() {
  return useStore(state => state.rootElement)
}

function useUpdateData() {
  return useStore(state => state.updateData)
}

function useRemoveBloc() {
  return useStore(state => state.removeBloc)
}

function useInsertData() {
  return useStore(state => state.insertData)
}

function useSetData() {
  return useStore(state => state.setData)
}

function useDefinitions() {
  return useStore(state => state.definitions)
}

function useSetFocusIndex() {
  return useStore(state => state.setFocusIndex)
}

function useFieldFocused(id) {
  return useStore(state => state.focusIndex === id)
}

function usePreviewMode() {
  return useStore(state => state.previewMode)
}

function useTogglePreviewMode() {
  return useStore(state => state.togglePreviewMode)
}

function useSidebarWidth() {
  return useStore(state => state.sidebarWidth)
}

function useSetSidebarWidth() {
  return useStore(state => state.setSidebarWidth)
}

function useFieldDefinitions() {
  return useStore(state => state.definitions)
}

function useHiddenCategories() {
  return useStore(state => state.hiddenCategories)
}

function useBlocSelectionVisible() {
  return useStore(state => state.addBlockIndex) !== null
}

function useSetBlockIndex() {
  return useStore(state => state.setAddBlockIndex)
}

function useTemplates() {
  return useStore(state => state.templates)
}

function useAddBlock() {
  const insertData = useInsertData()
  const blockIndex = useStore(state => state.addBlockIndex) || 0
  const definitions = useDefinitions()
  const setBlockIndex = useSetBlockIndex()
  return useCallback2(
    blocName => {
      insertData(
        blocName,
        blockIndex,
        fillDefaults({}, definitions[blocName].fields),
      )
      setBlockIndex(null)
    },
    [insertData, blockIndex, definitions, setBlockIndex],
  )
}

function useRollbackMessage() {
  const message = useStore(state => state.rollbackMessage)
  const rollback = useStore(state => state.rollback)
  const voidRollback = useStore(state => state.voidRollback)
  return { message, rollback, voidRollback }
}

var Wrapper4 = styled12(Flex)({})
var Title2 = styled12.div({
  width: '100%',
  color: 'var(--color)',
  textAlign: 'left',
  fontSize: '.95em',
  scrollMargin: '1.8em',
  cursor: 'pointer',
  strong: {
    display: 'block',
    color: 'var(--color-dark)',
    fontWeight: 500,
    fontSize: '1.1em',
  },
})
var HoverableActions = styled12(Flex)({
  opacity: 0,
  transition: 'opacity .3s',
  [`*:hover > * > &`]: {
    opacity: 1,
  },
})
var SidebarHeading = forwardRef2(
  ({ children, onClick, title, description }, ref) => {
    const as = onClick ? UnstyledButton : 'div'
    return /* @__PURE__ */ jsxs8(Wrapper4, {
      ref,
      gap: 0,
      between: true,
      children: [
        /* @__PURE__ */ jsxs8(Title2, {
          as,
          onClick,
          children: [
            /* @__PURE__ */ jsx16('strong', {
              children: title,
            }),
            description,
          ],
        }),
        children,
      ],
    })
  },
)
SidebarHeading.displayName = 'SidebarHeading'
var SidebarHeadingHoverable = props => {
  return /* @__PURE__ */ jsx16(HoverableActions, {
    gap: 0,
    ...props,
  })
}
SidebarHeading.Hover = SidebarHeadingHoverable

var SidebarBlocWrapper = styled13(Sortable, {
  target: 'SidebarBlocWrapper',
})({
  position: 'relative',
  padding: '.8em .6em .8em 1.4em',
  backgroundColor: '#fff',
  border: '1px solid rgba(0,0,0,0.06)',
  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  transition: 'box-shadow .3s',
  cursor: 'inherit',
  '&[data-dragging]': {
    zIndex: 10,
  },
})

function SidebarBlocMissing({ data }) {
  const removeBloc = useRemoveBloc()
  return /* @__PURE__ */ jsx17(SidebarBlocWrapper, {
    item: data,
    css: {
      backgroundColor: 'var(--color-light)',
      boxShadow: 'none',
    },
    children: /* @__PURE__ */ jsx17(SidebarHeading, {
      title: `${t('unknownComponent')} : ${data._name}`,
      children: /* @__PURE__ */ jsx17(ButtonIcon, {
        danger: true,
        onClick: prevent2(() => removeBloc(data)),
        title: t('deleteComponent'),
        children: /* @__PURE__ */ jsx17(IconTrash, {
          size: 20,
        }),
      }),
    }),
  })
}

function FieldsRenderer({ data, fields, path, onUpdate }) {
  return /* @__PURE__ */ jsx18(Fragment3, {
    children: fields
      .filter(field => field.shouldRender(data))
      .map((field, k) =>
        field.group
          ? /* @__PURE__ */ jsx18(
              field.render,
              {
                options: field.options,
                children: /* @__PURE__ */ jsx18(FieldsRenderer, {
                  fields: field.fields,
                  data,
                  path,
                  onUpdate,
                }),
              },
              k,
            )
          : /* @__PURE__ */ jsx18(
              Field2,
              {
                field,
                value: field.name ? data[field.name] : void 0,
                path: `${path}.${field.name}`,
                extraProps: field.extraProps ? field.extraProps(data) : void 0,
                onUpdate,
              },
              field.name,
            ),
      ),
  })
}

function Field2({ field, value, path, extraProps, onUpdate }) {
  const Component14 = field.render
  const handleChange = useCallback3(
    v => {
      onUpdate(v, path)
    },
    [path, onUpdate],
  )
  return /* @__PURE__ */ jsx18(Component14, {
    value,
    onChange: handleChange,
    options: field.options,
    ...extraProps,
  })
}

function SidebarFields({ fields, data, path }) {
  const updateData = useUpdateData()
  return /* @__PURE__ */ jsx19(FieldsRenderer, {
    fields,
    data,
    onUpdate: updateData,
    path,
  })
}

function CopyAction({ data, size, ...props }) {
  const [success, setSuccess] = useState3(false)
  const timer = useRef3()
  const handleCopy = async () => {
    try {
      await copyToClipboard(stringifyFields(data))
      setSuccess(true)
      timer.current = window.setTimeout(() => {
        setSuccess(false)
      }, 4e3)
    } catch (e) {
      alert(e)
    }
  }
  const tooltipLabel = Array.isArray(data) ? t('copyPage') : t('copyComponent')
  useEffect3(() => {
    clearTimeout(timer.current)
  }, [])
  return /* @__PURE__ */ jsx20(Tooltip, {
    content: success
      ? /* @__PURE__ */ jsxs9(Fragment4, {
          children: [
            t('copySuccess'),
            /* @__PURE__ */ jsx20('br', {}),
            t('copyInstructions'),
          ],
        })
      : tooltipLabel,
    trigger: 'focus',
    children: /* @__PURE__ */ jsx20('div', {
      children: /* @__PURE__ */ jsx20(ButtonIcon, {
        onClick: prevent3(handleCopy),
        success,
        ...props,
        children: success
          ? /* @__PURE__ */ jsx20(IconCheck, {
              size,
            })
          : /* @__PURE__ */ jsx20(IconCode, {
              size,
            }),
      }),
    }),
  })
}

var SidebarBloc = memo(function SidebarItem({ data, definition, path }) {
  const ref = useRef4(null)
  const isFocused = useFieldFocused(data._id)
  const [isCollapsed, toggleCollapsed, setCollapsed] = useToggle(!isFocused)
  const removeBloc = useRemoveBloc()
  const setFocusIndex = useSetFocusIndex()
  const label =
    definition?.label && data[definition.label] ? data[definition.label] : null
  useUpdateEffect(() => {
    if (isFocused) {
      setCollapsed(false)
      window.setTimeout(
        () =>
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        100,
      )
    } else {
      setCollapsed(true)
    }
  }, [isFocused])
  const labelHTMLSafe = useMemo2(
    () => (label?.includes('<') ? strToDom(label).innerText : label),
    [label],
  )
  const handleRemove = () => {
    removeBloc(data)
  }
  const focusBloc = () => {
    if (isCollapsed) {
      setFocusIndex(path)
    }
    toggleCollapsed()
  }
  if (!definition) {
    return /* @__PURE__ */ jsx21(SidebarBlocMissing, {
      data,
    })
  }
  return /* @__PURE__ */ jsxs10(SidebarBlocWrapper, {
    item: data,
    children: [
      /* @__PURE__ */ jsxs10(SidebarHeading, {
        ref,
        title: definition.title,
        description: isCollapsed ? labelHTMLSafe : null,
        onClick: prevent4(focusBloc),
        children: [
          /* @__PURE__ */ jsxs10(SidebarHeading.Hover, {
            children: [
              /* @__PURE__ */ jsx21(CopyAction, {
                data,
                size: 20,
              }),
              /* @__PURE__ */ jsx21(ButtonIcon, {
                danger: true,
                onClick: handleRemove,
                title: t('deleteComponent'),
                children: /* @__PURE__ */ jsx21(IconTrash, {
                  size: 20,
                }),
              }),
            ],
          }),
          /* @__PURE__ */ jsx21(ButtonIcon, {
            rotate: isCollapsed ? -90 : 0,
            onClick: prevent4(toggleCollapsed),
            children: /* @__PURE__ */ jsx21(IconDown, {
              size: 20,
            }),
          }),
        ],
      }),
      !isCollapsed &&
        /* @__PURE__ */ jsx21(Flex, {
          column: true,
          gap: 1,
          css: { marginTop: '.5em' },
          children: /* @__PURE__ */ jsx21(SidebarFields, {
            fields: definition.fields,
            data,
            path,
          }),
        }),
    ],
  })
})

function SidebarBlocs({ data }) {
  const updateData = useUpdateData()
  const definitions = useFieldDefinitions()
  const handleMove = (from, to) => {
    updateData(moveItem(data, from, to))
  }
  return /* @__PURE__ */ jsx22(Wrapper5, {
    children: /* @__PURE__ */ jsx22(SortableWrapper, {
      items: data,
      onMove: handleMove,
      children: data.map((v, k) =>
        /* @__PURE__ */ jsx22(
          SidebarBloc,
          {
            data: v,
            definition: definitions[v._name],
            path: `${k}`,
          },
          v._id,
        ),
      ),
    }),
  })
}

var Wrapper5 = styled14.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  flexDirection: 'column',
  gridGap: '1em',
  padding: '1em',
  overflow: 'auto',
  scrollbarGutter: 'stable',
})

function SidebarHeader({ onClose, children }) {
  const togglePreviewMode = useTogglePreviewMode()
  const previewMode = usePreviewMode()
  const isPhone = previewMode === 0 /* PHONE */
  const setAddBlock = useSetBlockIndex()
  const data = useData()
  return /* @__PURE__ */ jsxs11(Wrapper6, {
    between: true,
    children: [
      /* @__PURE__ */ jsx23('div', {
        children: /* @__PURE__ */ jsx23(ButtonIcon, {
          title: t('close'),
          onClick: prevent5(onClose),
          children: /* @__PURE__ */ jsx23(IconCross, {
            size: 12,
          }),
        }),
      }),
      /* @__PURE__ */ jsxs11(Flex, {
        children: [
          children,
          /* @__PURE__ */ jsx23(CopyAction, {
            data,
            size: 20,
          }),
          /* @__PURE__ */ jsx23(ButtonIcon, {
            onClick: prevent5(togglePreviewMode),
            title: t('responsiveView'),
            children: isPhone
              ? /* @__PURE__ */ jsx23(IconDesktop, {
                  size: 20,
                })
              : /* @__PURE__ */ jsx23(IconPhone, {
                  size: 24,
                }),
          }),
          /* @__PURE__ */ jsx23(Button, {
            icon: IconCirclePlus,
            onClick: prevent5(() => setAddBlock()),
            children: t('addComponent'),
          }),
        ],
      }),
    ],
  })
}

var Wrapper6 = styled15(Flex)({
  padding: '0 1em',
  flex: 'none',
  backgroundColor: '#FFF',
  borderBottom: '1px solid rgba(0,0,0,0.06)',
  boxShadow: 'rgba(0, 0, 0, 0.05) 0 1px 2px 0',
  height: 64,
})

function SidebarFooter() {
  return /* @__PURE__ */ jsx24(Wrapper7, {
    between: true,
    children: /* @__PURE__ */ jsx24(Button, {
      type: 'submit',
      icon: IconSave,
      children: t('save'),
    }),
  })
}

var Wrapper7 = styled16(Flex)({
  marginTop: 'auto',
  backgroundColor: '#FFF',
  justifyContent: 'flex-end',
  borderTop: '1px solid rgba(0,0,0,0.06)',
  padding: '.5em 1em',
  boxShadow: '0 -1px 2px 0 rgba(0,0,0,0.05)',
})

function SidebarEmpty(data) {
  return /* @__PURE__ */ jsxs12(Wrapper8, {
    children: [
      /* @__PURE__ */ jsx25(Description, {
        children: t('noContent'),
      }),
      /* @__PURE__ */ jsx25('div', {
        children: /* @__PURE__ */ jsx25(Button, {
          outline: true,
          onClick: prevent6(data.onAction),
          size: 'small',
          children: t('useTemplate'),
        }),
      }),
    ],
  })
}

var Wrapper8 = styled17.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
})
var Description = styled17.p({
  marginBottom: '1em',
})

function SidebarTemplates({ onTemplate }) {
  const templates2 = useTemplates()
  const setData = useSetData()
  const [loadingTemplate, setLoadingTemplate] = useState4()
  const callback = useCallback4(
    async t2 => {
      setLoadingTemplate(t2)
      let data
      if (typeof t2.data === 'function') {
        setLoadingTemplate(t2)
        data = await t2.data().catch(() => [])
        setLoadingTemplate(t2)
      } else {
        data = t2.data
      }
      setData(data)
      onTemplate()
    },
    [setData, onTemplate],
  )
  return /* @__PURE__ */ jsx26(Wrapper9, {
    children: templates2.map(t2 =>
      /* @__PURE__ */ jsx26(TemplateCard, {
        template: t2,
        onClick: callback,
        loading: loadingTemplate === t2,
      }),
    ),
  })
}

function TemplateCard({ template, onClick, loading }) {
  return /* @__PURE__ */ jsxs13(StyledCard, {
    hoverable: true,
    onClick: prevent7(() => (loading ? null : onClick(template))),
    loading,
    children: [
      loading && /* @__PURE__ */ jsx26(Spinner, {}),
      /* @__PURE__ */ jsx26(TemplateImage, {
        src: template.image,
        alt: '',
      }),
      /* @__PURE__ */ jsxs13(Body, {
        children: [
          /* @__PURE__ */ jsx26(Title3, {
            children: template.name,
          }),
          /* @__PURE__ */ jsx26('div', {
            children: template.description,
          }),
        ],
      }),
    ],
  })
}

var Wrapper9 = styled18.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  padding: '1em',
  gap: '1em',
  overflow: 'auto',
})
var StyledCard = styled18(Card)(
  {
    padding: 0,
    display: 'grid',
    position: 'relative',
    gridTemplateColumns: '150px 1fr',
    gridGap: '1.5em',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer',
  },
  props =>
    props.loading
      ? {
          opacity: 0.4,
          cursor: 'inherit',
        }
      : {},
)
var TemplateImage = styled18.img({
  width: '100%',
  height: '150px',
  objectFit: 'cover',
})
var Body = styled18.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
})
var Title3 = styled18.div({
  color: 'var(--color-dark)',
  fontWeight: 500,
  fontSize: '1.1em',
})

function Sidebar({ data, onClose, ...props }) {
  const [state, setState] = useState5(0 /* BLOCS */)
  const templates2 = useTemplates()
  const toggleMode = useCallback5(() => {
    setState(v => (v === 0 /* BLOCS */ ? 1 /* TEMPLATES */ : 0) /* BLOCS */)
  }, [])
  const hasTemplates = templates2.length > 0
  const showEmpty = data.length === 0 && hasTemplates
  const isTemplateMode = state === 1 /* TEMPLATES */
  return /* @__PURE__ */ jsxs14(SidebarWrapper, {
    ...props,
    children: [
      /* @__PURE__ */ jsx27(SidebarHeader, {
        onClose,
        children:
          hasTemplates &&
          /* @__PURE__ */ jsx27(ButtonIcon, {
            onClick: prevent8(toggleMode),
            title: t(isTemplateMode ? 'addComponent' : 'useTemplate'),
            children: isTemplateMode
              ? /* @__PURE__ */ jsx27(IconBlocs, {})
              : /* @__PURE__ */ jsx27(IconPage, {}),
          }),
      }),
      state === 0 /* BLOCS */ &&
        (showEmpty
          ? /* @__PURE__ */ jsx27(SidebarEmpty, {
              onAction: () => setState(1 /* TEMPLATES */),
            })
          : /* @__PURE__ */ jsx27(SidebarBlocs, {
              data,
            })),
      state === 1 /* TEMPLATES */ &&
        /* @__PURE__ */ jsx27(SidebarTemplates, {
          onTemplate: () => setState(0 /* BLOCS */),
        }),
      /* @__PURE__ */ jsx27(SidebarFooter, {}),
    ],
  })
}

var Out = keyframes4({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(-100%)' },
})
var In = keyframes4({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
})
var SidebarWrapper = styled19.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: '#FBFBFD',
  zIndex: 2,
  boxShadow:
    '0 20px 25px -5px rgba(0,0,0,0.2),0 10px 10px -5px rgba(0,0,0,0.04)',
  transition: 'transform .5s cubic-bezier(0.19, 1, 0.22, 1)',
  animation: `${In} .7s cubic-bezier(0.19, 1, 0.22, 1) both`,
  '[hidden=hidden] &': {
    animation: `${Out} .7s cubic-bezier(0.19, 1, 0.22, 1) both`,
  },
})

// src/constants.ts
var PHONE_HEIGHT = 844

// src/styles/preview/Preview.module.scss
var _default2 = {}

function PreviewAddFloating({ position }) {
  const setAddBlockIndex = useSetBlockIndex()
  return /* @__PURE__ */ jsx28('button', {
    className: _default2.addButtonFloating,
    onClick: prevent9(() => setAddBlockIndex(position)),
    children: /* @__PURE__ */ jsx28('span', {
      children: 'Ajouter un bloc',
    }),
  })
}

function usePreview(data, previewUrl, initialHTML) {
  const [loading, setLoading] = useState6(false)
  const [html, setHTML] = useState6(initialHTML)
  const isFirstRender = useRef5(!!initialHTML)
  useEffectDebounced(
    () => {
      if (isFirstRender.current) {
        isFirstRender.current = false
        return
      }
      const timer = window.setTimeout(() => setLoading(true), 200)
      fetch(previewUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...data, preview: true }),
      })
        .then(r => r.text())
        .then(setHTML)
        .finally(() => {
          clearTimeout(timer)
          setLoading(false)
        })
      return () => clearTimeout(timer)
    },
    [data],
    500,
  )
  return {
    loading,
    html,
  }
}

function PreviewItem({ data, initialHTML, previewUrl, title }) {
  const ref = useRef6(null)
  const { loading, html } = usePreview(data, previewUrl, initialHTML)
  const setFocusIndex = useSetFocusIndex()
  const isFocused = useFieldFocused(data._id)
  useEffect4(() => {
    if (isFocused) {
      const top = offsetTop(ref.current) - 40
      const root = ref.current.closest('html')
      root.scrollTop = top
    }
  }, [isFocused])
  return /* @__PURE__ */ jsx29(Flipped, {
    flipId: data._id,
    children: /* @__PURE__ */ jsxs15('div', {
      className: `${_default2.item} ${isFocused ? _default2.focused : ''}`,
      id: `previewItem${data._id}`,
      ref,
      onClick: () => setFocusIndex(data._id),
      children: [
        loading &&
          /* @__PURE__ */ jsx29(Loader, {
            width: 15,
            dots: 6,
          }),
        /* @__PURE__ */ jsx29('div', {
          className: `${_default2.title} ${isFocused ? _default2.focused : ''}`,
          children: title,
        }),
        /* @__PURE__ */ jsx29('div', {
          dangerouslySetInnerHTML: { __html: html },
        }),
      ],
    }),
  })
}

function PreviewAddButton({ position }) {
  const setAddBlockIndex = useSetBlockIndex()
  return /* @__PURE__ */ jsx30('div', {
    className: _default2.addButton,
    children: /* @__PURE__ */ jsx30(Button, {
      icon: IconCirclePlus,
      onClick: prevent10(() => setAddBlockIndex(position)),
      children: 'Ajouter un bloc',
    }),
  })
}

function PreviewItems({ data, initialHTML = {}, previewUrl }) {
  const definitions = useFieldDefinitions()
  return /* @__PURE__ */ jsxs16(Fragment5, {
    children: [
      /* @__PURE__ */ jsx31(Flipper, {
        flipKey: data.map(d => d._id).join('_'),
        children: data.map((v, k) =>
          /* @__PURE__ */ jsxs16(
            'div',
            {
              children: [
                /* @__PURE__ */ jsx31(PreviewAddFloating, {
                  position: k,
                }),
                /* @__PURE__ */ jsx31(PreviewItem, {
                  title: definitions[v._name]?.title || '',
                  data: v,
                  initialHTML: initialHTML[v._id] || '',
                  previewUrl,
                }),
              ],
            },
            v._id,
          ),
        ),
      }),
      /* @__PURE__ */ jsx31(PreviewAddButton, {
        position: data.length,
      }),
    ],
  })
}

function Preview({ data, previewUrl }) {
  const iframe = useRef7(null)
  const [iframeRoot, setIframeRoot] = useState7(null)
  const initialHTML = useRef7({})
  const [loaded, setLoaded] = useState7(false)
  const showSpinner = !loaded
  useAsyncEffect(async () => {
    const r = await fetch(previewUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!r.ok) {
      return
    }
    const iframeDocument = iframe.current.contentDocument
    iframeDocument.open()
    iframeDocument.write(await r.text())
    iframeDocument.close()
    const root = iframeDocument.querySelector('#ve-components')
    initialHTML.current = Array.from(root.children).reduce(
      (acc, v, k) => ({ ...acc, [data[k]._id]: v.outerHTML }),
      {},
    )
    root.innerHTML = ''
    setIframeRoot(root)
  }, [])
  const previewMode = usePreviewMode()
  const { height: windowHeight } = useWindowSize()
  let transform = void 0
  if (previewMode === 0 /* PHONE */ && windowHeight < 844) {
    transform = { transform: `scale(${windowHeight / PHONE_HEIGHT})` }
  }
  return /* @__PURE__ */ jsxs17('div', {
    className: _default2.preview,
    children: [
      showSpinner &&
        /* @__PURE__ */ jsx32(Loader2, {
          width: 40,
          dots: 12,
        }),
      /* @__PURE__ */ jsx32('iframe', {
        className: `${loaded ? _default2.loaded : ''} ${
          previewMode === 0 /* PHONE */ ? _default2.mobile : ''
        }`,
        ref: iframe,
        style: transform,
        onLoad: () => setLoaded(true),
      }),
      iframeRoot &&
        createPortal(
          /* @__PURE__ */ jsx32(PreviewItems, {
            data,
            initialHTML: initialHTML.current,
            previewUrl,
          }),
          iframeRoot,
        ),
    ],
  })
}

function ResizeBar() {
  const [drag, setDrag] = useState8(false)
  const setSidebarWidth = useSetSidebarWidth()
  const handleMouseDown = e => {
    e.stopPropagation()
    e.preventDefault()
    setDrag(true)
    const listener = e2 => {
      setSidebarWidth(Math.round((100 * e2.clientX) / window.innerWidth))
    }
    document.documentElement.addEventListener('mousemove', listener)
    document.documentElement.addEventListener(
      'mouseup',
      () => {
        setDrag(false)
        document.documentElement.removeEventListener('mousemove', listener)
      },
      { once: true },
    )
  }
  return /* @__PURE__ */ jsxs18(Fragment6, {
    children: [
      /* @__PURE__ */ jsx33(Wrapper10, {
        isDragging: drag,
        onMouseDown: handleMouseDown,
      }),
      drag && /* @__PURE__ */ jsx33(ResizeBarOverlay, {}),
    ],
  })
}

var Wrapper10 = styled20.div(
  {
    position: 'fixed',
    top: 0,
    bottom: 0,
    height: '100%',
    left: 'var(--clampedSidebar)',
    width: 15,
    zIndex: 1002,
    cursor: 'ew-resize',
    transition: 'box-shadow .3s',
    ':hover': {
      boxShadow: '-1px -1px 0 1px var(--contrast)',
    },
  },
  ({ isDragging }) =>
    isDragging
      ? {
          boxShadow: '-1px -1px 0 1px var(--contrast)',
        }
      : null,
)
var ResizeBarOverlay = styled20.div({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1001,
})

function BlocSelectorItem({ definition, name, iconsUrl, onClick }) {
  const icon = iconsUrl.replace('[name]', name)
  const title = definition.title
  return /* @__PURE__ */ jsxs19(Button2, {
    onClick: prevent11(onClick),
    children: [
      /* @__PURE__ */ jsx34(ButtonImage, {
        children: /* @__PURE__ */ jsx34('img', {
          src: icon,
          alt: '',
        }),
      }),
      /* @__PURE__ */ jsx34('div', {
        children: title,
      }),
    ],
  })
}

var Button2 = styled21.button({
  backgroundColor: 'transparent',
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  font: 'inherit',
  fontWeight: 500,
  cursor: 'pointer',
  transition: '.3s',
  '&:hover, &:focus': {
    outline: 'none',
    color: 'var(--contrast)',
    '& img': {
      transform: 'translateY(-5px)',
    },
  },
})
var ButtonImage = styled21.div({
  width: '100%',
  backgroundColor: 'var(--color-light)',
  height: 107,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  transition: '.3s',
  img: {
    width: 120,
    height: 80,
    objectFit: 'contain',
    borderRadius: 4,
    transition: 'transform .3s',
  },
  '&::after': {
    content: "''",
    position: 'absolute',
    inset: 0,
    opacity: 0,
    background: 'var(--contrast)',
    mixBlendMode: 'saturation',
    borderRadius: 4,
    transition: 'opacity .3s',
  },
  [`button:hover &::after, button:focus &::after`]: {
    opacity: 1,
  },
  [`button:focus &`]: {
    transition: 'none',
    border: '2px solid var(--contrast)',
  },
})

var Wrapper11 = styled22.div({
  position: 'relative',
  float: 'right',
  svg: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    color: 'var(--color)',
    transform: 'translateY(-50%)',
  },
})
var Input = styled22.input({
  height: 40,
  background: 'var(--color-light)',
  borderRadius: 40,
  padding: '0 1rem 0 2.6rem',
  border: '1px solid transparent',
  font: 'inherit',
  '&:focus': Styles.FocusState,
})

function BlocSelectorSearch({ value, onChange }) {
  return /* @__PURE__ */ jsxs20(Wrapper11, {
    children: [
      /* @__PURE__ */ jsx35(Input, {
        type: 'search',
        placeholder: t('searchComponent'),
        value,
        onChange: e => onChange(e.target.value),
      }),
      /* @__PURE__ */ jsx35(IconSearch, {
        size: 14,
      }),
    ],
  })
}

var BlocSelectorGrid = styled23(Tabs.Tab)({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 218px)',
  gap: '2rem',
  overflow: 'auto',
  maxHeight: 'calc(100vh - 300px)',
  marginTop: '2rem',
  alignContent: 'flex-start',
  height: 700,
  '&::-webkit-scrollbar': {
    width: 7,
    height: 7,
  },
  '&::-webkit-scrollbar-track': {
    background: 'var(--color-light)',
    padding: 1,
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'var(--color)',
    borderRadius: 4,
  },
  '&[hidden]': {
    display: 'none',
  },
})

var ALL_TAB = 'Tous les blocs'

function BlocSelector({ iconsUrl }) {
  const isVisible = useBlocSelectionVisible()
  const setBlockIndex = useSetBlockIndex()
  const [search, setSearch] = useState9('')
  const definitions = useFieldDefinitions()
  const hiddenCategories = useHiddenCategories()
  const addBlock = useAddBlock()
  const categories = useMemo3(() => {
    return [
      ALL_TAB,
      ...Object.values(definitions)
        .filter(d => d.category)
        .filter(d => !hiddenCategories.includes(d.category ?? ''))
        .reduce(
          (acc, d) => (acc.includes(d.category) ? acc : [...acc, d.category]),
          [],
        ),
    ]
  }, [definitions])
  useEffect5(() => {
    setSearch('')
  }, [isVisible])
  if (!isVisible) {
    return null
  }
  const handleVisibilityChange = v => {
    setBlockIndex(null)
  }
  return /* @__PURE__ */ jsxs21(Modal, {
    visible: isVisible,
    onVisibilityChange: handleVisibilityChange,
    title: t('addComponent'),
    children: [
      /* @__PURE__ */ jsx36(BlocSelectorSearch, {
        value: search,
        onChange: setSearch,
      }),
      /* @__PURE__ */ jsx36(Tabs, {
        css: { margin: '1.5rem 0' },
        children: categories.map(category =>
          /* @__PURE__ */ jsx36(
            BlocSelectorGrid,
            {
              title: category,
              children: Object.keys(definitions)
                .filter(
                  key =>
                    !hiddenCategories.includes(definitions[key].category ?? ''),
                )
                .filter(searchDefinition(search ?? '', category, definitions))
                .map(key =>
                  /* @__PURE__ */ jsx36(
                    BlocSelectorItem,
                    {
                      definition: definitions[key],
                      name: key,
                      iconsUrl,
                      onClick: () => addBlock(key),
                    },
                    key,
                  ),
                ),
            },
            category,
          ),
        ),
      }),
    ],
  })
}

function searchDefinition(search, category, definitions) {
  return key => {
    const categoryFilter =
      category === ALL_TAB ? true : definitions[key].category === category
    const searchFilter =
      search === ''
        ? true
        : definitions[key].title.toLowerCase().includes(search.toLowerCase())
    return categoryFilter && searchFilter
  }
}

function RollbackMessage() {
  const {
    message: rollbackMessage,
    rollback,
    voidRollback,
  } = useRollbackMessage()
  return /* @__PURE__ */ jsx37(Flash, {
    action: t('rollback'),
    onClick: rollback,
    duration: 3,
    onHide: voidRollback,
    children: rollbackMessage,
  })
}

function Layout({ data, previewUrl, onClose, iconsUrl }) {
  const [sidebarCollapsed, toggleSidebar] = useToggle2(false)
  const showResizeControl = !sidebarCollapsed
  return /* @__PURE__ */ jsx38(Fragment7, {
    children: /* @__PURE__ */ jsxs22(Wrapper12, {
      withSidebar: !sidebarCollapsed,
      children: [
        /* @__PURE__ */ jsx38(Sidebar, {
          data,
          onClose,
          css: {
            display: sidebarCollapsed ? 'none' : void 0,
          },
        }),
        previewUrl &&
          /* @__PURE__ */ jsx38(Preview, {
            data,
            previewUrl,
          }),
        showResizeControl && /* @__PURE__ */ jsx38(ResizeBar, {}),
        /* @__PURE__ */ jsx38(BlocSelector, {
          iconsUrl,
        }),
        /* @__PURE__ */ jsx38(RollbackMessage, {}),
      ],
    }),
  })
}

function Wrapper12(props) {
  const sidebarWidth2 = useSidebarWidth()
  return /* @__PURE__ */ jsx38(StyledWrapper, {
    ...props,
    style: { '--sidebar': `${sidebarWidth2}vw` },
  })
}

var In2 = keyframes5({
  from: { backgroundColor: 'rgba(255, 255, 255, 0)' },
  to: { backgroundColor: 'var(--color)' },
})
var Out2 = keyframes5({
  from: { backgroundColor: 'var(--color)' },
  to: { backgroundColor: 'rgba(255, 255, 255, 0)' },
})
var StyledWrapper = styled24.div(
  {
    isolation: 'isolate',
    zIndex: 9999,
    fontSize: '15px',
    '--sidebar': '600px',
    '--clampedSidebar': 'clamp(450px, var(--sidebar), calc(100vw - 375px))',
    color: 'var(--color)',
    transition: 'background-color .3s',
    position: 'fixed',
    inset: '0',
    width: '100%',
    height: '100%',
    display: 'grid',
    backgroundColor: 'var(--color)',
    animation: `${In2} .7s cubic-bezier(0.19, 1, 0.22, 1) both`,
    '[hidden="hidden"] &': {
      animation: `${Out2} .7s cubic-bezier(0.19, 1, 0.22, 1) both`,
    },
    '& *': {
      '&::-webkit-scrollbar': { width: '7px', height: '7px' },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
        padding: '1px',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'var(--color)',
        borderRadius: '4px',
      },
    },
  },
  props => ({
    gridTemplateColumns: props.withSidebar
      ? 'var(--clampedSidebar) 1fr'
      : '1fr',
  }),
)

function useClipboardPaste(enabled) {
  const insertData = useInsertData()
  useEffect6(() => {
    if (!enabled) {
      return
    }
    const listener = event => {
      try {
        let paste = (event.clipboardData || window.clipboardData)
          .getData('text')
          .trim()
        if (paste.startsWith('{')) {
          event.preventDefault()
          const data = JSON.parse(paste)
          if (data._name) {
            insertData(data._name, 0, indexify2(data))
          }
        } else if (paste.startsWith('[')) {
          event.preventDefault()
          const data = JSON.parse(paste)
          if (data.length > 0) {
            for (let i = data.length - 1; i >= 0; i--) {
              insertData(data[i]._name, 0, indexify2(data[i]))
            }
          }
        }
      } catch (e) {}
    }
    document.addEventListener('paste', listener)
    return () => {
      document.removeEventListener('paste', listener)
    }
  }, [insertData, enabled])
}

var BaseStyles = ({ children, complete = true }) => {
  return /* @__PURE__ */ jsxs23(Fragment8, {
    children: [
      /* @__PURE__ */ jsx39(Global, {
        styles: { 'editor-builder': { display: 'block' } },
      }),
      /* @__PURE__ */ jsx39(Reset, {
        complete,
        children,
      }),
    ],
  })
}
var Reset = styled25.div(
  css`
    font-size: 16px;
    line-height: 1.4;

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  `,
  props =>
    props.complete
      ? `
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }`
      : {},
)

// src/langs/en.ts
var Translations = {
  unknownComponent: 'Unknown component',
  deleteComponent: 'Remove component',
  copyPage: 'Copier le code de la page',
  copyComponent: 'Copy the component',
  searchComponent: 'Search a component',
  copySuccess: 'The code has been copied',
  copyInstructions: 'You can paste the component on another page (CTRL + V)',
  addComponent: 'Add a component',
  responsiveView: 'Responsive view',
  addItem: 'Add an item',
  deleteItem: 'Remove item',
  rollback: 'Restore',
  deleteItemConfirm: 'The component has been deleted',
  save: 'Save',
  close: 'Close',
  noContent: `You have no content yet`,
  useTemplate: 'Use a template',
}

function defineField(args) {
  return (name, options = {}) => {
    const fieldArgs = typeof args === 'function' ? args() : args
    return {
      ...genericFieldDefinition(fieldArgs, options),
      ...fieldArgs,
      options: { ...fieldArgs.defaultOptions, ...options },
      name,
      group: false,
    }
  }
}

function defineFieldGroup(args) {
  return (fields, options = {}) => {
    return {
      ...genericFieldDefinition(args, options),
      group: true,
      fields,
      render: args.render,
    }
  }
}

function defaultFieldProperties() {
  return {
    conditions: [],
    shouldRender(data) {
      return this.conditions.filter(condition => !condition(data)).length === 0
    },
    when(fieldName, expectedValue = true) {
      return {
        ...this,
        conditions: [
          ...this.conditions,
          data => {
            if (typeof expectedValue === 'function') {
              return expectedValue(data[fieldName])
            }
            return cast(data[fieldName], expectedValue) === expectedValue
          },
        ],
      }
    },
  }
}

function genericFieldDefinition(args, options) {
  return {
    options: { ...args.defaultOptions, ...options },
    ...defaultFieldProperties(),
  }
}

var Component = ({ value, onChange, options }) => {
  const id = useUniqId('textinput')
  return /* @__PURE__ */ jsx40(Field, {
    label: options.label,
    type: options.multiline ? 'textarea' : 'text',
    id,
    value,
    onInput: e => onChange(e.target.value),
    help: options.help,
  })
}
var Text = defineField({
  defaultOptions: {
    default: '',
  },
  render: Component,
})

// src/styles/Checkbox.module.scss
var _default3 = {}

var Component2 = ({ value, onChange, options }) => {
  const id = useUniqId2('checkbox')
  return /* @__PURE__ */ jsx41(Field, {
    help: options.help,
    children: /* @__PURE__ */ jsxs24('div', {
      className: _default3.checkbox,
      children: [
        /* @__PURE__ */ jsx41('input', {
          className: `editor-checkbox-input`,
          type: 'checkbox',
          id,
          checked: value,
          onChange: () => onChange(!value),
        }),
        /* @__PURE__ */ jsx41('label', {
          htmlFor: id,
          children: options.label,
        }),
      ],
    }),
  })
}
var Checkbox = defineField({
  defaultOptions: {
    label: '',
    default: false,
  },
  render: Component2,
})

// src/styles/Repeater.module.scss
var _default4 = {}

var Component3 = ({ value: valueProps, onChange, options }) => {
  const value = valueProps ?? []
  const canAdd = !options.max || value.length < options.max
  const canRemove = !options.min || value.length > options.min
  const [lastAdditionIndex, setLastAdditionIndex] = useState10(-1)
  const add = () => {
    onChange([...value, fillDefaults({ _id: uniqId2() }, options.fields)])
    setLastAdditionIndex(value.length)
  }
  const remove = line => {
    onChange(value.filter(v => v !== line))
  }
  const updateProperty = (v, path) => {
    onChange(deepSet2(value, path, v))
  }

  function handleMove(from, to) {
    onChange(moveItem(value, from, to))
  }

  return /* @__PURE__ */ jsx42(Field, {
    label: options.label,
    children: /* @__PURE__ */ jsx42(SortableWrapper, {
      items: value,
      onMove: handleMove,
      children: /* @__PURE__ */ jsxs25('div', {
        className: _default4.repeater,
        children: [
          value.map((line, k) =>
            /* @__PURE__ */ jsx42(
              FieldLine,
              {
                line,
                index: k,
                onUpdate: updateProperty,
                onRemove: canRemove ? remove : null,
                options,
                defaultCollapsed: lastAdditionIndex !== k,
              },
              line._id,
            ),
          ),
          canAdd &&
            /* @__PURE__ */ jsx42('div', {
              className: _default4.footer,
              children: /* @__PURE__ */ jsx42(Button, {
                secondary: true,
                onClick: prevent12(add),
                icon: IconCirclePlus,
                children: options.addLabel,
              }),
            }),
        ],
      }),
    }),
  })
}
var FieldLine = ({
  line,
  index,
  onRemove,
  onUpdate,
  options,
  defaultCollapsed,
}) => {
  const [collapsed, toggleCollapsed] = useToggle3(defaultCollapsed)
  const title = options.collapsed ? line[options.collapsed] : `#${index + 1}`
  const escapedTitle = useMemo4(() => textContent(title), [title])
  return /* @__PURE__ */ jsxs25(Sortable, {
    className: _default4.item,
    item: line,
    children: [
      /* @__PURE__ */ jsxs25(SidebarHeading, {
        onClick: prevent12(toggleCollapsed),
        title: escapedTitle,
        children: [
          /* @__PURE__ */ jsx42(SidebarHeading.Hover, {
            children:
              onRemove &&
              /* @__PURE__ */ jsx42(ButtonIcon, {
                danger: true,
                onClick: () => onRemove(line),
                title: t('deleteItem'),
                children: /* @__PURE__ */ jsx42(IconTrash, {
                  size: 20,
                }),
              }),
          }),
          /* @__PURE__ */ jsx42(ButtonIcon, {
            rotate: collapsed ? -90 : 0,
            onClick: prevent12(toggleCollapsed),
            children: /* @__PURE__ */ jsx42(IconDown, {
              size: 24,
            }),
          }),
        ],
      }),
      !collapsed &&
        /* @__PURE__ */ jsx42('div', {
          className: _default4.body,
          children: /* @__PURE__ */ jsx42(FieldsRenderer, {
            fields: options.fields,
            data: line,
            onUpdate,
            path: index.toString(),
          }),
        }),
    ],
  })
}
var Repeater = defineField(() => ({
  defaultOptions: { addLabel: t('addItem'), fields: [], default: [] },
  render: Component3,
}))

// src/styles/ImageURL.module.scss
var _default5 = {}

var Component4 = ({ value, onChange, options }) => {
  const id = useUniqId3('imageinput')
  const handleBrowse = () => {
    options
      .onBrowse(value)
      .then(v => {
        onChange(v)
      })
      .catch(e => {})
  }
  return /* @__PURE__ */ jsx43(Field, {
    id,
    label: options.label,
    help: options.help,
    value,
    tooltip: value
      ? /* @__PURE__ */ jsx43('img', {
          className: _default5.imageURL,
          src: value,
          alt: '',
        })
      : void 0,
    onChange: e => onChange(e.target.value),
    css: { paddingRight: 40 },
    icon: options.onBrowse
      ? /* @__PURE__ */ jsx43(ButtonIcon, {
          additionalStyle: {
            width: '32px',
            height: '32px',
          },
          onClick: prevent13(handleBrowse),
          children: /* @__PURE__ */ jsx43(IconFolder, {
            size: 16,
          }),
        })
      : void 0,
  })
}
var ImageUrl = defineField({
  defaultOptions: {
    default: '',
  },
  render: Component4,
})

var TiptapToolbarButton = styled26(UnstyledButton)(
  {
    height: 40,
    width: 28,
    flex: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      color: '#FFF',
    },
  },
  props => ({
    color: props.active ? '#FFF' : '#CCC',
    background: props.active ? 'rgba(255, 255, 255, .1)' : void 0,
  }),
)

function IconBold({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    width: size,
    height: size,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z',
      fill: 'currentColor',
    }),
  })
}

function IconItalic({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M15 20H7v-2h2.927l2.116-12H9V4h8v2h-2.927l-2.116 12H15z',
      fill: 'currentColor',
    }),
  })
}

function IconUnderline({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M8 3v9a4 4 0 1 0 8 0V3h2v9a6 6 0 1 1-12 0V3h2zM4 20h16v2H4v-2z',
      fill: 'currentColor',
    }),
  })
}

function IconMark({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M15.243 4.515l-6.738 6.737-.707 2.121-1.04 1.041 2.828 2.829 1.04-1.041 2.122-.707 6.737-6.738-4.242-4.242zm6.364 3.535a1 1 0 0 1 0 1.414l-7.779 7.779-2.12.707-1.415 1.414a1 1 0 0 1-1.414 0l-4.243-4.243a1 1 0 0 1 0-1.414l1.414-1.414.707-2.121 7.779-7.779a1 1 0 0 1 1.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zM4.283 16.89l2.828 2.829-1.414 1.414-4.243-1.414 2.828-2.829z',
      fill: 'currentColor',
    }),
  })
}

function IconLink({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z',
      fill: 'currentColor',
    }),
  })
}

function IconClear({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M12.651 14.065L11.605 20H9.574l1.35-7.661-7.41-7.41L4.93 3.515 20.485 19.07l-1.414 1.414-6.42-6.42zm-.878-6.535l.27-1.53h-1.8l-2-2H20v2h-5.927L13.5 9.257 11.773 7.53z',
      fill: 'currentColor',
    }),
  })
}

function IconList({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z',
      fill: 'currentColor',
    }),
  })
}

function IconQuote({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z',
      fill: 'currentColor',
    }),
  })
}

function IconOrderedList({ size = 24 }) {
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M8 4h13v2H8V4zM5 3v3h1v1H3V6h1V4H3V3h2zM3 14v-2.5h2V11H3v-1h3v2.5H4v.5h2v1H3zm2 5.5H3v-1h2V18H3v-1h3v4H3v-1h2v-.5zM8 11h13v2H8v-2zm0 7h13v2H8v-2z',
      fill: 'currentColor',
    }),
  })
}

function IconHeading({ size = 24, level }) {
  let path = ''
  if (level === void 0) {
    path = 'M17 11V4h2v17h-2v-8H7v8H5V4h2v7z'
  } else if (level === 1) {
    path =
      'M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm8-12v12h-2v-9.796l-2 .536V8.67L19.5 8H21z'
  } else if (level === 2) {
    path =
      'M4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 4c2.071 0 3.75 1.679 3.75 3.75 0 .857-.288 1.648-.772 2.28l-.148.18L18.034 18H22v2h-7v-1.556l4.82-5.546c.268-.307.43-.709.43-1.148 0-.966-.784-1.75-1.75-1.75-.918 0-1.671.707-1.744 1.606l-.006.144h-2C14.75 9.679 16.429 8 18.5 8z'
  } else if (level === 3) {
    path =
      'M22 8l-.002 2-2.505 2.883c1.59.435 2.757 1.89 2.757 3.617 0 2.071-1.679 3.75-3.75 3.75-1.826 0-3.347-1.305-3.682-3.033l1.964-.382c.156.806.866 1.415 1.718 1.415.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75c-.286 0-.556.069-.794.19l-1.307-1.547L19.35 10H15V8h7zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z'
  } else if (level === 4) {
    path =
      'M13 20h-2v-7H4v7H2V4h2v7h7V4h2v16zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66H22zm-2 3.133L17.19 16H20v-4.867z'
  } else if (level === 5) {
    path =
      'M22 8v2h-4.323l-.464 2.636c.33-.089.678-.136 1.037-.136 2.21 0 4 1.79 4 4s-1.79 4-4 4c-1.827 0-3.367-1.224-3.846-2.897l1.923-.551c.24.836 1.01 1.448 1.923 1.448 1.105 0 2-.895 2-2s-.895-2-2-2c-.63 0-1.193.292-1.56.748l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z'
  } else if (level === 6) {
    path =
      'M21.097 8l-2.598 4.5c2.21 0 4.001 1.79 4.001 4s-1.79 4-4 4-4-1.79-4-4c0-.736.199-1.426.546-2.019L18.788 8h2.309zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2zm14.5 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z'
  }
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: path,
      fill: 'currentColor',
    }),
  })
}

function IconAlign({ size = 24, direction = 'left' }) {
  if (direction === 'left') {
    return /* @__PURE__ */ jsx44('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      children: /* @__PURE__ */ jsx44('path', {
        d: 'M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z',
        fill: 'currentColor',
      }),
    })
  } else if (direction === 'right') {
    return /* @__PURE__ */ jsx44('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      children: /* @__PURE__ */ jsx44('path', {
        d: 'M3 4h18v2H3V4zm4 15h14v2H7v-2zm-4-5h18v2H3v-2zm4-5h14v2H7V9z',
        fill: 'currentColor',
      }),
    })
  } else if (direction === 'center') {
    return /* @__PURE__ */ jsx44('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      children: /* @__PURE__ */ jsx44('path', {
        d: 'M3 4h18v2H3V4zm2 15h14v2H5v-2zm-2-5h18v2H3v-2zm2-5h14v2H5V9z',
        fill: 'currentColor',
      }),
    })
  }
  return /* @__PURE__ */ jsx44('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    children: /* @__PURE__ */ jsx44('path', {
      d: 'M3 4h18v2H3V4zm0 15h18v2H3v-2zm0-5h18v2H3v-2zm0-5h18v2H3V9z',
      fill: 'currentColor',
    }),
  })
}

var baseHeight = 40
var TiptapDropdown = styled27.div(
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: '#444',
    height: baseHeight,
    flex: 'none',
    overflow: 'hidden',
    alignItems: 'center',
    transition: 'height .2s, transform .3s',
    transformOrigin: '50% 0',
    borderRadius: 3,
    '& > *': {
      height: baseHeight - 10,
    },
    '& > *:first-of-type': {
      marginTop: 0,
      transition: 'margin .3s',
      height: baseHeight,
    },
    '&:hover > *:first-of-type': {
      marginTop: -3,
    },
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  props => ({
    '&:hover': {
      height: baseHeight * props.size - 10 * (props.size - 1),
    },
  }),
)

var TiptapToolbarAlign = ({ editor }) => {
  const alignments = ['left', 'center', 'right', 'justify']
  const currentAlign = alignments.filter(align =>
    editor.isActive({ textAlign: align }),
  )[0]
  if (!editor.can().setParagraph()) {
    return null
  }
  return /* @__PURE__ */ jsxs26(TiptapDropdown, {
    size: alignments.length,
    children: [
      /* @__PURE__ */ jsx45(TiptapToolbarButton, {
        title: capitalize(currentAlign),
        type: 'button',
        children: /* @__PURE__ */ jsx45(IconAlign, {
          size: 16,
          direction: currentAlign,
        }),
      }),
      alignments
        .filter(align => align !== currentAlign)
        .map(align =>
          /* @__PURE__ */ jsx45(
            TiptapToolbarButton,
            {
              onClick: prevent14(() =>
                editor.chain().focus().setTextAlign(align).run(),
              ),
              css: { height: 30 },
              title: capitalize(align),
              children: /* @__PURE__ */ jsx45(IconAlign, {
                size: 16,
                direction: align,
              }),
            },
            align,
          ),
        ),
    ],
  })
}

var TiptapToolbarHeadings = ({ editor }) => {
  const levels = [2, 3, 4, 5, 6]
  const currentLevel = editor.getAttributes('heading').level
  if (
    !('toggleHeading' in editor.can()) ||
    !editor.can().toggleHeading({ level: 2 })
  ) {
    return null
  }
  const clickHandler = level =>
    prevent15(() => {
      if (!level) {
        return
      }
      editor.chain().focus().toggleHeading({ level }).run()
    })
  return /* @__PURE__ */ jsxs27(TiptapDropdown, {
    size: levels.length + 1,
    children: [
      /* @__PURE__ */ jsx46(TiptapToolbarButton, {
        active: !!currentLevel,
        onClick: clickHandler(currentLevel),
        children: /* @__PURE__ */ jsx46(IconHeading, {
          size: 16,
          level: currentLevel,
        }),
      }),
      levels.map(level =>
        /* @__PURE__ */ jsx46(
          TiptapToolbarButton,
          {
            active: level === currentLevel,
            onClick: clickHandler(level),
            css: { height: 30 },
            children: /* @__PURE__ */ jsx46(IconHeading, {
              size: 16,
              level,
            }),
          },
          level,
        ),
      ),
    ],
  })
}

function TiptapColorPicker({ editor, colors }) {
  const currentColor = editor?.getAttributes('textStyle').color
  const cssColors = useMemo5(() => colors.map(colorToProperty), [colors])
  const [expanded, toggleExpanded, setExpanded] = useToggle4()
  const handleChange = color => {
    toggleExpanded()
    editor.chain().focus().setColor(color).run()
  }
  useEffect7(() => {
    if (editor.isFocused) {
      setExpanded(false)
    }
  }, [editor.isFocused])
  if (colors.length === 0) {
    return null
  }
  return /* @__PURE__ */ jsxs28('div', {
    css: { position: 'relative' },
    children: [
      /* @__PURE__ */ jsx47(TiptapToolbarButton, {
        onClick: prevent16(toggleExpanded),
        children: /* @__PURE__ */ jsxs28('svg', {
          width: 16,
          height: 16,
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            /* @__PURE__ */ jsx47('path', {
              d: 'M15.246 14H8.754L7.154 18H5L11 3H13L19 18H16.846L15.246 14ZM14.446 12L12 5.885L9.554 12H14.446Z',
              fill: 'currentColor',
            }),
            /* @__PURE__ */ jsx47('path', {
              d: 'M3 20H21V22H3V20Z',
              fill: currentColor || 'currentColor',
            }),
          ],
        }),
      }),
      expanded &&
        /* @__PURE__ */ jsx47(Palette, {
          colors: cssColors,
          onChange: handleChange,
        }),
    ],
  })
}

var PaletteWrapper = styled28.div(
  {
    position: 'absolute',
    top: '100%',
    right: 0,
    background: '#444',
    display: 'grid',
    gridGap: 3,
    padding: 4,
  },
  props => ({
    gridTemplateColumns: `repeat(${Math.ceil(props.size / 3)}, 16px)`,
  }),
)
var PaletteItem = styled28.button({
  width: 16,
  height: 16,
  border: '1px solid transparent',
  cursor: 'pointer',
  '&:hover': {
    borderColor: 'white',
    transform: 'scale(1.5)',
  },
})

function Palette({ colors, onChange }) {
  const changeHandler = color => prevent16(() => onChange(color))
  return /* @__PURE__ */ jsx47(PaletteWrapper, {
    size: colors.length,
    children: colors.map(color =>
      /* @__PURE__ */ jsx47(
        PaletteItem,
        {
          onClick: changeHandler(color),
          style: { backgroundColor: color },
        },
        color,
      ),
    ),
  })
}

var iconSize = 16

function TiptapToolbar({ editor, colors }) {
  const [mode, setMode] = useState11(0 /* Buttons */)
  const setLinkMode = () => setMode(1 /* Link */)
  const setButtonsMode = () => setMode(0 /* Buttons */)
  const insertLink = link => {
    editor.commands.setLink({ href: link })
  }
  let rootElement = null
  try {
    rootElement = useRootElement()
  } catch (e) {}
  useEffect8(() => {
    if (editor.isFocused) {
      setMode(0 /* Buttons */)
    }
  }, [editor.isFocused])
  return /* @__PURE__ */ jsx48(Toolbar, {
    className: 'WysiwygToolbar',
    editor,
    shouldShow: ({ from, to }) => from !== to,
    tippyOptions: {
      maxWidth: 500,
      ...(rootElement
        ? {
            appendTo: () => rootElement,
          }
        : {}),
    },
    children:
      mode === 1 /* Link */
        ? /* @__PURE__ */ jsx48(ToolbarLink, {
            onSubmit: insertLink,
            onCancel: setButtonsMode,
          })
        : /* @__PURE__ */ jsx48(ToolbarButtons, {
            editor,
            onLinkClick: setLinkMode,
            colors,
          }),
  })
}

function ToolbarLink({ onSubmit, onCancel }) {
  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onCancel()
    }
  }
  const handleSubmit = e => {
    const data = new FormData(e.target)
    const link = data.get('link')
    if (link) {
      onSubmit(link.toString())
    } else {
      onCancel(link)
    }
  }
  return /* @__PURE__ */ jsxs29(Flex, {
    as: 'form',
    onKeyDown: handleKeyDown,
    onSubmit: prevent17(handleSubmit),
    children: [
      /* @__PURE__ */ jsx48(LinkInput, {
        name: 'link',
        type: 'text',
        placeholder: 'https://...',
        autoFocus: true,
      }),
      /* @__PURE__ */ jsx48(TiptapToolbarButton, {
        children: 'Ok',
      }),
    ],
  })
}

function ToolbarButtons({ editor, onLinkClick, colors }) {
  const clearFormat = () =>
    editor.chain().focus().clearNodes().unsetAllMarks().run()
  const toggleLink = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run()
    } else {
      onLinkClick()
    }
  }
  return /* @__PURE__ */ jsxs29(Fragment9, {
    children: [
      editor.can().toggleOrderedList() &&
        /* @__PURE__ */ jsx48(TiptapToolbarButton, {
          onClick: prevent17(() =>
            editor.chain().focus().toggleOrderedList().run(),
          ),
          active: editor.isActive('orderedList'),
          title: 'Ordered List',
          children: /* @__PURE__ */ jsx48(IconOrderedList, {
            size: iconSize,
          }),
        }),
      editor.can().toggleBulletList() &&
        /* @__PURE__ */ jsx48(TiptapToolbarButton, {
          onClick: prevent17(() =>
            editor.chain().focus().toggleBulletList().run(),
          ),
          active: editor.isActive('bulletList'),
          title: 'Unordered List',
          children: /* @__PURE__ */ jsx48(IconList, {
            size: iconSize,
          }),
        }),
      editor.can().toggleBlockquote() &&
        /* @__PURE__ */ jsx48(TiptapToolbarButton, {
          onClick: prevent17(() =>
            editor.chain().focus().toggleBlockquote().run(),
          ),
          active: editor.isActive('blockquote'),
          title: 'Blockquote',
          children: /* @__PURE__ */ jsx48(IconQuote, {
            size: iconSize,
          }),
        }),
      /* @__PURE__ */ jsx48(TiptapToolbarHeadings, {
        editor,
      }),
      editor.can().toggleBulletList() && /* @__PURE__ */ jsx48(Separator, {}),
      /* @__PURE__ */ jsx48(TiptapToolbarAlign, {
        editor,
      }),
      /* @__PURE__ */ jsx48(TiptapToolbarButton, {
        onClick: prevent17(() => editor.chain().focus().toggleBold().run()),
        active: editor.isActive('bold'),
        title: 'Bold',
        children: /* @__PURE__ */ jsx48(IconBold, {
          size: iconSize,
        }),
      }),
      /* @__PURE__ */ jsx48(TiptapToolbarButton, {
        onClick: prevent17(() => editor.chain().focus().toggleItalic().run()),
        active: editor.isActive('italic'),
        title: 'Italic',
        children: /* @__PURE__ */ jsx48(IconItalic, {
          size: iconSize,
        }),
      }),
      /* @__PURE__ */ jsx48(TiptapToolbarButton, {
        onClick: prevent17(() =>
          editor.chain().focus().toggleUnderline().run(),
        ),
        active: editor.isActive('underline'),
        title: 'Underline',
        children: /* @__PURE__ */ jsx48(IconUnderline, {
          size: iconSize,
        }),
      }),
      /* @__PURE__ */ jsx48(TiptapToolbarButton, {
        onClick: prevent17(() =>
          editor.chain().focus().toggleHighlight().run(),
        ),
        active: editor.isActive('highlight'),
        title: 'Mark',
        children: /* @__PURE__ */ jsx48(IconMark, {
          size: iconSize,
        }),
      }),
      /* @__PURE__ */ jsx48(TiptapColorPicker, {
        editor,
        colors,
      }),
      /* @__PURE__ */ jsx48(Separator, {}),
      /* @__PURE__ */ jsx48(TiptapToolbarButton, {
        onClick: prevent17(toggleLink),
        active: editor.isActive('link'),
        title: 'Link',
        children: /* @__PURE__ */ jsx48(IconLink, {
          size: iconSize,
        }),
      }),
      /* @__PURE__ */ jsx48(TiptapToolbarButton, {
        onClick: prevent17(clearFormat),
        title: 'Clear',
        children: /* @__PURE__ */ jsx48(IconClear, {
          size: iconSize,
        }),
      }),
    ],
  })
}

var Toolbar = styled29(BubbleMenu)({
  borderRadius: 25,
  backgroundColor: '#444',
  color: '#FFF',
  height: 40,
  display: 'flex',
  padding: '0 1em',
})
var Separator = styled29.div({
  width: '.5em',
  flex: 'none',
})
var LinkInput = styled29.input({
  border: 'none',
  height: 30,
  color: 'inherit',
  font: 'inherit',
  background: 'transparent',
  outline: 'none',
})

var SingleDocument = Node.create({
  name: 'doc',
  topNode: true,
  group: 'block',
  content: 'inline*',
})

function TiptapEditor({
  value,
  onChange,
  multiline = false,
  colors = [],
  defaultAlign = 'left',
  backgroundColor,
  color,
}) {
  const [isFocused, setFocus] = useState12(false)
  const onChangeRef = useRef9(onChange)
  onChangeRef.current = onChange
  const editor = useEditor({
    extensions: [
      ...(multiline ? [Document] : [SingleDocument]),
      Paragraph,
      OrderedList,
      BulletList,
      ListItem,
      Text2,
      Bold,
      Italic,
      Highlight,
      Underline,
      TextStyle,
      Color,
      HardBreak,
      History,
      Blockquote,
      Link.configure({ openOnClick: false }),
      Heading.configure({ levels: [2, 3, 4, 5, 6] }),
      TextAlign.configure({
        types: [
          'heading',
          'bulletList',
          'listItem',
          'orderedList',
          'blockquote',
          'paragraph',
        ],
        defaultAlignment: defaultAlign,
      }),
    ],
    onUpdate: ({ editor: editor2 }) =>
      onChangeRef.current(cleanHTML(editor2.getHTML(), multiline)),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    content: value,
  })
  useEffect9(() => {
    if (editor) {
      editor.extensionManager.extensions.find(
        e => e.name === 'textAlign',
      ).options.defaultAlignment = defaultAlign
      editor.commands.setContent(value)
    }
  }, [defaultAlign])
  return /* @__PURE__ */ jsxs30(EditorWrapper, {
    focused: isFocused,
    style: { textAlign: defaultAlign, color, backgroundColor },
    children: [
      /* @__PURE__ */ jsx49(EditorContent, {
        editor,
      }),
      editor &&
        /* @__PURE__ */ jsx49(TiptapToolbar, {
          editor,
          colors,
        }),
    ],
  })
}

var cleanHTML = (str, multiline) => {
  let content = str.replaceAll(
    /(<[uo]l[^>]*>)(.*?)(<\/[uo]l>)/gi,
    (_, openingTag, inner, closingTag) =>
      `${openingTag}${removeParagraphs(inner)}${closingTag}`,
  )
  if (!multiline) {
    content = removeParagraphs(content)
  }
  return content.trim()
}

function removeParagraphs(str) {
  return str
    .replaceAll(/<\/p><p[^>]*>/gi, '<br>')
    .replaceAll(/<p[^>]*>/gi, '')
    .replaceAll(/<\/p>/gi, '')
}

var EditorWrapper = styled30.div(
  {
    border: '1px solid var(--border)',
    background: 'var(--background)',
    borderRadius: '0.25em',
    color: 'var(--color-dark)',
    padding: 'calc(1.5 * var(--space, 8px)) calc(1 * var(--space, 8px))',
    display: 'block',
    width: '100%',
    outline: 'none',
    minHeight: '48px',
    'p, ul, ol, h2, h3, h4, h5, h1': {
      margin: '0 0 1em 0',
    },
    'li p': {
      margin: 0,
    },
    '.ProseMirror': {
      outline: 'none',
    },
    '.ProseMirror > *:last-child': {
      margin: 0,
    },
  },
  props => ({
    ...(props.focused ? Styles.FocusState : void 0),
    p: {
      marginBottom: props.singleLine ? '0' : '1em',
    },
  }),
)

var Component5 = ({
  value,
  onChange,
  options,
  backgroundColor,
  textColor,
  defaultAlign,
}) => {
  return /* @__PURE__ */ jsx50(Field, {
    label: options.label,
    help: options.help,
    children: /* @__PURE__ */ jsx50(TiptapEditor, {
      value,
      onChange,
      backgroundColor,
      color: textColor,
      colors: options.colors,
      multiline: options.multiline,
      defaultAlign,
    }),
  })
}
var HTMLText = (name, options = {}) => {
  return {
    name,
    options: {
      multiline: true,
      allowHeadings: false,
      default: '',
      ...options,
    },
    extraProps: data => ({
      backgroundColor: colorToProperty2(
        options.backgroundColor && data[options.backgroundColor],
      ),
      textColor: colorToProperty2(options.textColor && data[options.textColor]),
      defaultAlign: options.defaultAlign ? data[options.defaultAlign] : void 0,
    }),
    render: Component5,
    ...defaultFieldProperties(),
  }
}

// src/styles/Color.module.scss
var _default6 = {}

var Component6 = ({ value, onChange, options }) => {
  const [isOpen, setOpen] = useState13(false)
  const changeHandler = color =>
    prevent18(() => {
      onChange(color)
      setOpen(false)
    })
  return /* @__PURE__ */ jsx51(Field, {
    label: options.label,
    children: /* @__PURE__ */ jsx51('div', {
      className: _default6.color,
      children: /* @__PURE__ */ jsxs31(Popover.Root, {
        open: isOpen,
        onOpenChange: () => setOpen(v => !v),
        children: [
          /* @__PURE__ */ jsx51(Popover.Trigger, {
            asChild: true,
            children: /* @__PURE__ */ jsx51('button', {
              className: `${_default6.button} ${
                value === null ? _default6.transparent : ''
              }`,
              style: value
                ? {
                    '--selected-color': colorToProperty3(value),
                  }
                : void 0,
            }),
          }),
          /* @__PURE__ */ jsx51(Popover.Content, {
            className: _default6.tooltip,
            side: 'top',
            children: /* @__PURE__ */ jsxs31('div', {
              className: _default6.palette,
              style: { '--children': options.colors.length + 1 },
              children: [
                /* @__PURE__ */ jsx51('button', {
                  className: _default6['item-transparent'],
                  onClick: prevent18(() => onChange(null)),
                }),
                options.colors.map(color =>
                  /* @__PURE__ */ jsx51(
                    'button',
                    {
                      className: _default6.item,
                      style: {
                        '--color-button': colorToProperty3(color),
                      },
                      onClick: changeHandler(color),
                    },
                    color,
                  ),
                ),
              ],
            }),
          }),
        ],
      }),
    }),
  })
}
var Color2 = defineField({
  defaultOptions: {
    default: '',
    colors: [],
  },
  render: Component6,
})

// src/styles/Row.module.scss
var _default7 = {}

var RowComponent = ({ options, children }) => {
  console.log(options.columns)
  return /* @__PURE__ */ jsx52(Field, {
    label: options.label,
    children: /* @__PURE__ */ jsx52(Flex, {
      className: `${_default7.row} ${options.columns ? _default7.grid : ''}`,
      style: { '--row-columns': options.columns || '' },
      children,
    }),
  })
}
var Row = defineFieldGroup({
  defaultOptions: {},
  render: RowComponent,
})

// src/styles/Alignment.module.scss
var _default8 = {}

function AlignmentButton({ value, onChange, icon: IconComponent, ...props }) {
  return /* @__PURE__ */ jsxs32('div', {
    className: _default8.alignment__button,
    children: [
      /* @__PURE__ */ jsx53('input', {
        type: 'radio',
        value,
        onChange: () => onChange(value),
        title: capitalize2(value),
        ...props,
      }),
      /* @__PURE__ */ jsx53('div', {
        children: /* @__PURE__ */ jsx53(IconComponent, {}),
      }),
    ],
  })
}

var AlignmentButtons = ({ children }) => {
  return /* @__PURE__ */ jsx54('div', {
    className: _default8.alignment__buttons,
    children,
  })
}

var AlignmentIcons = {
  top: IconAlignTop,
  left: IconAlignLeft,
  bottom: IconAlignBottom,
  right: IconAlignRight,
}
var Component7 = ({ value, onChange, options }) => {
  const alignements = [
    'left',
    'right',
    ...(options.vertical ? ['top', 'bottom'] : []),
  ]
  return /* @__PURE__ */ jsx55(Field, {
    label: options.label,
    children: /* @__PURE__ */ jsx55(AlignmentButtons, {
      children: alignements.map(alignment =>
        /* @__PURE__ */ jsx55(
          AlignmentButton,
          {
            value: alignment,
            checked: value === alignment,
            onChange,
            icon: AlignmentIcons[alignment],
          },
          alignment,
        ),
      ),
    }),
  })
}
var Alignment = defineField({
  defaultOptions: {
    default: 'left',
  },
  render: Component7,
})

var Component8 = ({ value, onChange, options }) => {
  const id = useUniqId4('selectinput')
  return /* @__PURE__ */ jsx56(Field, {
    id,
    label: options.label,
    help: options.help,
    options: options.options,
    value,
    onInput: e => onChange(e.target.value),
  })
}
var Select = defineField({
  defaultOptions: {
    default: '',
    options: [],
  },
  render: Component8,
})

var Component9 = ({ value, onChange, options }) => {
  const id = useUniqId5('numberinput')
  return /* @__PURE__ */ jsx57(Field, {
    label: options.label,
    type: 'number',
    id,
    value,
    onInput: e => onChange(e.target.value),
    help: options.help,
  })
}
var Number = defineField({
  defaultOptions: {
    default: '',
  },
  render: Component9,
})

// src/styles/Range.module.scss
var _default9 = {}

var Component10 = ({ value, onChange, options }) => {
  return /* @__PURE__ */ jsx58(Field, {
    label: /* @__PURE__ */ jsxs33(Fragment10, {
      children: [
        options.label,
        ' ',
        /* @__PURE__ */ jsxs33('small', {
          children: ['(', value, ')'],
        }),
      ],
    }),
    help: options.help,
    children: /* @__PURE__ */ jsxs33(Slider.Root, {
      className: _default9.range,
      min: options.min,
      max: options.max,
      value: [value === void 0 ? options.default || 0 : value],
      step: options.step,
      onValueChange: v => onChange(v[0] || 0),
      children: [
        /* @__PURE__ */ jsx58(Slider.Track, {
          className: _default9.track,
          children: /* @__PURE__ */ jsx58(Slider.Range, {
            className: _default9.track__selected,
          }),
        }),
        /* @__PURE__ */ jsx58(Slider.Thumb, {
          className: _default9.thumb,
        }),
      ],
    }),
  })
}
var Range2 = defineField({
  defaultOptions: {
    default: 0,
    min: 0,
    max: 100,
    step: 1,
  },
  render: Component10,
})

var Component11 = ({ children, options }) => {
  const childrenForTab = tab => {
    return cloneElement3(children, {
      fields: tab.fields,
    })
  }
  return /* @__PURE__ */ jsx59(Tabs, {
    children: options.tabs.map(tab =>
      /* @__PURE__ */ jsx59(
        Tabs.Tab,
        {
          title: tab.label,
          children: /* @__PURE__ */ jsx59(Flex, {
            column: true,
            children: childrenForTab(tab),
          }),
        },
        tab.label,
      ),
    ),
  })
}

function Tabs2(...tabs) {
  return {
    ...defaultFieldProperties(),
    group: true,
    options: { tabs },
    render: Component11,
    fields: tabs.reduce((acc, tab) => [...acc, ...tab.fields], []),
  }
}

// src/styles/DatePicker.module.scss
var _default10 = {}

var Component12 = ({ value, onChange, options }) => {
  const date = value ? new Date(value * 1e3) : null
  const [open, setOpen] = useState14(false)
  const formattedDate = date
    ? new Intl.DateTimeFormat(void 0, {
        dateStyle: 'long',
        timeStyle: options.time ? 'short' : void 0,
      }).format(date)
    : ''
  const handleChange = date2 => {
    onChange(date2.getTime() / 1e3)
    if (!options.time) {
      setOpen(false)
    }
  }
  const ReactDatePickerComponent =
    typeof ReactDatePicker === 'function'
      ? ReactDatePicker
      : ReactDatePicker.default
  const id = useUniqId6('datepickerinput')
  return /* @__PURE__ */ jsx60(Field, {
    id,
    help: options.help,
    icon: /* @__PURE__ */ jsx60(ButtonIcon, {
      additionalStyle: {
        width: '32px',
        height: '32px',
      },
      onClick: prevent19(() => setOpen(true)),
      children: /* @__PURE__ */ jsx60(IconCalendar, {
        size: 16,
      }),
    }),
    children: /* @__PURE__ */ jsxs34('div', {
      className: _default10.datePicker,
      children: [
        /* @__PURE__ */ jsx60(FieldUi2, {
          id,
          children: options.label,
          onFocus: () => setOpen(true),
          value: formattedDate,
          readOnly: true,
        }),
        open &&
          /* @__PURE__ */ jsx60('div', {
            style: { position: 'absolute', zIndex: 4 },
            children: /* @__PURE__ */ jsx60(ReactDatePickerComponent, {
              selected: date,
              showTimeInput: options.time,
              inline: true,
              onChange: handleChange,
              onClickOutside: () => setOpen(false),
            }),
          }),
      ],
    }),
  })
}
var DatePicker = defineField({
  defaultOptions: {
    default: '',
    time: false,
  },
  render: Component12,
})

var AlignmentIcons2 = {
  left: IconTextLeft,
  center: IconTextCenter,
  right: IconTextRight,
}
var Component13 = ({ value, onChange, options }) => {
  const alignements = Object.keys(AlignmentIcons2)
  const id = useUniqId7()
  return /* @__PURE__ */ jsx61(Field, {
    label: options.label,
    children: /* @__PURE__ */ jsx61(AlignmentButtons, {
      children: alignements.map(alignment =>
        /* @__PURE__ */ jsx61(
          AlignmentButton,
          {
            name: id,
            value: alignment,
            checked: value === alignment,
            onChange,
            icon: AlignmentIcons2[alignment],
          },
          alignment,
        ),
      ),
    }),
  })
}
var TextAlign2 = defineField({
  defaultOptions: {
    default: 'left',
  },
  render: Component13,
})

// src/langs/fr.ts
var Translations2 = {
  copyPage: 'Copier le code de la page',
  deleteComponent: 'Supprimer le bloc',
  copyComponent: 'Copier le  bloc',
  searchComponent: 'Rechercher un bloc',
  copySuccess: 'Le code a bi\xE9n \xE9t\xE9 copi\xE9',
  copyInstructions: 'vous pouvez le coller sur une autre page (CTRL + V)',
  addComponent: 'Ajouter un bloc',
  responsiveView: 'Vue responsive',
  addItem: 'Ajouter un \xE9l\xE9ment',
  deleteItem: "Supprimer l'\xE9l\xE9ment",
  rollback: 'R\xE9tablir',
  deleteItemConfirm: 'Le bloc a bien \xE9t\xE9 supprim\xE9',
  unknownComponent: 'Bloc inconnu',
  save: 'Sauvegarder',
  close: 'Fermer',
  noContent: `Vous n'avez pas encore de contenu`,
  useTemplate: 'Utilisez un template',
}

var components = {}
var templates = []
var _Editor = class {
  constructor(options = {}) {
    _Editor.i18n = options.lang || Translations
  }

  registerComponent(name, definition) {
    components[name] = { label: 'title', ...definition }
  }

  registerTemplate(template) {
    templates.push(template)
  }

  defineElement(elementName = 'editor-builder') {
    class EditorElement extends HTMLElement {
      constructor() {
        super(...arguments)
        __publicField(this, '_mounted', false)
        __publicField(this, '_data', null)
        __publicField(this, '_value', '')
      }

      static get observedAttributes() {
        return ['hidden', 'value']
      }

      get value() {
        return this._value
      }

      set value(v) {
        if (v === this._value) {
          return
        }
        this._value = v
        this._data = null
        this.render()
      }

      connectedCallback() {
        this._value = this.getAttribute('value') || '[]'
        this.render()
        this._mounted = true
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (!this._mounted) {
          return false
        }
        if (name === 'value') {
          if (newValue === this._value) {
            return
          }
          this._value = newValue
        }
        this.render()
      }

      disconnectedCallback() {
        this._mounted = false
      }

      parseValue(value) {
        if (this._data === null) {
          try {
            const json = JSON.parse(value)
            this._data = indexify3(json).map(value2 => {
              return fillDefaults(
                value2,
                components[value2._name]?.fields ?? [],
              )
            })
          } catch (e) {
            console.error('Impossible de parser les donn\xE9es', value, e)
            alert("Impossible de parser les donn\xE9es de l'\xE9diteur visuel")
            this._data = []
          }
        }
        return this._data
      }

      render() {
        const data = this.parseValue(this._value)
        const hiddenCategories =
          this.getAttribute('hidden-categories')?.split(';') ?? []
        createRoot(this).render(
          /* @__PURE__ */ jsx62(StoreProvider, {
            data,
            definitions: components,
            templates,
            hiddenCategories,
            rootElement: this,
            insertPosition:
              this.getAttribute('insertPosition') ?? 'start' /* Start */,
            children: /* @__PURE__ */ jsx62(EditorComponent, {
              element: this,
              value: data,
              previewUrl: this.getAttribute('preview') ?? '',
              iconsUrl: this.getAttribute('iconsUrl') ?? '/',
              name: this.getAttribute('name') ?? '',
              visible: this.getAttribute('hidden') === null,
              onChange: value => {
                if (this._value === value) {
                  return
                }
                this._value = value
                this.dispatchEvent(
                  new CustomEvent('change', {
                    detail: value,
                  }),
                )
              },
            }),
          }),
        )
      }
    }

    __publicField(EditorElement, 'changeEventName', 'change')
    customElements.define(elementName, EditorElement)
  }
}
var Editor = _Editor
__publicField(Editor, 'i18n', Translations)

function EditorComponent({
  value,
  previewUrl,
  name,
  element,
  iconsUrl,
  visible: visibleProps,
  onChange,
}) {
  const skipNextChange = useRef10(true)
  const updateData = useUpdateData()
  const data = useData()
  const visible = useStateDelayed(visibleProps)
  const handleClose = () => {
    element.dispatchEvent(new Event('close'))
  }
  const doNothing = () => null
  const cleanedData = useMemo6(() => stringifyFields2(data), [data])
  useUpdateEffect2(() => {
    skipNextChange.current = true
    updateData(value)
  }, [value])
  useClipboardPaste(visible)
  useEffect10(() => {
    if (skipNextChange.current) {
      skipNextChange.current = false
    } else {
      onChange(cleanedData)
    }
  }, [cleanedData])
  const div = useRef10(null)
  useStopPropagation(div, ['change', 'close'])
  if (!visible) {
    return /* @__PURE__ */ jsx62('textarea', {
      hidden: true,
      name,
      value: cleanedData,
      onChange: doNothing,
    })
  }
  return /* @__PURE__ */ jsxs35('div', {
    ref: div,
    children: [
      /* @__PURE__ */ jsx62(BaseStyles, {
        children: /* @__PURE__ */ jsx62(Layout, {
          data,
          onClose: handleClose,
          previewUrl,
          iconsUrl,
        }),
      }),
      /* @__PURE__ */ jsx62('textarea', {
        hidden: true,
        name,
        value: cleanedData,
        onChange: doNothing,
      }),
    ],
  })
}

export {
  Alignment,
  BaseStyles,
  Checkbox,
  Color2 as Color,
  DatePicker,
  Translations as EN,
  Editor,
  EditorComponent,
  Translations2 as FR,
  Field,
  FieldsRenderer,
  HTMLText,
  ImageUrl,
  Number,
  Range2 as Range,
  React10 as React,
  Repeater,
  Row,
  Select,
  Tabs2 as Tabs,
  Text,
  TextAlign2 as TextAlign,
  defineField,
  defineFieldGroup,
}
