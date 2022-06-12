import { createSignal, ParentComponent } from "solid-js";
import RatingSetter from "./RatingSetter";
import ThankYouDisplay from "./ThankYouDisplay";

export const [rating, setRating] = createSignal(0);
export const [submitted, setSubmitted] = createSignal(false);

const RatingCard: ParentComponent<{}> = (props) => {
    return (
        <div class="p-8 bg-custom-dark-blue rounded-xl space-y-6 w-96">
            {submitted() ? <ThankYouDisplay /> : <RatingSetter />}
        </div>
    );
};
export default RatingCard;