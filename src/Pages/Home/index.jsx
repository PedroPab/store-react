import { useState, useEffect } from 'react'
import Layoud from './../../components/Layout'
import Card from './../../components/Card'

function Home() {

  const [items, setItems] = useState(null)

  useEffect(() => {
    const apiUrl = 'https://api.escuelajs.co/api/v1'
    fetch(`${apiUrl}/products`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setItems(data)
      })

  }, [])


  return (
    <>
      <Layoud >
        Home
        <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
          {items?.map(product => {
            return (
              <Card key={product.id} data={product} />
            )
          })}
        </div>

      </Layoud>
    </>
  )
}

export default Home