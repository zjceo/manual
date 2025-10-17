import React from 'react';
import { useLocation } from '@docusaurus/router';

const products = [
  { id: 'pro6', label: 'Pro 6', path: './', icon: '🏢' },
  { id: 'prox', label: 'Pro X', path: './proX', icon: '⚡' },
  { id: 'pro7', label: 'Pro 7', path: './pro7', icon: '🚀' },
  { id: 'chatbuho', label: 'ChatBuho', path: './chatbuho', icon: '💬' },
  { id: 'qrbuho', label: 'QrBuho', path: './qrbuho', icon: '📱' },
  { id: 'mozo', label: 'Mozo', path: './mozo', icon: '🍔' },
];

// Función para obtener el label a mostrar
const getDisplayLabel = (productId) => {
  if (productId === 'pro6') {
    return 'docs';
  }
  return products.find(p => p.id === productId)?.label || 'Pro 6';
};

function ProductSelector() {
  const location = useLocation();
  
  React.useEffect(() => {
    // Detectar el producto actual
    // Si estamos en / o en /pro6, es Pro6
    let currentProduct = products[0]; // Pro6 por defecto
    
    if (location.pathname.toLowerCase() === '/manual/' || 
        location.pathname.toLowerCase().startsWith('/manual/pro')) {
      const found = products.find(p => 
        location.pathname.toLowerCase().startsWith('/manual' + p.path.toLowerCase())
      );
      if (found) currentProduct = found;
    }

    // Obtener el label a mostrar (Pro6 → docs)
    const displayLabel = getDisplayLabel(currentProduct.id);

    // Buscar el navbar
    const navbar = document.querySelector('.navbar__items--right');
    
    if (navbar) {
      // Verificar si ya existe
      let container = document.getElementById('product-selector-root');
      
      if (!container) {
        // Crear el contenedor principal
        container = document.createElement('div');
        container.id = 'product-selector-root';
        container.className = 'custom-dropdown';
        
        // Crear el botón
        const button = document.createElement('button');
        button.className = 'custom-dropdown-button';
        button.setAttribute('aria-label', 'Seleccionar producto');
        
        // Icono del producto actual
        const iconSpan = document.createElement('span');
        iconSpan.className = 'custom-dropdown-icon';
        iconSpan.textContent = currentProduct.icon;
        
        // Nombre del producto actual (con transformación)
        const labelSpan = document.createElement('span');
        labelSpan.textContent = displayLabel;
        
        // Flecha
        const arrowSpan = document.createElement('span');
        arrowSpan.className = 'custom-dropdown-arrow';
        arrowSpan.textContent = '▼';
        
        button.appendChild(iconSpan);
        button.appendChild(labelSpan);
        button.appendChild(arrowSpan);
        
        // Crear el menú dropdown
        const menu = document.createElement('div');
        menu.className = 'custom-dropdown-menu';
        menu.style.display = 'none';
        
        // Crear los items del menú
        products.forEach(product => {
          const item = document.createElement('div');
          item.className = 'custom-dropdown-item';
          if (product.id === currentProduct.id) {
            item.classList.add('active');
          }
          
          const itemIcon = document.createElement('span');
          itemIcon.className = 'custom-dropdown-icon';
          itemIcon.textContent = product.icon;
          
          const itemLabel = document.createElement('span');
          // Aquí también aplicar la transformación
          itemLabel.textContent = getDisplayLabel(product.id);
          
          item.appendChild(itemIcon);
          item.appendChild(itemLabel);
          
          // Click en item
          item.addEventListener('click', () => {
            window.location.href = product.path;
          });
          
          menu.appendChild(item);
        });
        
        // Toggle del menú
        let isOpen = false;
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          isOpen = !isOpen;
          menu.style.display = isOpen ? 'block' : 'none';
          if (isOpen) {
            button.classList.add('open');
          } else {
            button.classList.remove('open');
          }
        });
        
        // Cerrar al hacer click fuera
        document.addEventListener('click', () => {
          if (isOpen) {
            isOpen = false;
            menu.style.display = 'none';
            button.classList.remove('open');
          }
        });
        
        container.appendChild(button);
        container.appendChild(menu);
        
        // Insertar al inicio del navbar
        navbar.insertBefore(container, navbar.firstChild);
      } else {
        // Actualizar la selección si ya existe
        const iconSpan = container.querySelector('.custom-dropdown-icon');
        const labelSpan = container.querySelector('.custom-dropdown-button > span:nth-child(2)');
        if (iconSpan && labelSpan) {
          iconSpan.textContent = currentProduct.icon;
          labelSpan.textContent = displayLabel;
        }
        
        // Actualizar item activo en el menú
        const items = container.querySelectorAll('.custom-dropdown-item');
        items.forEach((item, index) => {
          if (products[index].id === currentProduct.id) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    }
    
    // Agregar estilos
    if (!document.getElementById('product-selector-styles')) {
      const style = document.createElement('style');
      style.id = 'product-selector-styles';
      style.textContent = `
        .custom-dropdown {
          position: relative;
          margin: 0 1rem;
          animation: slideInFromRight 0.4s ease-out;
        }
        
        .custom-dropdown-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 0.75rem;
          padding: 0.6rem 1rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--ifm-font-color-base);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
          min-width: 140px;
          justify-content: space-between;
        }
        
        .custom-dropdown-button:hover {
          transform: translateY(-2px);
          border-color: rgba(99, 102, 241, 0.6);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%);
        }
        
        .custom-dropdown-arrow {
          transition: transform 0.3s ease;
          font-size: 0.7rem;
          color: #6366f1;
        }
        
        .custom-dropdown-button.open .custom-dropdown-arrow {
          transform: rotate(180deg);
        }
        
        .custom-dropdown-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          right: 0;
          background: var(--ifm-navbar-background-color);
          border: 2px solid rgba(99, 102, 241, 0.3);
          border-radius: 0.75rem;
          box-shadow: 0 10px 40px rgba(99, 102, 241, 0.2);
          overflow: hidden;
          z-index: 1000;
          animation: dropdownSlideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .custom-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--ifm-font-color-base);
          cursor: pointer;
          transition: all 0.2s ease;
          border-bottom: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .custom-dropdown-item:last-child {
          border-bottom: none;
        }
        
        .custom-dropdown-item:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%);
          color: #6366f1;
          padding-left: 1.25rem;
        }
        
        .custom-dropdown-item.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%);
          color: #6366f1;
          font-weight: 600;
        }
        
        .custom-dropdown-icon {
          font-size: 1.2rem;
          filter: grayscale(0.3);
        }
        
        .custom-dropdown-item:hover .custom-dropdown-icon,
        .custom-dropdown-item.active .custom-dropdown-icon {
          filter: grayscale(0);
        }
        
        /* Modo oscuro */
        [data-theme='dark'] .custom-dropdown-button {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.25);
          color: #e0e7ff;
        }
        
        [data-theme='dark'] .custom-dropdown-button:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%);
          border-color: rgba(139, 92, 246, 0.6);
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
        }
        
        [data-theme='dark'] .custom-dropdown-menu {
          background: #1a1b26;
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 10px 40px rgba(139, 92, 246, 0.3);
        }
        
        [data-theme='dark'] .custom-dropdown-item {
          color: #e0e7ff;
          border-bottom-color: rgba(139, 92, 246, 0.2);
        }
        
        [data-theme='dark'] .custom-dropdown-item:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.2) 100%);
          color: #a78bfa;
        }
        
        [data-theme='dark'] .custom-dropdown-item.active {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%);
          color: #a78bfa;
        }
        
        [data-theme='dark'] .custom-dropdown-arrow {
          color: #a78bfa;
        }
        
        /* Animación de entrada */
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Responsive */
        @media (max-width: 996px) {
          .custom-dropdown {
            margin: 0.5rem 0;
          }
          
          .custom-dropdown-button {
            width: 100%;
            max-width: 200px;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, [location.pathname]);

  return null;
}

export default function Root({children}) {
  return (
    <>
      <ProductSelector />
      {children}
    </>
  );
}