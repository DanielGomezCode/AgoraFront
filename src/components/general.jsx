import React from 'react'
import styles from '../components/general.module.css'
import { Header } from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronRight, faFolderOpen, faFile, faEye, faCirclePlay, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Proyectos } from './proyectos'
import { Estadisticas } from './estadisticas'
import { useState } from 'react'
import { Workbooks } from './workbooks'


export const General = () => {
  
  const [abrirEstadisticas, setAbrirEstadisticas] = useState(false)

  const MostrarEstadisticas = () => {
    setAbrirEstadisticas(!abrirEstadisticas)
    setAbrirProyectos(false)
    setAbrirWorkbooks(false)
  }

  const [abrirProyectos, setAbrirProyectos] = useState(false)

  const MostrarProyectos = () => {
    setAbrirProyectos(!abrirProyectos)
    setAbrirEstadisticas(false)
    setAbrirWorkbooks(false)
  }

  const [abrirWorkbooks, setAbrirWorkbooks] = useState(false)

  const MostrarWorkbooks = () => {
    setAbrirWorkbooks(!abrirWorkbooks)
    setAbrirProyectos(false)
    setAbrirEstadisticas(false)
  }

  return (
    <div className={styles.general}>
        <Header />
        <div className={styles.content}>
        <nav className={styles.barraLateral}>
            <ul>

              {/* -------------- Link Estadisticas ---------------- */}
              <li onClick={MostrarEstadisticas} className={`${styles.linkEstadisticas} ${abrirEstadisticas ? styles.active : ''}`}>
                <a href="#">
                  <FontAwesomeIcon className={styles.iconBarra} icon={faChevronRight} />
                  Estadisticas</a>
              </li>
              
               {/* -------------- Link Proyectos ---------------- */}
              <li onClick={MostrarProyectos} className={`${styles.linkProyectos} ${abrirProyectos ? styles.active : ''}`}>
                 <a href="#"> 
                  <FontAwesomeIcon className={styles.iconBarra} icon={faFolderOpen}/>
                  Proyectos</a>
              </li>

              {/* -------------- Link Workbooks ---------------- */}
              <li onClick={MostrarWorkbooks} className={`${styles.linkWorkbooks} ${abrirWorkbooks ? styles.active : ''}`}>
                <a href="#">
                  <FontAwesomeIcon className={styles.iconBarra} icon={faFile} />
                  Workbooks</a>
              </li>






              <li  className={`${styles.linkConsultas}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faEye} />Consultas</a></li>
              <li className={`${styles.linkMat}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faCirclePlay} />Material de Apoyo</a></li>
              <li className={`${styles.linkAnuncios}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faCircleExclamation} />Anuncios</a></li>
              <li className={`${styles.linkEst}`}><a href=""><FontAwesomeIcon className={styles.iconBarra} icon={faUser} />Estudiantes</a></li>
            </ul>
        </nav>
        <div className={styles.containerFormadores}>

          {/* -------------- Estadisticas ---------------- */}
              <div className={`${styles.despliegueEstadisticas} ${abrirEstadisticas ? styles.active : ''}`}>
                <Estadisticas />
              </div>
          {/* -------------- Proyectos ---------------- */}
              <div className={`${styles.despliegueProyectos} ${abrirProyectos ? styles.active : ''}`}>
                <Proyectos />
              </div>
          {/* -------------- Workbooks ---------------- */}
              <div className={`${styles.despliegueWorkbooks} ${abrirWorkbooks ? styles.active : ''}`} >
                <Workbooks />
              </div>
          {/* -------------- Consultas ---------------- */}
              <div className={styles.despliegueConsultas}>
                
              </div>
          {/* -------------- Material ---------------- */}
              <div className={styles.despliegueMaterial}>
                
              </div>
          {/* -------------- Anuncios ---------------- */}
              <div className={styles.despliegueAnuncios}>
                
              </div>
           {/* -------------- Estudiantes ---------------- */}
              <div className={styles.despliegueEstudiantes}>
                
              </div>
        </div>
        </div>
    </div>
  )
}
