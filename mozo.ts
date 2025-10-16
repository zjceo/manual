import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Definimos prefijos para los iconos que usaremos
const ICON_PREFIX = 'icon:';
const BOOK_ICON = `${ICON_PREFIX}book-open`;
const ROCKET_ICON = `${ICON_PREFIX}rocket`;
const COLUMNS_ICON = `${ICON_PREFIX}columns-3`;
const SETTINGS_ICON = `${ICON_PREFIX}settings`;
const LOG_IN_ICON = `${ICON_PREFIX}log-in`;
const SHOPPING_CART_ICON = `${ICON_PREFIX}shopping-cart`;
const TABLE_ICON = `${ICON_PREFIX}table`;

const mozoSidebar: SidebarsConfig = {
  docs: [
    {
      type: 'doc',
      id: 'introduccion',
      label: `${BOOK_ICON} Introducción`,
    },
    {
      type: 'doc',
      id: 'Instalacion-Mozo-cPanel',
      label: `${ROCKET_ICON} Instalación de Mozo en cPanel`,
    },
    {
      type: 'doc',
      id: 'mozo-comparison',
      label: `${COLUMNS_ICON} Mozo.pe vs Mozo Compilado`,
    },
    {
      type: 'doc',
      id: 'mozo_config_previa',
      label: `${SETTINGS_ICON} Mozo: Configuración Previa`,
    },
    {
      type: 'doc',
      id: 'iniciar-sesion-mozo',
      label: `${LOG_IN_ICON} Iniciar Sesión en Mozo`,
    },
    {
      type: 'doc',
      id: 'pos',
      label: `${SHOPPING_CART_ICON} Módulo POS (Punto de Venta)`,
    },
    {
      type: 'doc',
      id: 'mesas',
      label: `${TABLE_ICON} Módulo Mesas`,
    },
  ],
};

export default mozoSidebar;