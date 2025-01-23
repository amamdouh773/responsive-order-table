import { useMemo, useState } from 'react'
import { Order } from '../types'

const limit = 5

type SortStatus = 'ASC' | 'DESC'

const getFinalOrderList = (
  orders: Order[],
  sortStatus: SortStatus,
  filterStatus: string,
  currentPage: number,
  searchQuery: string
) =>
  orders
    .filter(
      order =>
        (filterStatus === 'All' || order.status === filterStatus) &&
        (order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.id.toString().includes(searchQuery))
    )
    .sort((a, b) =>
      sortStatus === 'ASC'
        ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(currentPage * limit, (currentPage + 1) * limit)

export const useTableData = (orders: Order[]) => {
  const [sortStatus, setSortStatus] = useState<SortStatus>('ASC')
  const [filterStatus, setFilterStatus] = useState<'All' | Order['status']>(
    'All'
  )
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const ordersLlist = useMemo(
    () =>
      getFinalOrderList(
        orders,
        sortStatus,
        filterStatus,
        currentPage,
        searchQuery
      ),
    [orders, sortStatus, filterStatus, currentPage, searchQuery]
  )

  return {
    ordersLlist,
    filterStatus,
    searchQuery,
    currentPage,
    lastPage: Math.floor(orders.length / limit),
    setFilterStatus,
    setSearchQuery,
    setCurrentPage,
    setSortStatus
  }
}
