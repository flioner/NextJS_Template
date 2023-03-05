import React, { useEffect, useState } from "react";
import s from "./productDemo.module.css";
import { ProductViewer } from "../threejs/threejs";
import { IncreasePrice } from "./increase_price";

const ProductDemo = ({
  lightmode,
  is3D,
  imgPath,
  objPath,
  scale,
  position,
  rotation,
  lightPosition,
}) => {
  /* Product Version Selector*/
  const [selected, setOption] = useState(false);
  const [view, setView] = useState(is3D);
  const [mode, setMode] = useState(lightmode);

  const defaultOpt = () => {
    setOption(false);
  };
  const premiumOpt = () => {
    setOption(true);
  };

  return (
    <div className={s.mainCont}>
      <div className={s.middle} /* onAnimationStart={()=> checkLoaded()} */>
        <div className={mode ? s.flexContLight : s.flexCont}>
          <div className={mode ? s.canvasContLight : s.canvasCont}>
            {view ? (
              <ProductViewer
                objPath={objPath}
                position={position}
                scale={scale}
                rotation={rotation}
                lightPosition={lightPosition} /* globalProgress={setProgress} */
              />
            ) : (
              <img className={s.img} src={imgPath} />
            )}
          </div>

          <div className={mode ? s.textContLight : s.textCont}>
            <div className={s.title}> Tu Producto </div>

            <div className={s.subTitle}> Decripción </div>
            <div className={s.desc}>Una breve descripción de tu producto.</div>

            <div className={s.subTitle}> Versión </div>
            <div className={s.buttons}>
              <button
                onClick={defaultOpt}
                className={selected ? s.btn : s.selectedBtn}
              >
                Default
              </button>
              <div className={s.spacing} />
              <button
                onClick={premiumOpt}
                className={!selected ? s.btn : s.selectedBtn}
              >
                Premium
              </button>
            </div>

            <div className={s.middle}>
              <IncreasePrice
                increase={selected}
                inicio={selected ? 450 : 650}
                final={selected ? 650 : 450}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.configCont}>
        <div>
          <div>Contenedor</div>
          <div className={s.separateCont}>
            <div
              onClick={() => setMode(true)}
              className={mode ? s.activeConfig : s.configBtn}
            >
              Flotante
            </div>
            <div
              onClick={() => setMode(false)}
              className={!mode ? s.activeConfig : s.configBtn}
            >
              Pod
            </div>
          </div>
        </div>
        <div>
          <div>Vista</div>
          <div className={s.separateCont}>
            <div
              onClick={() => setView(false)}
              className={!view ? s.activeConfig : s.configBtn}
            >
              2D
            </div>
            <div
              onClick={() => setView(true)}
              className={view ? s.activeConfig : s.configBtn}
            >
              3D
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductDemo };

/*
            <div className={s.middle}>
                {!initial && !progress && !isImage && warningOpen ?    
                <div className={lightmode ? s.warningLight : s.warning}>
                    <div className={s.warningText}> Parece que el modelo 3D se está tardando en cargar. </div>
                    <div onClick = {()=>setImage(true)} className={s.warningButton}> Cambiar a la vista de imagen </div>
                    <img onClick = {()=>setWarning(false)}className={s.closeIcon} src="closeIcon.png"  />
                </div> : null }
            </div>
            */
