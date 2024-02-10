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
    <li className='MoviesCard'>
        <div className="MoviesCard__MainData">
            <img className="MoviesCard__Img" src={imgsrc} alt={name} />
            <div className="MoviesCard__NameAndSaved">
                <h2 className="MoviesCard__Name">{name}</h2>
                {isMovieSaved ? 
                    (<button type='button' className='MoviesCard__SavedButton'><img className="MoviesCard__Delete" src={Delete} alt="Удалить" /></button>
                    ) : save ? (<button type='button' className='MoviesCard__SavedButton'><img src={LikeActive} alt="Активный Лайк" className="MoviesCard__SavedActive" onClick={() => saveFunc() }/></button>) : (<button type='button' className='MoviesCard__SavedButton'><img src={Like} alt="Лайк" className="MoviesCard__Saved" onClick={() => saveFunc() }/></button>)
                
                }
            </div>
        </div>
        <p className="MoviesCard__Duration">{duration}</p>
    </li>
  )
}

export default MoviesCard