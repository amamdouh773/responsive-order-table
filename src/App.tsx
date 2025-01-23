import { useState } from 'react'
import OrderTable from '../src/components/OrderTable'

import './App.css'
import { Order } from './types'
import Nav from './components/Nav'

const orders: Order[] = [
  {
    id: 1,
    customerName: 'Alice',
    status: 'New',
    items: ['Item A', 'Item B'],
    createdAt: '2025-01-22'
  },
  {
    id: 2,
    customerName: 'Bob',
    status: 'Delivering',
    items: ['Item C'],
    createdAt: '2025-01-18'
  },
  {
    id: 3,
    customerName: 'Alice',
    status: 'Picking',
    items: ['Item A', 'Item B'],
    createdAt: '2025-01-21'
  },
  {
    id: 4,
    customerName: 'Bob',
    status: 'Delivered',
    items: ['Item C'],
    createdAt: '2025-01-10'
  },
  {
    id: 5,
    customerName: 'Alice',
    status: 'Picking',
    items: ['Item A', 'Item B'],
    createdAt: '2025-01-21'
  },
  {
    id: 6,
    customerName: 'Alice',
    status: 'New',
    items: ['Item A', 'Item B'],
    createdAt: '2025-01-22'
  },
  {
    id: 7,
    customerName: 'Bob',
    status: 'Delivering',
    items: ['Item C'],
    createdAt: '2025-01-18'
  },
  {
    id: 8,
    customerName: 'Alice',
    status: 'Picking',
    items: ['Item A', 'Item B'],
    createdAt: '2025-01-21'
  },
  {
    id: 9,
    customerName: 'Bob',
    status: 'Delivered',
    items: ['Item C'],
    createdAt: '2025-01-10'
  },
  {
    id: 10,
    customerName: 'Alice',
    status: 'Picking',
    items: ['Item A', 'Item B'],
    createdAt: '2025-01-21'
  }
]

function App () {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className='header'>Recent Orders 📦</h1>
      <OrderTable orders={orders} />
    </div>
  )
}

export default App
