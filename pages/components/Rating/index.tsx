import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FlexRow } from '../../styles';

const Rating = ({
  numberOfStars = 5,
  rating = 0,
}: {
  numberOfStars?: number;
  rating: number;
}) => {
  const starIds = Array.from({ length: numberOfStars }, (_, i) => i + 1);

  return (
    <FlexRow>
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
    </FlexRow>
  );
};

export default Rating;
