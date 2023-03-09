import React from 'react'
import styles from '../components/general.module.css'
import { Header } from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { faUser, faChevronRight, faFolderOpen, faFile, faEye, faCirclePlay, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Proyectos } from './proyectos'
import { Estadisticas } from './estadisticas'


export const General = () => {

  //Codigo Para traerme Proyectos
  function SeeProyects() {
    const [openProyects, setOpenProyects] = useState(false);
  }


  return (
    <div className={styles.general}>
        <Header />
        <div className={styles.content}>
        <nav className={styles.barraLateral}>
            <ul>
              <li><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faChevronRight} />Estadisticas</a></li>
              <li className={`${styles.linkProyectos}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faFolderOpen}/>Proyectos</a></li>
              <li><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faFile} />Workbooks</a></li>
              <li  className={`${styles.linkConsultas}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faEye} />Consultas</a></li>
              <li className={`${styles.linkMat}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faCirclePlay} />Material de Apoyo</a></li>
              <li className={`${styles.linkAnuncios}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faCircleExclamation} />Anuncios</a></li>
              <li className={`${styles.linkEst}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faUser} />Estudiantes</a></li>
            </ul>
        </nav>
        <div className={styles.containerFormadores}>
          <Estadisticas className={styles.noMostrar}/>
          
        </div>
        </div>
    </div>
  )
}
