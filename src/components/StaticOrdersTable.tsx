import { FaWalking } from 'react-icons/fa'
import { IoIosAddCircle } from 'react-icons/io'
import { MdDeliveryDining } from 'react-icons/md'
import { FaCircleCheck } from 'react-icons/fa6'

import { FaSort } from 'react-icons/fa6'
import { Order } from '../types'
import { ReactNode } from 'react'

interface StatitOrdersTableProps {
  orders: Order[]
  sortOrders: () => void
}

const statusToIconsMap: Record<Order['status'], ReactNode> = {
  Delivered: <FaCircleCheck size={20} />,
  Delivering: <MdDeliveryDining size={20} />,
  Picking: <FaWalking size={20} />,
  New: <IoIosAddCircle size={20} />
}

const StaticOrdersTable: React.FC<StatitOrdersTableProps> = ({
  orders,
  sortOrders
}) => {
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
          <th className='sort-container'>
            <p>Created At</p>
            <FaSort color='#fff' size={15} onClick={sortOrders} />
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.length > 0 ? (
          orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td className='status-container'>
                <p>{order.status}</p>
                <span>{statusToIconsMap[order.status]}</span>
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

export default StaticOrdersTable
