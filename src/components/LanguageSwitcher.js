import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';

const languages = [
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'pt', label: 'PT', full: 'Português' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation(['common']);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = (localStorage.getItem('i18nextLng') || 'en').slice(0, 2);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectLang = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <LangSwitcherStyles ref={ref}>
      <button
        type="button"
        className="lang-switcher__trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {current.toUpperCase()}
        <AiOutlineDown className={`lang-switcher__chevron ${open ? 'lang-switcher__chevron--open' : ''}`} />
      </button>
      {open && (
        <ul className="lang-switcher__menu" role="listbox">
          {languages.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={current === lang.code}
              className={current === lang.code ? 'active' : ''}
              onClick={() => selectLang(lang.code)}
            >
              <span className="lang-switcher__code">{lang.label}</span>
              <span className="lang-switcher__full">{lang.full}</span>
            </li>
          ))}
        </ul>
      )}
    </LangSwitcherStyles>
  );
}

const LangSwitcherStyles = styled.div`
  position: relative;

  .lang-switcher__trigger {
    display: flex;
    align-items: center;
    gap: 6px;
    background: transparent;
    color: var(--dark-text);
    border: none;
    border-radius: 6px;
    padding: 0.4rem 0.8rem;
    font-size: var(--fs-sm);
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .lang-switcher__trigger:hover {
    border-color: var(--hover-accent);
    color: var(--hover-accent);
  }

  .lang-switcher__chevron {
    font-size: 0.7em;
    transition: transform 0.25s ease-in-out;
  }

  .lang-switcher__chevron--open {
    transform: rotate(180deg);
  }

  .lang-switcher__menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background-color: var(--dark-footer);
    border: 1px solid var(--border-subtle);
    border-radius: 8px;
    padding: 6px;
    min-width: 140px;
    list-style: none;
    z-index: 10;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }

  .lang-switcher__menu li {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.5rem 0.6rem;
    border-radius: 6px;
    font-size: var(--fs-sm);
    color: var(--dark-text);
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .lang-switcher__menu li:hover {
    background-color: var(--hover-accent);
    color: var(--dark-background);
  }

  .lang-switcher__menu li.active {
    color: var(--accent-strong, var(--accent));
    font-weight: bold;
  }

  .lang-switcher__menu li.active:hover {
    color: var(--dark-background);
  }

  .lang-switcher__code {
    font-weight: bold;
  }

  .lang-switcher__full {
    opacity: 0.7;
  }
`;
