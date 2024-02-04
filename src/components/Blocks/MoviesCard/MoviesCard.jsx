import React, { useState } from 'react'
import LikeActive from '../../../images/like_active.svg'
import Like from '../../../images/like.svg'
import Delete from '../../../images/delete.svg'

function MoviesCard({imgsrc, name, isSaved, duration, isMovieSaved}) {

    const [save, setSaved] = useState(isSaved)
    
    const saveFunc = () => {
        if (save) {
            setSaved(false)
        }
        else {
            setSaved(true)
        }
    }

  return (
    <div className='MoviesCard'>
        <div className="MoviesCard__MainData">
            <img className="MoviesCard__Img" src={imgsrc} alt={name} />
            <div className="MoviesCard__NameAndSaved">
                <h4 className="MoviesCard__Name">{name}</h4>
                {isMovieSaved ? 
                    (
                    <img className="MoviesCard__Delete" src={Delete} alt="Удалить" />
                    ) : save ? (<img src={LikeActive} alt="Активный Лайк" className="MoviesCard__SavedActive" onClick={() => saveFunc() }/>) : (<img src={Like} alt="Лайк" className="MoviesCard__Saved" onClick={() => saveFunc() }/>)
                
                }
            </div>
        </div>
        <p className="MoviesCard__Duration">{duration}</p>
    </div>
  )
}

export default MoviesCard