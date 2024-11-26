
const links=[
{text:'Github',link:'https://github.com/hamdihamzadev'},
{text:'linkedin',link:'https://www.linkedin.com/in/hamza-hamdi-5b500b19a/'},
]

function Header() {
  return (
    <header className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between" >
        <h1 className="text-3xl font-bold">Mon Portfolio Web</h1>
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

