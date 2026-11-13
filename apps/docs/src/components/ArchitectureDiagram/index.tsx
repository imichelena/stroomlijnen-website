import React, {useRef, useState} from 'react';
import './styles.css';
export default function ArchitectureDiagram({name, title, description, nl=false}: {name:string; title:string; description:string; nl?:boolean}) {
 const base='/img/architecture/'+name;
 const dialog=useRef<HTMLDialogElement>(null);
 const [zoom,setZoom]=useState(false);
 const images=<><img className="architecture-light" src={base+'-light.svg?revision=public-2'} alt={description} loading="lazy" /><img className="architecture-dark" src={base+'.svg?revision=public-2'} alt={description} loading="lazy" /></>;
 return <figure className="architecture-figure">
  <div className="architecture-scroll" role="region" aria-label={title}>{images}</div>
  <figcaption><strong>{title}</strong><p>{description}</p>
   <button type="button" className="button button--secondary" onClick={()=>{setZoom(false);dialog.current?.showModal();}}>{nl?'Diagram vergroten':'Enlarge diagram'}</button>
   <p>{nl?'Het volledige diagram past in de pagina. Vergroot het voor details. De diagramlabels zijn in het Engels.':'The full diagram fits the page. Enlarge it to inspect the details.'}</p>
   <a href={base+'-light.svg?revision=public-2'} target="_blank" rel="noopener noreferrer">{nl?'Open licht diagram (SVG)':'Open light diagram (SVG)'}</a>{' · '}
   <a href={base+'.svg?revision=public-2'} target="_blank" rel="noopener noreferrer">{nl?'Open donker diagram (SVG)':'Open dark diagram (SVG)'}</a>
  </figcaption>
  <dialog ref={dialog} className="architecture-dialog" aria-label={title}>
   <div className="architecture-dialog-toolbar"><strong>{title}</strong><button type="button" onClick={()=>setZoom(!zoom)}>{zoom?(nl?'Passend maken':'Fit diagram'):(nl?'Inzoomen':'Zoom in')}</button><button type="button" onClick={()=>dialog.current?.close()}>{nl?'Sluiten':'Close'}</button></div>
   <div className={'architecture-dialog-canvas'+(zoom?' is-zoomed':'')} tabIndex={0} role="region" aria-label={nl?'Diagramdetails; gebruik de pijltjestoetsen om te scrollen':'Diagram details; use arrow keys to scroll'}>{images}</div>
  </dialog>
 </figure>;
}
