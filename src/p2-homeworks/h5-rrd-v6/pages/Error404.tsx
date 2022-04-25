import React from 'react'
import style from "./Error404.module.css"

function Error404() {
    return (
        <section className={style.page_404}>
            <div className="container">
                <div className="row">
                    <div className={style.textCenter}>
                        <div className={style.image}>
                            <div className={style.four_zero_four_bg}>
                                <h1 className={style.textCenter}>404</h1>
                            </div>
                        </div>
                        <div className={style.contant_box_404}>
                            <h3 className={style.textCenter}>
                                Look like you're lost
                            </h3>
                            <p>the page you are looking for not avaible!</p>
                            <a href="" className={style.link_404}>Go to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error404
