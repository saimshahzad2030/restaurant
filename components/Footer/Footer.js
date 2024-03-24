import React from 'react'
import style from './Footer.module.css'
import Row from '../Row/Row'
import Column from '../Column/Column'
import Divider from '../Divider/Divider'
import Link from 'next/link'
export default function Footer({children}) {
  return (
    <>
    <Row styles={{marginTop:'150px'}}>
    <Column>
    <h6 className = {`${style.footerHead} text-2xl`} style={{fontWeight:'bold',marginBottom:'20px'}}>Contacts</h6>
    <p className = {`${style.footerText} text-lg`}>+92 3213123412</p>
    <p className = {`${style.footerText} text-lg`}>+92 3421221312</p>
    </Column>
    <Column>
    <h6 className = {`${style.footerHead} text-2xl`}  style={{fontWeight:'bold',marginBottom:'20px'}}>Careers</h6>
    <p className = {`${style.footerText} text-lg`}><Link  href={'/'}>Worker</Link></p>
    <p className = {`${style.footerText} text-lg`}><Link href={'/'}>Market Place</Link></p>
    </Column>
    <Column>
    <h6 className = {`${style.footerHead} text-2xl`}style={{fontWeight:'bold',marginBottom:'20px'}}>About us</h6>
    <p className = {`${style.footerText} text-lg`}><Link  href={'/'}>History</Link></p>
    <p className = {`${style.footerText} text-lg`}><Link href={'/'}>Ingredients</Link></p>
    </Column>
    <Column>
    <div className={`mt-2 ${style.input}`}>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Query"
                  />
                </div>
              </div>
    <button className="bg-orange-500 text-white px-4 py-2 my-4 rounded-lg hover:bg-orange-300 transition-colors duration-300">Send</button>
                       
    </Column>

   </Row>
   <Divider/>
    <div className={style.footer}>
      <h2>{children}</h2>
    </div>
    
    
    </>
  )
}
