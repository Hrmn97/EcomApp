import React from 'react'

const Contact = () => {
  return (
    <div  className='mt-12'>
    <div className="text-center mb-4 ">
    <h2 className='text-lg underline underline-offset-2'>Contact Page</h2>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.4403113867315!2d75.6248213150835!3d31.948949481229945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b9ed195a557dd%3A0x24a2ea1329e2fd66!2sBagowal%2C%20Mukerian%2C%20Punjab%20144211!5e0!3m2!1sen!2sin!4v1667980837705!5m2!1sen!2sin" width="100%" height="380" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    <div className='flex flex-col justify-self-center items-center'>
        <form method="POST">
          <div className='border-solid border-2 border-indigo-600 mt-1 mb-2'><input type="text" autoComplete='off' name="username" required placeholder='Username' /></div>
          <div className='border-solid border-2 border-indigo-600  mb-2'><input type="email" autoComplete='off' name="Email" required placeholder="Email" /></div>
          <div className='border-double border-4 border-indigo-600  mb-2'><textarea name="Message" cols="50" rows="3" autoComplete='off' placeholder='Enter Your Message here'></textarea></div>
          <div className='rounded-lg bg-cyan-400 text-center'><input type="submit" value="Submit" /></div>
        </form>
    </div>
    </div>
  )
}

export default Contact