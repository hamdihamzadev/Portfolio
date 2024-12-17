
import logoWhite from '../assets/logoWt.png'
import '../assets/style/header.css'

const nav=[
   {name:'Github',link:'https://github.com/hamdihamzadev'} ,
   {name:'Linkedin',link:'https://www.linkedin.com/in/hamza-hamdi-5b500b19a/'} ,
   {name:'Email',link:'mailto:hamdihamza440@gmail.com'} ,
   {name:'Phone',link:'tel:+212627253586'} ,
   {name:'Whatsapp',link:'https://wa.me/212627253586'} ,

]

function Header() {
  return (
    <header className="text-zinc py-4">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between" >
        <img src={logoWhite} alt='logo'className='w-[70px]' />
          <ul className='flex justify-between gap-x-7' >
            {nav.map((ele,index)=>(
              <li key={index} >
                <a href={ele.link} target='_blank' > {ele.name} </a>
              </li>
            ))}

          </ul>
          <a type='pnsq' ></a>
        </div>
      </div>
    </header>
  );
}

export default Header;

