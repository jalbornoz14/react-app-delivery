import { Order } from './oders/Order'

export const OdersHome = () => {
   return (
    <section className="card order-home">
        <div className='order-home-title'>
            <span>PEDIDOS DISPONIBLES</span>
        </div>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
        <Order/>
    </section>
   ) 
}