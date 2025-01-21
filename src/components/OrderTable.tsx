import React, { useState } from 'react'
import { Order } from '../types'
import { FaWalking } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import { MdDeliveryDining } from 'react-icons/md'
import { FaCircleCheck } from 'react-icons/fa6'

import { FaSort } from 'react-icons/fa6'
import Filter from './Filter'

interface OrderTableProps {
  orders: Order[]
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  const [sortedorders, setSortedOrders] = useState<Order[]>(orders)
  const [sortStatus, setSortStatus] = useState<boolean>(false)
  
  const handleDateSort = () => {
    if (sortStatus) {
      setSortedOrders(
        orders.sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return -1
          }
          if (a.createdAt > b.createdAt) {
            return 1
          }
          return 0
        })
      )
    } else {
      setSortedOrders(
        orders.sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return 1
          }
          if (a.createdAt > b.createdAt) {
            return -1
          }
          return 0
        })
      )
    }
    setSortStatus(!sortStatus)
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer Name</th>
          <th>
            <p>Status</p>
          </th>
          <th>Items</th>
          <th
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 15,
              cursor: 'pointer'
            }}
          >
            <p>Created At</p>
            <FaSort color='#fff' size={15} onClick={handleDateSort} />
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedorders.length > 0 ? (
          orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td className='status-container'>
                <p>{order.status}</p>
                <span>
                  {order.status === 'New' ? (
                    <IoIosAddCircle  size={20} />
                  ) : order.status === 'Picking' ? (
                    <FaWalking  size={20} />
                  ) : order.status === 'Delivering' ? (
                    <MdDeliveryDining  size={20} />
                  ) : (
                    <FaCircleCheck  size={20} />
                  )}
                </span>
              </td>
              <td>{order.items.join(', ')}</td>
              <td>{order.createdAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No orders found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default OrderTable
