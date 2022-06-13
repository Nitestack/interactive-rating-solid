import type { ParentComponent } from "solid-js";
import StarIcon from "./StarIcon";
import { rating, setSubmitted } from "./RatingCard";
import RatingSetterStars from "./RatingSetterStars";

const RatingSetter: ParentComponent = () => {
    function setRating() {
        return () => {
            if (rating() > 0) setSubmitted(true);
        };
    };
    return (
        <>
            <StarIcon />
            <p class="text-custom-white font-bold text-3xl"> How did we do? </p>
            <p class="text-custom-light-grey"> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <RatingSetterStars />
            <button onClick={setRating()} class="tracking-wide rounded-3xl bg-custom-orange w-full h-full py-3 uppercase text-custom-white font-bold text-lg hover:bg-custom-white hover:text-custom-orange"> Submit </button>
        </>
    );
};
export default RatingSetter;