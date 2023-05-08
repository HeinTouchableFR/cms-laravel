import {
  classNames,
  debounce,
  useJsonFetchOrFlash,
} from "@heintouchable/functions";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {Icon, Loader} from "@heintouchable/ui";

const SEARCH_URL = "/recherche";
const SEARCH_API = "/api/search";

type Props = {
  defaultValue?: string;
};
type Item = {
  title: string;
  url: string;
  category?: string;
};
type Data = {
  items: Item[];
  hits: number;
};

interface useJsonFetchOrFlashI {
  loading: boolean;
  fetch: (localUrl: string, localParams: string) => Promise<any>;
  data: Data | null;
  done: boolean;
}

export function SearchInput({ defaultValue }: Props) {
  const [query, setQuery] = useState(defaultValue || "");
  const hook: useJsonFetchOrFlashI = useJsonFetchOrFlash(SEARCH_API);
  const [selectedItem, setSelectedItem] = useState(0);
  const [isOpen, setIsOpen] = useState("");
  const inputRef = useRef<HTMLInputElement|null>(null);

  let results = hook.data?.items || [];
  if (query === "") {
    results = [];
  }

  const hits = hook.data != null ? hook.data.hits : 0;

  if (query !== "" && results.length > 0) {
    results = [
      ...results,
      {
        title: `Voir les <strong>${hits}</strong> résultats`,
        url: `${SEARCH_URL}?q=${encodeURI(query)}`,
      },
    ];
  }

  const handleClick = () => {
    if (!isOpen) {
      inputRef.current?.focus();
    }
    results = [];
    setIsOpen(!Boolean(isOpen) ? "open" : "");
  };

  const suggest = useCallback(
    debounce(async (e) => {
      const test = await hook.fetch(
        `${SEARCH_API}?q=${encodeURI(e.target.value)}`,
        ""
      );
      setSelectedItem(0);
    }, 300),
    []
  );

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    suggest(e);
  };

  // Déplace le curseur dans la liste
  const moveFocus = useCallback(
    (direction: number) => {
      if (results.length === 0) {
        return;
      }
      setSelectedItem((i) => {
        const newPosition = i + direction;
        if (i === null && direction === 1) {
          return 0;
        }
        if (i === null && direction === -1) {
          return results.length - 1;
        }
        if (newPosition < 0 || newPosition >= results.length) {
          return 0;
        }
        return newPosition;
      });
    },
    [results]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          moveFocus(1);
          return;
        case "ArrowUp":
          moveFocus(-1);
          break;
        default:
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [moveFocus]);

  return (
    <div className={"search"}>
      <div className={`search-input ${isOpen}`}>
        <input
          ref={inputRef}
          type="text"
          name="q"
          onInput={onInput}
          autoComplete={"off"}
          placeholder="Rechercher..."
        />
        <button
          onClick={handleClick}
          className={`nav-button uil uil-${isOpen ? "multiply" : "search"}`}
        >
          {hook.loading ? (
            <Loader className={"search-input_loader"} width={16} />
          ) : isOpen ? (
            <Icon name={"cross"} />
          ) : (
            <Icon name={"search"} />
          )}
        </button>
        {results.length > 0 && isOpen && (
          <ul className={"search-input__suggestions"}>
            {results.map((r: Item, index: number) => (
              <li key={r.url}>
                <a
                  className={classNames(
                    index === selectedItem ? "focused" : ""
                  )}
                  href={r.url}
                >
                  {r.category && (
                    <span className={"search-input__category"}>
                      {r.category}
                    </span>
                  )}
                  <span dangerouslySetInnerHTML={{ __html: r.title }} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
