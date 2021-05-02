import React from 'react'
import "./PlacesDetail.css"

function PlacesDetailPage() {
    return (
        <div className="details">
            <div className="property__container">
                <div className="property__preview">
                    <img src='https://marketplace.org/wp-content/uploads/2020/12/ppllikewfh.jpg' alt="Property Preview" />
                </div>
                <div className="property__details">
                    <h1 className="property__title">Lighthouse Point Gardens</h1>
                    <h3 className="property__host">Hosted by Florangel</h3>
                    <ul className="property__bedbaths">
                        <li>3 Bedrooms</li>
                        <li>2 Bathrooms</li>
                        <li>4 Beds</li>
                    </ul>
                    <p className="property__desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                    <button className="property__book">Book this Place</button>
                </div>
            </div>

        </div>
    )
}

export default PlacesDetailPage
