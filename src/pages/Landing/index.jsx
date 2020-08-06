import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import SideMenu from '../../components/SideMenu';

function TeacherList() {
    return (
        <>
        <section class="grid grid-template gap">
            <SideMenu className="side-nav" />
            <PageHeader className="page-header" />

            <main>
                <div className="div-top">
                    <div className="top-page-text">
                        <p>
                            Análise sensorial de preparações funcionais desenvolvidas para escolares
                            entre 09 e 15 anos, do município de Campinas/SP
                        </p>
                    </div>
                    <div className="buttons-right-page">
                        <button type="button">Download</button>
                        <button type="button">Download</button>
                        <button type="button">Download</button>
                            <div>
                                <span>
                                COMO CITAR ESSE TRABALHO?
                                </span>
                            </div>
                    </div>
                    
                </div>
            
            </main>
        </section>
                    
        </>
    )
}

export default TeacherList;