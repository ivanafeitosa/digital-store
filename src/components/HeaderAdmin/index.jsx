import { Link } from 'react-router-dom';

const HeaderAdmin = () => {
  return (
    <header className='w-2 h-screen bg-pink-800 p-3 block'>
        <h1 className='py-4'>LOGO</h1>
        <nav>
            <ul className='flex flex-column p-0'>
                <li>
                    <Link className='text-white' to={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                    <Link className='text-white' to={'/dashboard/produtos'}>Produtos</Link>
                </li>
                <li>
                    <Link className='text-white' to={'/dashboard/marcas'}>Marcas</Link>
                </li>
                <li>
                    <Link className='text-white' to={'/dashboard/categorias'}>Categorias</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderAdmin;