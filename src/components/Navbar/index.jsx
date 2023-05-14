import "./../../styles/navbar/navbar.scss"
function Navbar() {
    const items = [
        { id: 1, text: 'Dashboard' },
        { id: 2, text: 'Sales' },
        { id: 3, text: 'Catalog' },
        { id: 4, text: 'Customers' },
        { id: 5, text: 'Reviews' }
    ];

    return (
        <div className="nav-bar">
            <div className="nav-bar__body">

                <ul className="nav-bar__list">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className="nav-bar__item"
                        >
                            <img src="" alt="#" />
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;