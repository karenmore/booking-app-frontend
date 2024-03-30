import { useEffect } from "react"
import useCrud from "../../hooks/useCrud"
import './styles/CommentsSections.css'
import { format } from 'date-fns';

const CommentsSection = ({ hotelId }) => {

  const [reviews, getReviews] = useCrud()

  useEffect(() => {
    if (hotelId) {
      getReviews(`/reviews?hotelId=${hotelId}`)
    }
  }, [hotelId])

  console.log(reviews);

  return (
    <>
      <div className="reviews__container">
        <div>
          <h2 className="reviews">Reviews</h2>
          <div className="reviews__info">
            {
              reviews?.results.map(reviewInfo => (
                <div key={reviewInfo.id}>
                  <div className="content__info1">
                    <div>{reviewInfo.rating} ⭐️</div>
                    <p>{reviewInfo.comment}</p>
                    <h3>{reviewInfo.user.firstName} {reviewInfo.user.lastName}</h3>
                    <h3>{format (new Date(reviewInfo.createdAt), 'dd/MM/yyy HH:mm:mm')}</h3>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentsSection