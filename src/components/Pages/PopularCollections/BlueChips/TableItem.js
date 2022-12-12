import React from 'react'

const TableItem = () => {
  return (
    <tr class=" border-b border-dark">
                <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap">
                 <span className='mr-2 flex'><span className='mr-2 mt-1'>1</span>
                  <img className='rounded-full' src='https://img-cdn.magiceden.dev/rs:fill:32:32:0:0/plain/https://bafkreidc5co72clgqor54gpugde6tr4otrubjfqanj4vx4ivjwxnhqgaai.ipfs.nftstorage.link/'/>
                  <span className='mt-1 ml-2'>Blue Chips</span>
                 </span>
                </th>
                <td class="py-4 px-6">
                    44.23 K
                </td>
                <td class="py-4 px-6">
                   4.2 K
                </td>
                <td class="py-4 px-6 text-green-500">
                    144.05%
                </td>
                <td class="py-4 px-6">
                    333
                </td>
                <td class="py-4 px-6">
                    50.69
                </td>
                <td class="py-4 px-6">
                   6.4K
                </td>
                <td class="py-4 px-6">
                   10K
                </td>
                
            </tr>
  )
}

export default TableItem