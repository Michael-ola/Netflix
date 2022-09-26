const assignMoviePosition=(carouselChildren:HTMLCollection) => {
    for(let i=0; i<carouselChildren.length; i++){
        const child=carouselChildren[i] as HTMLElement;
        const right=100*(window.innerWidth - child.getBoundingClientRect().right)/window.innerWidth;
        const left=100*(child.getBoundingClientRect().left)/window.innerWidth;
        if(right<10 && right>0){
            child.style.justifyContent='flex-end';
            child.style.transformOrigin='right';
        }
        else if(left<6){
            child.style.justifyContent='flex-start';
            child.style.transformOrigin='left';
        }
    }
}
//right-10  left-6
export default assignMoviePosition