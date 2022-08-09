import React,{useState,useEffect} from 'react'
import {Container,MovieVideo,MoviePoster,
    MovieTitle,Controls,MovieDataContainer,MovieDescription,AgeRating
} from './styles/MoviePreview'

import PlayButton from '../../components/PlayButton'
import InfoButton from '../../components/InfoButton'

const poster=`https://occ-0-299-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/
AAAABVNvs3SwzsjtPbsgZRpm7fEVv-Zs342G4v_tF3XsN9n245PUAMue7uwnKJBulwiSrgOtNkTovuI4SaNBklKX
JMEKmIEEyqVwz6CV.webp?r=153`
const title = `https://occ-0-299-1490.1.nflxso.net/dnm/api/v6/0jxQXg4biAHes0_WdLiCw28fDpg/
AAAABZRiSilkgeMz3B3mxWMOTpXo4e7Iz1Aldv_kpM0VmQ9ciBETbe3ROgxrdMPOdVhUiHLTSQKo4WUevUCxsXJ-
fLeLjZC7I8SibE8PZyik7hR59S-AbCFqxn-uNgyS0PYpubQuGrws1s7xLKad0iRfsHXVeNYEz1vj7MDJqpxUAeYh6P38lyc
qKgQfAcZ3BwVwSVqQV5Or76e-cCkWeGV8JcsTIeaPqV7957JOm1wyJ2Q9fBmM333kwY4e0PZS1R0Iizp-Q6mZyM0AWFbPRE2U
ROOfdUR8dNuyW3SgzZgCazK4ghY6yRyrepb7_2ZPN0MVWbtd40SkhNnksxTDkwYu9D4.webp?r=ebb`

const MoviePreview = () => {
    const [showVideo,setShowVideo]=useState(true)

    useEffect(() =>{
        console.log('showVideo')
        const playTime=setTimeout(() =>{
            setShowVideo(false);
        },3000)
        return () =>{
            clearTimeout(playTime);
        }
    },[])

    const playClicked =()=>{
        
    }
    const infoButtonClicked =()=>{
        
    }
    return (
        <Container>
        <MovieDataContainer>
            <MovieTitle src={title} alt='title'/>
            <MovieDescription>In this sequel to "Vikings," a hundred years have passed and 
            a new generation of legendary heroes arises to forge its own destiny —&nbsp;and make history.
            </MovieDescription>
            <Controls>
                <PlayButton onClick={playClicked}/>
                <InfoButton onClick={infoButtonClicked}/>
            </Controls> 
        </MovieDataContainer>
        <AgeRating>
            18+
        </AgeRating>
        {
            showVideo?<MovieVideo autoPlay/>
            :<MoviePoster src={poster}/>
        }</Container>
    )
}

export default MoviePreview
