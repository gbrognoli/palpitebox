import React from 'react'
import Link from 'next/link'


const Index =  () => {
  return (
    <div>
      <h1> Olá Semana Fullstack Master</h1>
      <div>
          <Link href='/sobre'>
                Sobre
              </Link>
              <Link href='/contato'>
                Contato
              </Link>
              <Link href='/pesquisa'>
                Pesquisa
              </Link>
              </div>
    </div>
 )
}

export default Index