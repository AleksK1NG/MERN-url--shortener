import React from 'react'
import { Link } from 'react-router-dom'

const LinksList = ({ links }) => {
  if (!links.length) return <p className="center">No existing links</p>

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Original</th>
          <th>Short</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {links &&
          links.map((link, index) => {
            return (
              <React.Fragment key={link._id}>
                <tr >
                  <td>{index + 1}</td>
                  <td>{link.from}</td>
                  <td>{link.to}</td>
                  <td>
                    <Link to={`/detail/${link._id}`}>Open</Link>
                  </td>
                </tr>
              </React.Fragment>
            )
          })}
      </tbody>
    </table>
  )
}

export default LinksList
