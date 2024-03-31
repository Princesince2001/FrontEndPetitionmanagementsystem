import React from 'react'
function LoaderComponent() {
    return (
        <section className='mainbg mainloader'>
            <div class="loader">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </section>
    )
}

export default LoaderComponent