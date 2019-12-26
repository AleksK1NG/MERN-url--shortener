import * as React from 'react'

interface IProps {}

const Homepage: React.FC<IProps> = () => {
  return (
    <div>
      <h1 onClick={() => console.log('TS =D')}>Home page =D</h1>
    </div>
  )
}

export default Homepage
