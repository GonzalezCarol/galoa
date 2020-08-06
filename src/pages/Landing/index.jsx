import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import SideMenu from '../../components/SideMenu';
import VideoDiv from '../../components/VideoDiv';
import Title from '../../components/Title';

function TeacherList() {
    return (
        <>
        <section class="grid grid-template gap">
            <SideMenu className="side-nav" />
            <PageHeader className="page-header" />

            <main>
                <Title />
                
                <VideoDiv />

                
            </main>
        </section>
                    
        </>
    )
}

export default TeacherList;