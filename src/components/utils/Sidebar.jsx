import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="logo"><Link to={'/'}>Lively</Link></div>

        <div className="menu">
            <p className="title">Menu</p>
            <Link to='/'>Community</Link>
            <Link to='/'>Discovery</Link>
            <Link to='/'>Coming soon</Link>
        </div>

        <div className="library">
            <p className="title">Library</p>
            <Link to='/'>Recent</Link>
            <Link to='/'>Top rated</Link>
            <Link to='/'>Downloaded</Link>
        </div>

        <div className='general'>
            <Link to='/'>Setting</Link>
            <Link to='/'>Help</Link>
        </div>

        <Link to='/' className='log'>Log out</Link>
    </div>
  )
}

export default Sidebar