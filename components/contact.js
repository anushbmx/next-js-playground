import Image from 'next/image';


function Contact({contactData}) {
  return(
    <div className={'flex items-start'}>
      {contactData.image &&
      <div className={'mr-2'}>
        <Image
          className={'rounded-full mr-2'}
          width={20}
          height={20}
          alt={contactData.name}
          src={`/images/contact/${contactData.image}`}
        />
      </div>
      }
      {contactData.name}
    </div>
  )
}

export default Contact;
