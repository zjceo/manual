import React from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

interface Product {
  id: string;
  label: string;
  path: string;
}

const products: Product[] = [
  { id: 'pro6', label: 'Pro 6', path: '/pro6' },
  { id: 'prox', label: 'Pro X', path: '/proX' },
  { id: 'pro7', label: 'Pro 7', path: '/pro7' },
  { id: 'chatbuho', label: 'ChatBuho', path: '/chatbuho' },
  { id: 'qrbuho', label: 'QrBuho', path: '/qrbuho' },
];

function ProductSelector(): JSX.Element {
  const location = useLocation();
  
  // Detectar el producto actual basado en la URL
  const currentProduct = products.find(p => 
    location.pathname.toLowerCase().startsWith(p.path.toLowerCase())
  ) || products[1]; // Por defecto Pro X

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const product = products.find(p => p.id === e.target.value);
    if (product) {
      window.location.href = product.path;
    }
  };

  return (
    <div className={styles.productSelector}>
      <select 
        value={currentProduct.id}
        onChange={handleChange}
        className={styles.select}
        aria-label="Seleccionar producto"
      >
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductSelector;