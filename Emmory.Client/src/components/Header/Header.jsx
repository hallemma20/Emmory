import "./Header.css";

function Header(){
    return (
        <header className="header">
            <h1 className="logo">Emmory</h1>
            <nav>
                <button className="nav-button">Wardrobe</button>
                <button className="nav-button">Outfits</button>
                <button className="nav-button primary">Add Clothing Item</button>
            </nav>
        </header>
    )
}

export default Header;