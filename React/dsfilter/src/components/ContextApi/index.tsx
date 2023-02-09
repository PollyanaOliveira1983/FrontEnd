import { useContext } from 'react';
import { ContextNumberCount } from '../../utils/utill/context-number';
import './styles.css';

export default function CreateContext() {
  const { contextNumberCount, setContextNumberCount } =
    useContext(ContextNumberCount);

  return (
    <>
      <p>{contextNumberCount} produtos(s)</p>
    </>
  );
}