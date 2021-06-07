import React from 'react'
import MainLayout from '../layouts/MainLayout';

const Index = () => {
    return (
        <div>
            <MainLayout>
                <div className="center">
                    <h1>Welkome!</h1>
                    <h3>Здесь собраны лучше треки!</h3>

                </div>

                <style jsx>
                    {`
                    .center {
                        margin-top: 150px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                `}
                </style>
            </MainLayout>

        </div>
    )
}

export default Index;