import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({
  numberOfStars = 5,
  rating = 0,
}: {
  numberOfStars?: number;
  rating: number;
}) => {
  const starIds = Array.from({ length: numberOfStars }, (_, i) => i + 1);

  return (
    <>
      {starIds.map((starId) => {
        const isActiveStar = starId <= Number(Math.round(rating));

        return (
          <div key={starId}>
            <div>
              {isActiveStar ? (
                <div>
                  <AiFillStar />
                </div>
              ) : (
                <div>
                  <AiOutlineStar />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Rating;
