import React, { useCallback } from 'react'
import { Order } from '../types'

import Filter from './Filter'
import SearchBar from './SearchBar'
import { useTableData } from '../hooks/useTableData'
import StaticOrdersTable from './StaticOrdersTable'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

interface OrderTableProps {
  orders: Order[]
}

interface PaginatorProps {
  currentPage: number
  lastPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  lastPage,
  setCurrentPage
}) => {
  return (
    <div className='pagination-container'>
      <button
        disabled={currentPage <= 0}
        onClick={() => setCurrentPage(page => page - 1)}
        className='paginator-button'
      >
        <FaArrowAltCircleLeft size={25} color='#124830' />
      </button>
      <span>{currentPage + 1}</span>
      <button
        disabled={currentPage >= lastPage}
        onClick={() => setCurrentPage(page => page + 1)}
        className='paginator-button'
      >
        <FaArrowAltCircleRight size={25} color='#124830' />
      </button>
    </div>
  )
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const {
    filterStatus,
    setFilterStatus,
    searchQuery,
    setSearchQuery,
    setSortStatus,
    currentPage,
    lastPage,
    setCurrentPage,
    ordersLlist
  } = useTableData(orders)

  const sortOrders = useCallback(() => {
    setSortStatus(oldStatus => (oldStatus === 'ASC' ? 'DESC' : 'ASC'))
  }, [])

  return (
    <>
      <div className='options-container'>
        <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <StaticOrdersTable orders={ordersLlist} sortOrders={sortOrders} />

      <Paginator
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
    </>
  )
}

export default OrderTable
