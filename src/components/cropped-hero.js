import React from 'react';
import site from '../assets/gallery/site2.png';

const CroppedHero = (props) => {
    return (
        <div className="container">

            <div className="b-example-divider"></div>

            <div class="my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 class="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
                        <p class="hero-lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src={site} alt="" width="720" />
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>

        </div>
    );
};

export default CroppedHero;

