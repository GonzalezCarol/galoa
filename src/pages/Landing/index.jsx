import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader';
import SideMenu from '../../components/SideMenu';
import VideoDiv from '../../components/VideoDiv';
import Title from '../../components/Title';
import DefaultDiv from '../../components/DefaultDiv';
import ButtonCreate from '../../components/ButtonCreate';
import QuestionDiv from '../../components/QuestionDiv';

import hand from '../../assets/icons/hand-icon.svg';
import qa from '../../assets/icons/qa-icon.svg';
import chat from '../../assets/icons/chat-icon.svg';
import information from '../../assets/icons/information-icon.svg';
import like from '../../assets/icons/fav-icon.svg';




function Landing() {
    return (
        <>
        <section className="grid grid-template gap">
            
            <SideMenu className="side-nav" />
            <PageHeader className="page-header" />

            <div className="content">
                <Title />
                
                <VideoDiv /> 

                <DefaultDiv title="Resumo">
                <div className="body-resume-div-default" tabIndex="1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus vitae turpis auctor, mollis felis ut, commodo turpis.
                    Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. 
                    Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl,
                    vel aliquet enim accumsan sit amet. Donec finibus nisi tellus,
                    ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus.
                    Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
                    <br/> <br/>
                    Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat.
                    Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. 
                    Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, 
                    eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. 
                    Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio. 
                    <br/> <br/>
                    Nam eget tristique elit, at fermentum tellus.
                    Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. 
                    Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor.
                    Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. 
                    Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, 
                    vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, 
                    orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien.
                    Aenean in porta arcu. Maecenas eu maximus massa. 
                    <br/> <br/>
                    Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. 
                    Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. 
                    Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. 
                    Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div> 
                </DefaultDiv>
                 
                
                <DefaultDiv title="Discussões">
                    <div className="header-discussion-div">
                        <span className="title">Compartilhe suas ideias ou dúvidas com os autores!</span>
                        <div className="icons">
                            <img src={hand} alt="Icone Mãos"/>
                            <img src={qa} alt="Icone QA"/>
                            <img src={chat} alt="Icone Chat"/>
                        </div>
                        <div className="word-wrap">
                             <span> Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus </span>
                             <span>questionamentos ou sugestões para o autor!</span>
                        </div>
                        <br/>
                        <hr/>
                        <div className="div-create">
                            <ButtonCreate />
                        </div>

                        <QuestionDiv title="Assunto da pergunta aparece aqui" name="Carlos Henrique Santos">
                        Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                        <div className="div-footer">
                            <img src={information} alt="Mais informações"/>
                            <img src={like} alt="Like"/>
                            <span> 1 like</span>
                            <span> 1 resposta</span>
                        </div>
                        </QuestionDiv>
                        <QuestionDiv title="Assunto da pergunta aparece aqui" name="Carlos Henrique Santos">
                        Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                        <div className="div-footer">
                            <img src={information} alt="Mais informações"/>
                            <img src={like} alt="Like"/>
                            <span> 1 like</span>
                            <span> 1 resposta</span>
                        </div>
                        </QuestionDiv>
                    </div>
                </DefaultDiv>

                
                
                
            </div>
        </section>
                    
        </>
    )
}

export default Landing;