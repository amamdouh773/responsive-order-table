import { useState } from 'react'
import OrderTable from '../src/components/OrderTable'

import './App.css'
import { Order } from './types'
import Filter from './components/Filter'
import SearchBar from './components/SearchBar'
import DarkModeToggle from './components/DarkModeToggle'
import Nav from './components/Nav'

function App () {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [filterStatus, setFilterStatus] = useState<'All' | Order['status']>(
    'All'
  )
  const [searchQuery, setSearchQuery] = useState<string>('')
  

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
    }
  ]
  
  const filteredOrders = orders.filter(
    order =>
      (filterStatus === 'All' || order.status === filterStatus) &&
      (order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.id.toString().includes(searchQuery))
  )
  //
  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1 className='header'>Recent Orders 📦</h1>
      <div className='options-container'>
        {/* <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <OrderTable orders={filteredOrders} />
    </div>
  )
}

export default App
