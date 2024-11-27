
import logoWhite from '../assets/logoWt.png'

const links=[
{text:'Github',link:'https://github.com/hamdihamzadev'},
{text:'linkedin',link:'https://www.linkedin.com/in/hamza-hamdi-5b500b19a/'},
]

function Header() {
  return (
    <header className="bg-zinc-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" >
        <img src={logoWhite} alt='logo'className='w-[70px]' />
          <nav>
            <ul className="flex items-center gap-x-3 justify-end" >
              {links.map((ele,index)=>(
                <li key={index} className="list-none" >
                  <a href={ele.link} className="hover:underline" > {ele.text} </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;

