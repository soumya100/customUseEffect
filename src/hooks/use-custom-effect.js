import { useRef } from "react";

export const useCustomEffect = (effect, deps) => {
 
    const isFirstRender= useRef(true);
    const prevDeps= useRef([])


    //first render
    if(isFirstRender.current){
        isFirstRender.current= false;
        const cleanup = effect()
        return () =>{
            if(cleanup && typeof cleanup === 'function'){
                cleanup()
            }
        }
    }
    //dep changes and no deps
    const depsChanged= deps ? JSON.stringify(deps)!== JSON.stringify(prevDeps.current) : true 

    if(depsChanged){
       const cleanup= effect();

       if(cleanup && typeof cleanup === "function" && deps){
        cleanup();
       }
    }

    //cleanup


    /* we cannot exactly replicate the cleanup component unmount effect cause its what react does under the hood by using
    its fibre tree algorithm and a process called reconciliation which manages the component life cycle including effects and 
    cleanup during unmounting*/

    prevDeps.current = deps || [];
}