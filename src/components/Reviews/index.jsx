import "./../../styles/reviews/reviews.scss"

function Reviews() {
    const items = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
    ];

    return (
        <div className="reviews">
            <div className="reviews__body">

                <ul className="reviews__list">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className="reviews__item"
                        >
                            <div className="reviews-img">
                                <img src="" alt="#" />
                            </div>
                            <div className="reviews-text">
                                <img src="" alt="#" />
                                <span>{item.text}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Reviews;