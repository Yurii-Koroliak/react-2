import "./../../styles/customers/customers.scss"

function Customers() {
    const items = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
        { id: 5, text: 'Item 5' },
        { id: 6, text: 'Item 6' },
    ];

    return (
        <div className="customers">
            <div className="customers__body">

                <ul className="customers__list">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className="customers__item"
                        >
                            <div className="customers-img">
                                <img src="" alt="#" />
                            </div>
                            <div className="customers-text">
                                <span>{item.text}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Customers;