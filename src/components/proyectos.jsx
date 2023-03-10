import React from 'react'
import styles from '../components/proyectos.module.css'
import { General } from './general'


export const Proyectos = () => {

  function OpenProyect() {
    var ContainerProyects = document.getElementsByClassName('dashProyectos')[0]
    return <General variable={ContainerProyects} />
  }

  return (
    <div className={styles.dashProyectos}>
        <div className={styles.proyectSup}>
          <h2>Proyectos</h2>
          <a className={styles.addProyectBtn} href="">Nuevo</a>
        </div>
        <div className={styles.proyectMid}>
            <div className={styles.proyectCards}>
              {/* Primera Targeta */}
                <div className={styles.ProyectBox}>
                    <h4 className={styles.ProyectBoxTitle}>Game Snake</h4>
                </div>
              {/* Segunda Targeta */}
              <div className={styles.ProyectBox}>
                    <h4 className={styles.ProyectBoxTitle}>Proyect 2</h4>
                </div>
              {/* Tercera Targeta */}
              <div className={styles.ProyectBox}>
                    <h4 className={styles.ProyectBoxTitle}>Proyect 3</h4>
                </div>
              {/* Cuarta Targeta */}
              <div className={styles.ProyectBox}>
                    <h4 className={styles.ProyectBoxTitle}>Proyect 4</h4>
                </div>
              {/* Quinta Targeta */}
              <div className={styles.ProyectBox}>
                    <h4 className={styles.ProyectBoxTitle}>Proyect 5</h4>
                </div>
              {/* Sexta Targeta */}
              <div className={styles.ProyectBox}>
                    <h4 className={styles.ProyectBoxTitle}>Proyect 6</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
