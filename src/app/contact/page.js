import ContactForm from '@/components/ContactForm/ContactForm'
import ContactHero from '@/components/ContactHero/ContactHero'
import ContactFooter from '@/components/Footer/ConatctFooter/ContactFooter'
import Copyright from '@/components/Footer/Copyright/Copyright'
import React from 'react'

function Contact() {
  return (
    <div>
      <ContactHero/>
      <ContactForm/>
      <ContactFooter/>
     <Copyright/>
    </div>
  )
}

export default Contact