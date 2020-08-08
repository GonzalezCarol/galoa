import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import SideMenu from '../../components/SideMenu';
import VideoDiv from '../../components/VideoDiv';
import Title from '../../components/Title';
import DefaultDiv from '../../components/DefaultDiv';



function Landing() {
    return (
        <>
        <section class="grid grid-template gap">
            <SideMenu className="side-nav" />
            <PageHeader className="page-header" />

            <div className="content">
                <Title />
                
                <VideoDiv />

{/*                 
                <DefaultDiv>
                    
                </DefaultDiv> */}
                
            </div>
        </section>
                    
        </>
    )
}

export default Landing;