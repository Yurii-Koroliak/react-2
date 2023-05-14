import "./../../styles/departament/departament.scss"

function Departament() {
    const items = [
        { id: 1, text: 'Monthly Revenue', value: '1385$' },
        { id: 2, text: 'New orders', value: '12' },
        { id: 3, text: 'Pending Reviews', value: '3' },
        { id: 4, text: 'New Customers', value: '4' },
    ];

    return (
        <div className="departament">

            <div className="departament__body">

                <ul className="departament__list">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className="departament__item"
                        >
                            <img src="" alt="#" className="departament-img" />
                            <div className="departament__text">
                                <span>{item.text}</span>
                                <span>{item.value}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Departament;