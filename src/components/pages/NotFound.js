import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Footer from '../Footer';
import useDocumentMeta from '../hooks/useDocumentMeta';

const NotFoundStyles = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 2rem;

  h1 {
    font-size: var(--fs-display);
    color: var(--accent);
    margin: 0;
  }
  p {
    font-size: var(--fs-md);
    margin-top: 1rem;
    max-width: 480px;
  }
  .btn {
    margin-top: 2rem;
    display: inline-block;
  }
`;

export default function NotFound() {
  useDocumentMeta('Page Not Found', "The page you're looking for doesn't exist.");
  return (
    <>
      <NotFoundStyles>
        <h1>404</h1>
        <p>This page doesn't exist — it may have been moved or the link might be broken.</p>
        <Link to="/" className="btn btn--primary btn--large">
          Back to Home
        </Link>
      </NotFoundStyles>
      <Footer />
    </>
  );
}
