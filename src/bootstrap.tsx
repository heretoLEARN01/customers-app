import React from 'react';
import { createRoot } from 'react-dom/client';
import Customers from './Customers';

const root = createRoot(document.getElementById('root')!);
root.render(<Customers />);
